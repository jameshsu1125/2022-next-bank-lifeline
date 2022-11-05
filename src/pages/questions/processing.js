import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { QuestionContext } from '../../settings/config';
import { PROCESSING_DURATION, QUESTIONS_PAGE } from '../../settings/constant';
import './processing.less';

const Processing = memo(() => {
	const [, setContext] = useContext(QuestionContext);
	const [style, setStyle] = useTween({ opacity: 0, scale: 0 });
	useEffect(() => {
		setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 500 });
		setTimeout(() => {
			setContext((S) => ({ ...S, page: QUESTIONS_PAGE.form }));
		}, PROCESSING_DURATION);
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
			<div className='s' />
		</div>
	);
});
export default Processing;
