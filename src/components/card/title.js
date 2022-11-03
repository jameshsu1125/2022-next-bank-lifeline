import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LoadingContext } from '../../settings/config';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './title.less';

const CardTitle = memo(({ children }) => {
	const [context] = useContext(LoadingContext);
	const { transition } = context;
	const [style, setStyle] = useTween({ opacity: 0, x: -100 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, x: 0 }, { duration: 500, delay: LOGO_DURATION.title });
		}
	}, [transition]);

	return (
		<div className='CardTitle' style={style}>
			<div>
				<b>{children}</b>
			</div>
		</div>
	);
});
export default CardTitle;
