import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LoadingContext } from '../../settings/config';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import Texture from '../hand/texture';
import './index.less';

const Monitor = memo(() => {
	const [context] = useContext(LoadingContext);
	const { transition } = context;
	const [style, setStyle] = useTween({ opacity: 0, x: 130 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, x: 0 }, { duration: 500, delay: LOGO_DURATION.monitor });
		}
	}, [transition]);

	return (
		<div className='Monitor' style={style}>
			<div className='bg' />
			<div className='content'>
				<Texture status='monitor' />
			</div>
		</div>
	);
});
export default Monitor;
