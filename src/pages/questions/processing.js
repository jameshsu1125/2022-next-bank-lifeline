import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../settings/config';
import { PROCESSING_DURATION, QUESTIONS_PAGE } from '../../settings/constant';
import './processing.less';

const Processing = memo(() => {
	const [, setContext] = useContext(QuestionContext);
	const [style, setStyle] = useTween({ opacity: 0, scale: 0 });
	const [, setFrame] = useTween({ index: 0 });

	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 500 });
		setFrame(
			{ index: 1 },
			{
				duration: PROCESSING_DURATION,
				onUpdate: () => setOpacity(Math.random()),
				onComplete: () => {
					setContext((S) => ({ ...S, page: QUESTIONS_PAGE.form }));
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
