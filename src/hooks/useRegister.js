import Fetch from 'lesca-sp88-fetch';
import { useContext, useState } from 'react';
import { Context, getResultById } from '../settings/config';
import { ACTION, PRCESSING } from '../settings/constant';

const { hostname } = window.location;

const useRegister = () => {
	const [context, setContext] = useContext(Context);
	const Entrytime = context[ACTION.entrytime];
	const { result } = context[ACTION.result];
	const { index } = getResultById[result].profile;

	const [state, setState] = useState();
	const fetch = async (props) => {
		setContext({ type: ACTION.prcessing, state: { ...PRCESSING, enabled: true } });
		const date = new Date();
		const Agreetime = `${date.getFullYear()}/${
			date.getMonth() + 1
		}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

		if (hostname === 'localhost' || hostname === 'jameshsu1125.github.io') {
			setTimeout(() => {
				const res = { ResponseCode: '00', ResponseMSG: 'OK' };
				setState(res);
				setContext({ type: ACTION.prcessing, state: { ...PRCESSING, enabled: false } });
			}, 500);
			return;
		}

		const res = await Fetch.post('/Create', { ...props, Agreetime, Entrytime, Result: index });
		if (res) {
			const { ResponseMSG, ResponseCode } = res;
			if (ResponseCode === '00') setState(res);
			else alert(ResponseMSG);
		} else alert('主機愈時，請稍候再試。');

		setContext({ type: ACTION.prcessing, state: { ...PRCESSING, enabled: false } });
	};
	return [state, fetch];
};
export default useRegister;
