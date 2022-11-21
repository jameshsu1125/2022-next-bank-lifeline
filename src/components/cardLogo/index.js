import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './index.less';
import Logo from './logo';

const CardLogo = memo(({ children, transition }) => {
	const [style, setStyle] = useTween({ opacity: 0, x: -100 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, x: 0 }, { duration: 500, delay: LOGO_DURATION.button });
		}
	}, [transition]);

	return (
		<div className='CardLogo'>
			<div className='logo'>
				<Logo transition={transition} />
			</div>
			<div style={style}>{children}</div>
		</div>
	);
});
export default CardLogo;
