import { memo } from 'react';
import './index.less';

const Card = memo(({ children }) => (
	<div className='Card'>
		<div>{children}</div>
	</div>
));
export default Card;
