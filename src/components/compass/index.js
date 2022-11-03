import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LoadingContext } from '../../settings/config';
import { LOGO_DURATION, TRANSITION } from '../../settings/constant';
import './index.less';

const Compass = memo(({ children }) => {
	const [context] = useContext(LoadingContext);
	const { transition } = context;
	const [style, setStyle] = useTween({ opacity: 0, scale: 0 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle(
				{ opacity: 1, scale: 1 },
				{
					duration: 500,
					delay: LOGO_DURATION.compass,
				},
			);
		}
	}, [transition]);

	return (
		<div className='Compass' style={style}>
			{[...new Array(3).keys()].map((e) => (
				<div key={e} />
			))}
			<div className='content'>{children}</div>
		</div>
	);
});
export default Compass;
