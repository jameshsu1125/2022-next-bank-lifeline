import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION, TRANSITION } from '../../../settings/constant';
import './hand.less';

const Hand = memo(({ classname, random, transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 2 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay });
		}
	}, [transition]);
	return <div className={`p ${classname}-${random}`} style={style} />;
});

const ViewProfile = memo(({ random, transition, delay }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const { profile } = getResultById[result];
	const { classname } = profile;
	return (
		<div className='ViewProfile'>
			<div className='position'>
				<Hand classname={classname} random={random} transition={transition} delay={delay} />
			</div>
		</div>
	);
});
export default ViewProfile;
