import { memo, useEffect } from 'react';
import './index.less';

const RegularButton = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='RegularButton'>
			<div>
				<div>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
});
export default RegularButton;
