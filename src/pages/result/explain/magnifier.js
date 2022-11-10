import { memo } from 'react';
import './index.less';

// const getXY = (index) => {
// 	const n = 120;
// 	const r = 20;
// 	const x = `${(Math.cos((Math.PI / 180) * index * (360 / n)) * r).toFixed(0)}`;
// 	const y = `${(Math.sin((Math.PI / 180) * index * (360 / n)) * r).toFixed(0)}`;
// 	return { x, y };
// };

const Magnifier = memo(({ classname, random }) => (
	<div className={`magnifier m${classname}`}>
		<div className={`l l${classname} r${classname}-${random}`}>
			<div />
		</div>
	</div>
));
export default Magnifier;
