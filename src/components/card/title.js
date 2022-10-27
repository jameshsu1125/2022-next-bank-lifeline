import { memo } from 'react';
import './title.less';

const CardTitle = memo(({ children }) => (
	<div className='CardTitle'>
		<div>{children}</div>
	</div>
));
export default CardTitle;
