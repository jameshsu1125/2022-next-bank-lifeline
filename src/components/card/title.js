import { memo } from 'react';
import './title.less';

const CardTitle = memo(({ children }) => (
	<div className='CardTitle'>
		<div>
			<b>{children}</b>
		</div>
	</div>
));
export default CardTitle;
