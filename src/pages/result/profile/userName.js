import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../../../settings/config';
import { ACTION, TRANSITION } from '../../../settings/constant';
import './userName.less';

const Name = memo(({ fullName, transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, x: -100 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, x: 0 }, { duration: 500, delay });
		}
	}, [transition]);

	return <div style={style}>{fullName}</div>;
});

const Subline = memo(({ transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, x: -100 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, x: 0 }, { duration: 500, delay: delay + 50 });
		}
	}, [transition]);

	return <div style={style}>的後天生命線</div>;
});

const UserName = memo(({ transition, delay }) => {
	const [context] = useContext(Context);
	const { name } = context[ACTION.result];
	const [fullName, setFullName] = useState('');

	useEffect(() => {
		if (name) setFullName(name);
		else setFullName('你');
	}, [name]);

	return (
		<div className='UserName'>
			<Name fullName={fullName} transition={transition} delay={delay} />
			<Subline transition={transition} delay={delay} />
		</div>
	);
});
export default UserName;
