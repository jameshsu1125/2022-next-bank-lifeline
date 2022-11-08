import { memo } from 'react';
import ViewProfile from './hand';
import './index.less';
import Skills from './skills';
import UserName from './userName';

const ResultProfile = memo(() => (
	<div className='ResultProfile'>
		<div className='outlineBox'>
			<div className='container'>
				<div className='texts' />
				<div className='compass' />
				<div className='f-text' />
				<div className='content'>
					<UserName />
					<ViewProfile />
					<Skills />
				</div>
			</div>
		</div>
	</div>
));
export default ResultProfile;
