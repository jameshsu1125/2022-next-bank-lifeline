import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { TRANSITION } from '../../../settings/constant';
import ViewProfile from './hand';
import Headline from './headline';
import './index.less';
import Skills from './skills';
import UserName from './userName';

const ResultProfile = memo(({ random, transition }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1 }, 500);
		}
	}, [transition]);
	return (
		<div className='ResultProfile' style={style}>
			<div className='outlineBox'>
				<div className='container'>
					<div className='texts' />
					<div className='compass' />
					<div className='f-text' />
					<div className='content'>
						<UserName />
						<ViewProfile random={random} />
						<Headline />
						<Skills />
					</div>
				</div>
			</div>
		</div>
	);
});
export default ResultProfile;
