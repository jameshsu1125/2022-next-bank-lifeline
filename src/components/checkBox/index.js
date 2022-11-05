import { memo, useEffect } from 'react';
import './index.less';

const CheckBox = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='CheckBox'>
			<input type='checkbox' />
			<span>{children}</span>
			<div className='visible-button' />
		</div>
	);
});
export default CheckBox;
