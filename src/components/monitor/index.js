import { memo } from 'react';
import Texture from '../hand/texture';
import './index.less';

const Monitor = memo(() => (
	<div className='Monitor'>
		<div className='bg' />
		<div className='content'>
			<Texture status='monitor' />
		</div>
	</div>
));
export default Monitor;
