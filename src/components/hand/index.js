import { memo, useEffect } from 'react';
import './index.less';
import Texture from './texture';

const Hand = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Hand'>
			<div>
				<Texture />
			</div>
		</div>
	);
});
export default Hand;
