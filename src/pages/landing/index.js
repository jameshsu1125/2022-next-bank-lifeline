import { memo, useEffect } from 'react';
import Card from '../../components/card';
import StandTop from '../../components/card/standTop';
import StandBottom from '../../components/card/standBottom';
import CardTitle from '../../components/card/title';
import Container from '../../components/container';
import './index.less';
import VerticalRight from '../../components/card/vertical-right';

const Landing = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Landing'>
			<Container>
				<Card>
					<StandTop>
						Future
						<br />
						analysis
					</StandTop>
					<StandBottom>心理學</StandBottom>
					<VerticalRight>手相</VerticalRight>
					<CardTitle>從心理科學分析性格</CardTitle>
				</Card>
			</Container>
		</div>
	);
});
export default Landing;
