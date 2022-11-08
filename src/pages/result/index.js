import { memo } from 'react';
import Container from '../../components/container';
import ResultButton from './buttons';
import ResultDescription from './description';
import ResultExplane from './explan';
import './index.less';
import ResultProfile from './profile';

const Result = memo(() => (
	<div className='Result'>
		<Container>
			<div className='container'>
				<ResultProfile />
				<ResultDescription />
				<ResultExplane />
				<ResultButton />
			</div>
		</Container>
	</div>
));
export default Result;
