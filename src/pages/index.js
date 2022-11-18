import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Landscape from 'lesca-react-landscape';
import LoadingProcess from 'lesca-react-loading';
import Fetch, { contentType } from 'lesca-sp88-fetch';
import { lazy, memo, Suspense, useContext, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION, PAGE } from '../settings/constant';
import '../settings/global.less';
import LandscapeIcon from './img/landscape.png';

Facebook.install(process.env.FB_ID);
Click.install();
Fetch.install({ hostUrl: process.env.API, contentType: contentType.JSON });

const Pages = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];
	const prcessing = context[ACTION.prcessing];

	const Page = useMemo(() => {
		const [target] = Object.values(PAGE).filter((data) => data === page);
		const Element = lazy(() => import(`.${target}/`));

		if (target === PAGE.result) Click.setEnabled(false);
		else Click.setEnabled(true);

		if (target) {
			return (
				<Suspense fallback=''>
					<Element />
				</Suspense>
			);
		}
		return '';
	}, [page]);

	const style = useMemo(() => {
		if (page === PAGE.result) return 'w-full';
		return 'w-full h-full absolute';
	}, [page]);

	return (
		<div className={style}>
			{Page}
			{prcessing.enabled && (
				<LoadingProcess backgroundColor='rgba(248, 236, 44, 0.8)' iconColor='#000'>
					<span className='text-black'>{prcessing.body}</span>
				</LoadingProcess>
			)}
			<Landscape
				style={{
					backgroundColor: '#F8EC2C',
					zIndex: 999,
					backgroundImage: `url(${LandscapeIcon})`,
				}}
			/>
		</div>
	);
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	return (
		<div className='App'>
			<Context.Provider {...{ value }}>
				<Pages />
			</Context.Provider>
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
