import { memo, useEffect } from 'react';
import './index.less';

const Compass = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Compass'>
			{[...new Array(3).keys()].map((e) => (
				<div key={e} />
			))}
			<div className='content'>{children}</div>
		</div>
	);
});
export default Compass;
