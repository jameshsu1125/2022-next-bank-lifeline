import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { HAND_DURATIONS } from '../../settings/constant';
import './index.less';

const Map2 = memo(({ status = 'main', onComplete = () => {} }) => {
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
		main: 'mt-[7rem] ml-[-1.8rem] scale-125',
		monitor: 'scale-[0.43] mt-[2.2rem] ml-[-0.3rem]',
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
				viewBox='0 0 149 144'
				width='149'
				height='144'
			>
				<path
					d='M57.2,38.3c3.9-4.2,55.3-14.7,88.6,0'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M4.7,47.7c0,0,2.5-4.5,7.6-9'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M21.8,30.8c0,0,3.8-3.5,10-7'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M41.7,18.1c0,0,5.5-3.6,12-6'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M63.6,8.2c0,0,4.8-1.8,12.3-3.4'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M103.4,11.3c0,0,6-0.4,11.9,0.7'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M126.2,14.4c0,0,9.1,2.4,12.8,4.7'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M91.7,138.7c0,0-8.1-4.9-10.8-7.9'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M73.8,124.1c0,0-6.5-7.1-9.2-11.4'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M59.7,104.8c0,0-3.5-6.2-5.2-11.6'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
				<path
					d='M51.8,81.5c0,0-1.1-8,0-13.4'
					fill='none'
					stroke={color[status]}
					strokeWidth='5'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeMiterlimit='10'
				/>
			</svg>
		</div>
	);
});
export default Map2;
