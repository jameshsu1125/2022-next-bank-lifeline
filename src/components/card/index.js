import { memo } from 'react';
import Watch from '../watch';
import Descriptions from './descriptions';
import './index.less';
import StandBottom from './standBottom';
import StandTop from './standTop';
import CardTitle from './title';
import VerticalLeft from './vertical-left';
import VerticalRight from './vertical-right';

const Card = memo(({ children }) => (
	<>
		<div className='Card'>
			<div className='container'>
				<div />
			</div>
			<StandBottom>心理學</StandBottom>
			<VerticalRight>手相</VerticalRight>
			<VerticalLeft>personality</VerticalLeft>
			<StandTop>
				psychology
				<br />
				analysis
			</StandTop>
			<Watch />
			<Watch y='60px' delay />
		</div>
		<div className='Card-content'>
			<div className='center'>{children}</div>
			<CardTitle>從心理科學分析性格</CardTitle>
			<Descriptions>
				性格 是後天的生命線
				<b>象徵你的將來走勢</b>
			</Descriptions>
		</div>
	</>
));
export default Card;
