import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LoadingContext } from '../../settings/config';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './descriptions.less';

const Descriptions = memo(({ children }) => {
	const [context] = useContext(LoadingContext);
	const { transition } = context;
	const [style, setStyle] = useTween({ opacity: 0, y: -300, lineHeight: '10rem' });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle(
				{ opacity: 1, y: 0, lineHeight: '2rem' },
				{ duration: 500, delay: LOGO_DURATION.description },
			);
		}
	}, [transition]);

	return (
		<div style={style} className='Descriptions'>
			{children}
		</div>
	);
});
export default Descriptions;
