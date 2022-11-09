import useTween from 'lesca-use-tween';
import { memo, useEffect, useRef } from 'react';
import { HAND_DURATIONS } from '../../settings/constant';
import './index.less';

const Map1 = memo(({ status = 'main', onComplete = () => {} }) => {
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
		main: 'mt-[7.3rem] ml-[-1.6rem] scale-[1.1]',
		monitor: 'scale-[0.43] mt-[2.2rem] ml-[0.4rem]',
	};

	const color = {
		main: '#231814',
		monitor: '#F8EC2C',
	};
	return (
		<div className={position[status]} style={style}>
			<svg
				ref={ref}
				width='123'
				height='145'
				viewBox='0 0 123 145'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M28.6231 45.503C33.2082 41.1688 81.8937 16.9661 119.073 38.1858'
					stroke={color[status]}
					strokeWidth='6'
					strokeLinecap='round'
				/>
				<path
					d='M40.1904 141.757C33.2047 136.233 -9.11821 75.526 16.5198 25.4387'
					stroke={color[status]}
					strokeWidth='6'
					strokeLinecap='round'
				/>
				<path
					d='M57.2463 10.3197C61.053 7.18273 91.4691 1.92957 117.837 20.9973'
					stroke={color[status]}
					strokeWidth='6'
					strokeLinecap='round'
				/>
			</svg>
		</div>
	);
});
export default Map1;
