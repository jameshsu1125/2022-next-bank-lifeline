import { memo, useContext } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './headline.less';

const Headline = memo(() => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { name } = data.profile;
	return (
		<div className='ProfileHeadline'>
			<div>{name}</div>
		</div>
	);
});
export default Headline;
