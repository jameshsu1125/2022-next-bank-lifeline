import { memo, useEffect } from 'react';
import Card from '../../components/card';
import CardLogo from '../../components/cardLogo';
import Container from '../../components/container';
import RegularButton from '../../components/regularButton';
import './index.less';

const Landing = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Landing'>
			<Container>
				<Card />
				<CardLogo>
					<RegularButton>立即測</RegularButton>
				</CardLogo>
			</Container>
		</div>
	);
});
export default Landing;
