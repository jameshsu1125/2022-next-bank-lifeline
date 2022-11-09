import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION, TRANSITION } from '../../../settings/constant';
import './headline.less';

const Name = memo(({ name, transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, x: -200 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, x: 0 }, { duration: 500, delay });
		}
	}, [transition]);
	return (
		<div className='ProfileHeadline' style={style}>
			<div>{name}</div>
		</div>
	);
});

const Headline = memo(({ transition, delay }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { name } = data.profile;
	return <Name name={name} transition={transition} delay={delay} />;
});
export default Headline;
