import { memo, useMemo } from 'react';
import './index.less';

const Container = memo(({ children, maxHeight = true }) => {
	const classname = useMemo(() => {
		if (maxHeight) return 'h-full w-full max-w-md max-h-[840px] p-5';
		return 'h-full w-full max-w-md p-5';
	}, [maxHeight]);
	return (
		<div className='Container relative flex h-full w-full justify-center'>
			<div className={classname}>{children}</div>
		</div>
	);
});
export default Container;
