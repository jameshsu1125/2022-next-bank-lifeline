import ImagePreloader from 'lesca-image-onload';
import { lazy, memo, Suspense, useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Container from '../../components/container';
import { TRANSITION } from '../../settings/constant';
import './index.less';
import ResultProfile from './profile';

const ResultDescription = lazy(() => import('./description'));
const ResultExplain = lazy(() => import('./explain'));
const ResultButton = lazy(() => import('./buttons'));

const Category = memo(({ children, setviewCounter, threshold }) => (
	<InView
		as='div'
		triggerOnce
		threshold={threshold}
		onChange={(inView) => inView && setviewCounter((c) => c + 1)}
	>
		{children}
	</InView>
));

const Result = memo(() => {
	const ref = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);
	const [viewCounter, setviewCounter] = useState(0);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);

	return (
		<div ref={ref} className='Result'>
			<Container maxHeight={false}>
				<div className='container'>
					<ResultProfile transition={transition} />
					{transition === TRANSITION.fadeIn && (
						<Suspense>
							<Category threshold={0.1} setviewCounter={setviewCounter}>
								<ResultDescription viewCounter={viewCounter} />
							</Category>
							<Category threshold={0.5} setviewCounter={setviewCounter}>
								<ResultExplain viewCounter={viewCounter} />
							</Category>
							<Category threshold={0.5} setviewCounter={setviewCounter}>
								<ResultButton viewCounter={viewCounter} />
							</Category>
						</Suspense>
					)}
				</div>
			</Container>
		</div>
	);
});
export default Result;
