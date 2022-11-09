import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { HAND_DURATIONS } from '../../settings/constant';

const Map0 = memo(({ status = 'main', onComplete = () => {} }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 1 });
	useEffect(() => {
		[...ref.current.getElementsByTagName('path')].forEach((path) => {
			const total = path.getTotalLength();
			path.setAttribute('style', `stroke-dasharray:${total}; stroke-dashoffset:${total}`);
		});
		setStyle(
			{ opacity: 0 },
			{ duration: 500, delay: HAND_DURATIONS.css + HAND_DURATIONS.stay, onComplete },
		);
	}, []);

	const position = {
		main: 'mt-[5.4rem] ml-[-3.2rem] scale-[1.1]',
		monitor: 'scale-[0.43] mt-[1rem]',
	};

	const color = {
		main: '#231814',
		monitor: '#F8EC2C',
	};

	return (
		<div className={position[status]} style={style}>
			<svg
				ref={ref}
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				viewBox='0 0 117 95'
				width='117'
				height='95'
				style={{ enableBackground: 'new 0 0 117 95' }}
			>
				<path
					d='M2.7,24.9c0,0,22.9,8.1,46.6,0.4S87.5,7.4,94.2,3'
					fill='none'
					stroke={color[status]}
					strokeWidth='6'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M15.5,60.3c36.7-19.4,75-34,98.4-41.7'
					fill='none'
					stroke={color[status]}
					strokeWidth='6'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M26.1,92.1c14.2-16,24.6-29.9,62.2-44'
					fill='none'
					stroke={color[status]}
					strokeWidth='6'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
			</svg>
		</div>
	);
});
export default Map0;
