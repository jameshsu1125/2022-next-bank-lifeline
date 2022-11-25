import ImagePreloader from 'lesca-image-onload';
import { lazy, memo, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Container from '../../components/container';
import StaticDialog from '../../components/dialog/static';
import { Context } from '../../settings/config';
import { ACTION, PAGE, TRANSITION } from '../../settings/constant';
import './index.less';
import ResultProfile from './profile';

const ResultDescription = lazy(() => import('./description'));
const ResultExplain = lazy(() => import('./explain'));
const ResultButton = lazy(() => import('./buttons'));

const Category = memo(({ children, setviewCounter, threshold }) => (
	<InView
		as='div'
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

	const [context, setContext] = useContext(Context);
	const image = context[ACTION.image];
	const [lightBoxState, setLightBoxState] = useState(false);

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
								<ResultButton viewCounter={viewCounter} setLightBoxState={setLightBoxState} />
							</Category>
						</Suspense>
					)}
				</div>
			</Container>
			{lightBoxState && (
				<StaticDialog
					onClick={() => {
						setContext({ type: ACTION.page, state: PAGE.form });
					}}
					onFadein={() => {
						alert('再長按分享圖就可下載');
					}}
				>
					<img src={image.base64} alt='' className='pointer-events-auto h-auto max-h-[721px]' />
				</StaticDialog>
			)}
		</div>
	);
});
export default Result;
