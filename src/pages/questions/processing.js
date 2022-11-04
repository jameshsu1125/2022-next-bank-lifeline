import { memo, useEffect } from 'react';
import './index.less';

const Processing = memo(() => {
	useEffect(() => {}, []);
	return <div className='Processing'>Processing</div>;
});
export default Processing;
