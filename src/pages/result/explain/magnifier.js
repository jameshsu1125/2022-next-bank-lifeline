import { memo } from 'react';
import './magnifier.less';

const Magnifier = memo(({ classname, color }) => (
	<div className={`Magnifier m${classname}`}>
		<div className={`l l${classname} r${classname}-${color}`}>
			<div />
		</div>
	</div>
));
export default Magnifier;
