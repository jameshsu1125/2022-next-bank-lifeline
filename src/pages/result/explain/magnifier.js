import { memo } from 'react';
import './magnifier.less';

const Magnifier = memo(({ classname, random }) => (
	<div className={`Magnifier m${classname}`}>
		<div className={`l l${classname} r${classname}-${random}`}>
			<div />
		</div>
	</div>
));
export default Magnifier;
