import { memo, useMemo, useState } from 'react';
import Map0 from './map0';
import Map1 from './map1';
import Map2 from './map2';
import './texture.less';

const Texture = memo(({ status }) => {
	const [state, setState] = useState(0);

	const onComplete = () => {
		setState((d) => (d + 1) % 3);
	};

	const MapTexture = useMemo(() => {
		switch (state) {
			case 1:
				return <Map1 status={status} onComplete={onComplete} />;

			case 2:
				return <Map2 status={status} onComplete={onComplete} />;

			case 0:
			default:
				return <Map0 status={status} onComplete={onComplete} />;
		}
	}, [state]);

	return <div className='Texture'>{MapTexture}</div>;
});
export default Texture;
