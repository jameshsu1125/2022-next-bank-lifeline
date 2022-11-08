import { memo } from 'react';
import './index.less';

const Container = memo(({ children }) => (
	<div className='Container relative flex h-full w-full justify-center'>
		<div className='h-full w-full max-w-md p-5'>{children}</div>
	</div>
));
export default Container;
