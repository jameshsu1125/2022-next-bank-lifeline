import { memo, useEffect } from 'react';
import './index.less';

const Container = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='flex w-full justify-center'>
			<div className='max-w-3xl'>{children}</div>
		</div>
	);
});
export default Container;
