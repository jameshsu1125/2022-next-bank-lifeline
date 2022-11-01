import { memo, useEffect } from 'react';
import './descriptions.less';

const Descriptions = memo(({ children }) => {
	useEffect(() => {}, []);
	return <div className='Descriptions'>{children}</div>;
});
export default Descriptions;
