import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Context, getResultById } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import { Options, render } from './canvasRender';

import './index.less';

const style = {
	position: 'fixed',
	top: '0px',
	left: '0px',
	transform: `scale(${Options.canvas.scale})`,
	transformOrigin: 'left top',
	display: 'none',
};

const Canvas = memo(({ onCapture }) => {
	const [context, setContext] = useContext(Context);
	const { name, result, color } = context[ACTION.result];
	const { profile, description } = getResultById[result];
	const canvas = useRef();
	const [drawed, setDrawed] = useState(false);

	useEffect(() => {
		if (drawed) {
			const image = canvas.current.toDataURL('image/png', '1.0');
			setContext({ type: ACTION.image, state: { base64: image } });
			onCapture();
		}
	}, [drawed]);

	useEffect(() => {
		const ctx = canvas.current?.getContext('2d');

		render({ profile, description, name, color, ctx, canvas, setDrawed });
	}, [context]);

	return (
		<canvas
			ref={canvas}
			width={Options.canvas.width}
			height={Options.canvas.height}
			className='fixed top-0 bg-blue-600'
			style={style}
		/>
	);
});
export default Canvas;
