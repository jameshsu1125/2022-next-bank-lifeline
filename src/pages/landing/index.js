import ImagePreloader from 'lesca-image-onload';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import Card from '../../components/card';
import CardLogo from '../../components/cardLogo';
import Compass from '../../components/compass';
import Container from '../../components/container';
import Hand from '../../components/hand';
import Monitor from '../../components/monitor';
import RegularButton from '../../components/regularButton';
import { Context } from '../../settings/config';
import { ACTION, PAGE, TRANSITION } from '../../settings/constant';
import './index.less';

const Landing = memo(() => {
	const [, setContext] = useContext(Context);

	const ref = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => {
			setTransition(TRANSITION.fadeIn);
		});
	}, []);

	return (
		<div ref={ref} className='Landing'>
			<Container>
				<Card>
					<Compass transition={transition}>
						<Hand transition={transition} />
					</Compass>
				</Card>
				<CardLogo transition={transition}>
					<RegularButton
						onClick={() => {
							setContext({ type: ACTION.page, state: PAGE.questions });
						}}
					>
						立即測
					</RegularButton>
				</CardLogo>
				<Monitor />
			</Container>
		</div>
	);
});
export default Landing;
