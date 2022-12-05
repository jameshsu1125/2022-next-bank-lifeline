import { memo, useEffect, useRef, useState } from 'react';
import { Pad } from '../../settings/config';
import './index.less';

const Watch = memo(
	({ start = Math.floor(Math.random() * 99), x = '0px', y = '0px', delay = false }) => {
		const [state, setState] = useState(start);
		const interval = useRef(0);
		useEffect(() => {
			const countDown = () => {
				setState((s) => (s > 0 ? s - 1 : 99));
			};
			interval.current = setInterval(countDown, 1000);
			return () => clearInterval(interval.current);
		}, []);

		return (
			<div
				className={`Watch${delay ? ' Watch-delay' : ''}`}
				style={{ transform: `translateX(${x}) translateY(${y})` }}
			>
				<div>
					<span>{Pad(state, 2)}</span>
				</div>
			</div>
		);
	},
);
export default Watch;
