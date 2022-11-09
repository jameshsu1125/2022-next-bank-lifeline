import ImagePreloader from 'lesca-image-onload';
import { lazy, memo, Suspense, useEffect, useRef, useState } from 'react';
import Container from '../../components/container';
import { TRANSITION } from '../../settings/constant';
import './index.less';
import ResultProfile from './profile';

const ResultDescription = lazy(() => import('./description'));
const ResultExplane = lazy(() => import('./explan'));
const ResultButton = lazy(() => import('./buttons'));

const Result = memo(() => {
	const ref = useRef();
	const [random] = useState(Math.random() > 0.5 ? 1 : 2);
	const [transition, setTransition] = useState(TRANSITION.unset);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);

	return (
		<div ref={ref} className='Result'>
			<Container>
				<div className='container'>
					<ResultProfile random={random} transition={transition} />
					{transition === TRANSITION.fadeIn && (
						<Suspense>
							<ResultDescription />
							<ResultExplane random={random} />
							<ResultButton />
						</Suspense>
					)}
				</div>
			</Container>
		</div>
	);
});
export default Result;
