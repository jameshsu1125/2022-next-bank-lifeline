import ImagePreloader from 'lesca-image-onload';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import Card from '../../components/card';
import CardLogo from '../../components/cardLogo';
import Compass from '../../components/compass';
import Container from '../../components/container';
import Hand from '../../components/hand';
import Monitor from '../../components/monitor';
import RegularButton from '../../components/regularButton';
import { Context, LoadingContext } from '../../settings/config';
import { ACTION, LANDING_STATE, PAGE, TRANSITION } from '../../settings/constant';
import './index.less';

const Landing = memo(() => {
	const [, setContext] = useContext(Context);

	const ref = useRef();
	const value = useState(LANDING_STATE);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => {
			const [, setLoadingContext] = value;
			setLoadingContext((S) => ({ ...S, transition: TRANSITION.fadeIn }));
		});
	}, []);

	return (
		<div ref={ref} className='Landing'>
			<LoadingContext.Provider value={value}>
				<Container>
					<Card>
						<Compass>
							<Hand />
						</Compass>
					</Card>
					<CardLogo>
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
			</LoadingContext.Provider>
		</div>
	);
});
export default Landing;
