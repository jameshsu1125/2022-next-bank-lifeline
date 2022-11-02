import { memo, useEffect } from 'react';
import './index.less';

const Compass = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Compass'>
			{[...new Array(3).keys()].map((e) => (
				<div key={e} />
			))}
		</div>
	);
});
export default Compass;
