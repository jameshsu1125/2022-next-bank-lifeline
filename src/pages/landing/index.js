import { memo, useEffect } from 'react';
import Container from '../../components/container';
import './index.less';

const Landing = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Landing'>
			<Container>landing</Container>
		</div>
	);
});
export default Landing;
