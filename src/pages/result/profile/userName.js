import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './userName.less';

const UserName = memo(() => {
	const [context] = useContext(Context);
	const { name } = context[ACTION.result];
	const [fullName, setFullName] = useState('');

	useEffect(() => {
		if (name) {
			setFullName(
				<>
					<div>{name}</div>
					<div>的後天生命線</div>
				</>,
			);
		} else {
			setFullName('');
		}
	}, [name]);
	return <div className='UserName'>{fullName}</div>;
});
export default UserName;
