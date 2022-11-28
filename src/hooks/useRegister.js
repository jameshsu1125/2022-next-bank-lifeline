import Fetch from 'lesca-sp88-fetch';
import { useContext, useState } from 'react';
import { Context, getResultById } from '../settings/config';
import { ACTION, PRCESSING_STATE } from '../settings/constant';

const { hostname } = window.location;

const useRegister = () => {
	const [context, setContext] = useContext(Context);
	const Entrytime = context[ACTION.entrytime];
	const { result } = context[ACTION.result];
	const { index } = getResultById[result].profile;

	const [state, setState] = useState();
	const fetch = async (props) => {
		setContext({ type: ACTION.prcessing, state: { ...PRCESSING_STATE, enabled: true } });
		const date = new Date();
		const Agreetime = `${date.getFullYear()}/${
			date.getMonth() + 1
		}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

		if (hostname === 'localhost' || hostname === 'jameshsu1125.github.io') {
			setTimeout(() => {
				const res = { ResponseCode: '00', ResponseMSG: 'OK' };
				setState(res);
				setContext({ type: ACTION.prcessing, state: { ...PRCESSING_STATE, enabled: false } });
			}, 500);
			return;
		}

		const data = await Fetch.postStringify('/Create', {
			...props,
			Agreetime,
			Entrytime,
			Result: index,
		});

		if (data) {
			try {
				const { ResponseMSG, ResponseCode } = JSON.parse(data);
				if (ResponseCode === '00') setState(data);
				else alert(ResponseMSG);
			} catch (e) {
				alert('主機愈時，請稍候再試。');
			}
		} else alert('主機愈時，請稍候再試。');

		setContext({ type: ACTION.prcessing, state: { ...PRCESSING_STATE, enabled: false } });
	};
	return [state, fetch];
};
export default useRegister;
