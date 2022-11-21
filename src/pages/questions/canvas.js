/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Context, getResultById } from '../../settings/config';
import { ACTION, splitText } from '../../settings/constant';
import BG from './img/canvas/bg.png';
import Star from './img/canvas/star.svg';
import './index.less';

const style = {
	transform: 'scale(1)',
	transformOrigin: 'left top',
	display: 'none',
};

const Options = {
	lineHeight: 20,
	maxBlock: 24,
};

const position = { x: 31, y: 42 };

const ImageLoader = (url) => {
	return new Promise((res, rej) => {
		const image = new Image();
		image.onload = (img) => {
			res(img.currentTarget);
		};
		image.onerror = () => {
			rej(new Error('image loaded error'));
		};
		image.src = url;
	});
};

const Canvas = memo(({ onCapture }) => {
	const [context, setContext] = useContext(Context);
	const { name, result, color } = context[ACTION.result];
	const { profile, description } = getResultById[result];
	const canvas = useRef();

	const [drawed, setDrawed] = useState(false);

	useEffect(() => {
		if (drawed) {
			const image = canvas.current.toDataURL('image/jpeg', '0.5');
			setContext({ type: ACTION.image, state: { base64: image } });
			onCapture();
		}
	}, [drawed]);

	useEffect(() => {
		const ctx = canvas.current?.getContext('2d');
		const render = async () => {
			const bg = await ImageLoader(BG);
			const star = await ImageLoader(Star);
			const { classname } = profile;
			const { love } = description;
			const [love1, love2] = love;
			const { classname: classname1 } = love1;
			const { classname: classname2 } = love2;
			const profileImage = await ImageLoader(
				require(`../result/profile/img/${classname.slice(1, 2)}/b${color}.png`).default,
			);

			const love1Image = await ImageLoader(
				require(`../result/profile/img/${classname1.slice(1, 2)}/b1.png`).default,
			);
			const love2Image = await ImageLoader(
				require(`../result/profile/img/${classname2.slice(1, 2)}/b1.png`).default,
			);

			ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

			ctx.drawImage(bg, 0, 0, 448, 830);

			const opt = { gap: 0, scale: 1, size: 0 };
			ctx.textAlign = 'left';

			// user name
			ctx.font = 'bolder 17px Inter Black, Microsoft JhengHei, 微軟正黑體 bolder';
			ctx.fillText(name || '你', position.x, position.y);
			opt.gap = 20;
			ctx.fillText('的後天生命線', position.x, position.y + opt.gap);

			// result name
			opt.gap = 62;
			ctx.font = 'bolder 32px Microsoft JhengHei, 微軟正黑體 bolder';
			ctx.strokeStyle = 'black';
			ctx.fillText(profile.name, position.x, position.y + opt.gap);
			ctx.stroke();

			// result profile
			opt.gap = 116;
			opt.scale = 0.4;
			Array.from(new Array(profile.star).keys()).forEach((e, i) => {
				ctx.drawImage(
					star,
					75 + position.x + i * 50 * opt.scale,
					position.y + opt.gap,
					star.width * opt.scale,
					star.height * opt.scale,
				);
			});
			opt.gap = 151;
			ctx.font = 'bolder 14.5px 微軟正黑體';
			const [s, t] = profile.tenths.split('/');
			ctx.fillText(`每${t}人，不到${s}人`, 11 + position.x, position.y + opt.gap);
			opt.gap = 181;
			ctx.font = '12px 微軟正黑體';
			ctx.textAlign = 'center';
			profile.feature.forEach((e, i) => {
				ctx.fillText(e, 36 + position.x + i * 66, position.y + opt.gap);
			});

			// profile image
			opt.gap = -5;
			opt.size = 190;
			ctx.drawImage(
				profileImage,
				205 + position.x,
				position.y + (classname === 'p5' ? opt.gap + 6 : opt.gap),
				opt.size,
				opt.size,
			);

			// decription header
			opt.gap = 263;
			ctx.textAlign = 'left';
			ctx.font = '22px 微軟正黑體';
			ctx.fillText(description.title, 15 + position.x, position.y + opt.gap);

			// descriptiom personal
			opt.gap = 350;
			ctx.font = '14.5px 微軟正黑體';
			splitText(description.personality, Options.maxBlock).forEach((e, i) => {
				ctx.fillText(e, 15 + position.x, position.y + opt.gap + i * Options.lineHeight);
			});

			// descriptiom career
			opt.gap = 475;
			ctx.font = '14.5px 微軟正黑體';
			splitText(description.career, Options.maxBlock).forEach((e, i) => {
				ctx.fillText(e, 15 + position.x, position.y + opt.gap + i * Options.lineHeight);
			});

			// desciption love
			opt.gap = 573;
			opt.size = 120;
			const rowSize = 170;
			const roeLeft = 44;

			ctx.drawImage(
				love1Image,
				roeLeft + position.x,
				position.y + (classname1 === 'p5' ? opt.gap - 6 : opt.gap),
				opt.size,
				opt.size,
			);
			ctx.drawImage(
				love2Image,
				roeLeft + rowSize + position.x,
				position.y + (classname2 === 'p5' ? opt.gap - 8 : opt.gap),
				opt.size,
				opt.size,
			);
			opt.gap = 705;
			ctx.textAlign = 'center';
			ctx.font = 'bold 14.5px 微軟正黑體';

			love.forEach((e, index) => {
				const { name: na } = e;
				ctx.fillText(na, 105 + position.x + rowSize * index, position.y + opt.gap);
			});

			setDrawed(true);
		};
		render();
	}, [context]);

	return (
		<canvas ref={canvas} width='448' height='830' className='fixed top-0 bg-yellow' style={style} />
	);
});
export default Canvas;
