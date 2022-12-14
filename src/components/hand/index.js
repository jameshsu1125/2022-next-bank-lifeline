import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './index.less';
import Texture from './texture';

const Hand = memo(({ transition }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 0 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: LOGO_DURATION.hand });
		}
	}, [transition]);

	return (
		<div className='Hand' style={style}>
			<div>
				<Texture />
			</div>
		</div>
	);
});
export default Hand;
