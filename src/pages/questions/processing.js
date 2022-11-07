import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { Context, processingDuration, QuestionContext } from '../../settings/config';
import { ACTION, PAGE } from '../../settings/constant';
import './processing.less';

const Processing = memo(() => {
	const [, setContext] = useContext(Context);
	const [questionContext] = useContext(QuestionContext);
	const { answers, name } = questionContext;
	const [style, setStyle] = useTween({ opacity: 0, scale: 0 });
	const [, setFrame] = useTween({ index: 0 });
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const result = answers.filter((e) => e !== '').join('');
		setContext({ type: ACTION.result, state: { result, name } });
	}, [answers, name]);

	useEffect(() => {
		setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 500 });
		setFrame(
			{ index: 1 },
			{
				duration: processingDuration,
				onUpdate: () => setOpacity(Math.random()),
				onComplete: () => {
					setContext({ type: ACTION.page, state: PAGE.result });
				},
			},
		);
	}, []);

	return (
		<div className='Processing' style={style}>
			<div className='p'>
				<div>
					<div>
						<div />
						<div />
						<div />
					</div>
				</div>
			</div>
			<div className='s' style={{ opacity }} />
		</div>
	);
});
export default Processing;
