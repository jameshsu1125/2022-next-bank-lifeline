import { memo } from 'react';
import ViewProfile from './hand';
import Headline from './headline';
import './index.less';
import Skills from './skills';
import UserName from './userName';

const ResultProfile = memo(({ transition }) => (
	<div className='ResultProfile'>
		<div className='outlineBox'>
			<div className='container'>
				<div className='texts' />
				<div className='compass' />
				<div className='f-text' />
				<div className='content'>
					<UserName transition={transition} delay={0} />
					<Headline transition={transition} delay={50} />
					<ViewProfile transition={transition} delay={300} />
					<Skills transition={transition} delay={500} />
				</div>
			</div>
		</div>
	</div>
));
export default ResultProfile;
