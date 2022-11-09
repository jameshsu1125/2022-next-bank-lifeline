import { memo, useContext } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './hand.less';

const ViewProfile = memo(({ random }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const { profile } = getResultById[result];
	const { classname } = profile;
	return (
		<div className='ViewProfile'>
			<div className='position'>
				<div className={`p ${classname}-${random}`} />
			</div>
		</div>
	);
});
export default ViewProfile;
