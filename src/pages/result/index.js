import ImagePreloader from 'lesca-image-onload';
import { lazy, memo, Suspense, useContext, useEffect, useRef, useState } from 'react';
import Container from '../../components/container';
import StaticDialog from '../../components/dialog/static';
import { Context } from '../../settings/config';
import { ACTION, PAGE, TRANSITION } from '../../settings/constant';
import './index.less';
import ResultProfile from './profile';

const ResultDescription = lazy(() => import('./description'));
const ResultExplain = lazy(() => import('./explain'));
const ResultButton = lazy(() => import('./buttons'));

const Result = memo(() => {
	const ref = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);

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
							<ResultDescription />
							<ResultExplain />
							<ResultButton setLightBoxState={setLightBoxState} />
						</Suspense>
					)}
				</div>
			</Container>
			{lightBoxState && (
				<StaticDialog
					onClick={() => setContext({ type: ACTION.page, state: PAGE.form })}
					onClose={() => setLightBoxState(false)}
					onFadein={() => alert('請長按下載圖片或截圖分享')}
				>
					<img src={image.base64} alt='' className='pointer-events-auto h-auto max-h-[721px]' />
				</StaticDialog>
			)}
		</div>
	);
});
export default Result;
