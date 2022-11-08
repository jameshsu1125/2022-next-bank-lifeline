import Click from 'lesca-click';
import { lazy, memo, Suspense, useContext, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION, PAGE } from '../settings/constant';
import '../settings/global.less';

Click.install();

const Pages = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];

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

	return <div className='w-full'>{Page}</div>;
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
