import { memo, useContext, useState } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './hand.less';

const ViewProfile = memo(() => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const { profile } = getResultById[result];
	const { classname } = profile;
	const [random] = useState(Math.random() > 0.5 ? '1' : '2');
	return (
		<div className='ViewProfile'>
			<div className='position'>
				<div className={`p ${classname}-${random}`} />
			</div>
		</div>
	);
});
export default ViewProfile;
