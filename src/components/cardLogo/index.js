import { memo, useEffect } from 'react';
import './index.less';

const CardLogo = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='CardLogo'>
			<div className='logo' />
			{children}
		</div>
	);
});
export default CardLogo;
