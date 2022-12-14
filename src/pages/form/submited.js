import ImagePreloader from 'lesca-image-onload';
import { memo, useEffect, useRef, useState } from 'react';
import { TRANSITION } from '../../settings/constant';
import { Button, Dialog, Logo, Text } from './components';
import './submited.less';

const Submited = memo(() => {
	const ref = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);

	return (
		<div ref={ref} className='Submited'>
			<div className='row'>
				<Logo transition={transition} />
				<hr />
			</div>
			<div className='row'>
				<Text transition={transition} delay={50} />
			</div>
			<div className='row'>
				<Dialog transition={transition} delay={200} />
			</div>
			<Button transition={transition} delay={700} />
		</div>
	);
});
export default Submited;
