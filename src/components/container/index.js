import { memo, useEffect } from 'react';
import './index.less';

const Container = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Container relative flex w-full justify-center'>
			<div className='w-full max-w-md p-5'>{children}</div>
		</div>
	);
});
export default Container;
