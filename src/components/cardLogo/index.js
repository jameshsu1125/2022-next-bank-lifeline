import { memo } from 'react';
import './index.less';
import Logo from './logo';

const CardLogo = memo(({ children }) => (
	<div className='CardLogo'>
		<div className='logo'>
			<Logo />
		</div>
		{children}
	</div>
));
export default CardLogo;
