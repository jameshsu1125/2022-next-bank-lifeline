import useTween from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { Context, processingDuration, QuestionContext } from '../../settings/config';
import { ACTION, PAGE, RESULT } from '../../settings/constant';
import Canvas from './canvas';
import './processing.less';

const Processing = memo(() => {
	const [, setContext] = useContext(Context);
	const [questionContext] = useContext(QuestionContext);
	const { answers, name } = questionContext;
	const [style, setStyle] = useTween({ opacity: 0, scale: 0 });
	const [, setFrame] = useTween({ index: 0 });
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const result = answers.filter((e) => e !== '').join('') || RESULT.result;
		setContext({ type: ACTION.result, state: { ...RESULT, result, name } });
	}, [answers, name]);

	useEffect(() => {
		setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 500 });
	}, []);

	const onCapture = useCallback(() => {
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
		<>
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
			<Canvas onCapture={onCapture} />
		</>
	);
});
export default Processing;
