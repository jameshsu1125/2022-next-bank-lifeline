import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './index.less';

const Compass = memo(({ children, transition }) => {
	const [style, setStyle] = useTween({ scale: 0 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle(
				{ scale: 1 },
				{
					duration: 500,
					delay: LOGO_DURATION.compass,
				},
			);
		}
	}, [transition]);

	return (
		<div className='Compass' style={style}>
			{[...new Array(4).keys()].map((e) => (
				<div key={e} />
			))}
			<div className='content'>{children}</div>
		</div>
	);
});
export default Compass;
