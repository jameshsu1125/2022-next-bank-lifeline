import { memo, useEffect, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initialState, reducer } from '../settings/config';
import '../settings/global.less';
import { Context } from './context';

const Pages = memo(() => {
	useEffect(() => {}, []);
	return (
		<Routes>
			<Route path='/' element={<div />} />
		</Routes>
	);
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	return (
		<div className='App'>
			<Context.Provider {...{ value }}>
				<BrowserRouter>
					<Pages />
				</BrowserRouter>
			</Context.Provider>
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
