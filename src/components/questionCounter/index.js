import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { QuestionContext, questions } from '../../settings/config';
import { QUESTIONS_PAGE, TRANSITION } from '../../settings/constant';
import './index.less';

const TransitionProvider = memo(({ children, transition, setCounter }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 30 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) setStyle({ opacity: 1, y: 0 }, 500);
		else if (transition === TRANSITION.fadeOut) {
			setStyle(
				{ opacity: 0, y: -50 },
				{
					duration: 500,
					onComplete: () => {
						setCounter(false);
					},
				},
			);
		}
	}, [transition]);
	return (
		<div className='QuestionCounter' style={style}>
			{children}
		</div>
	);
});

const marginRight = ['15px'];
const QuestionCounter = memo(({ setCounter }) => {
	const [context] = useContext(QuestionContext);
	const { page, index, transition } = context;
	const [trans, setTrans] = useState(transition);

	useEffect(() => {
		if (page === QUESTIONS_PAGE.question && transition === TRANSITION.fadeIn) {
			setTrans(TRANSITION.fadeIn);
		} else if (page === QUESTIONS_PAGE.sign && transition === TRANSITION.fadeIn) {
			setTrans(TRANSITION.fadeOut);
		}
	}, [page, transition]);
	return (
		<TransitionProvider transition={trans} setCounter={setCounter}>
			性格分析
			<div className='questionCounter-compass'>
				<div>
					<div className='svg' />
					<div className='counter' style={{ marginRight: marginRight[index] || 0 }}>
						{index + 1}
					</div>
				</div>
			</div>
			<div className='questionCounter-total'>
				<div>{questions.length}</div>
			</div>
		</TransitionProvider>
	);
});
export default QuestionCounter;
