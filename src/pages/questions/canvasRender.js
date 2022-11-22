/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { ImageLoader, splitText } from '../../settings/constant';
import BG from './img/canvas/bg.png';
import Star from './img/canvas/star.svg';

export const Options = {
	lineHeight: 33,
	maxBlock: 24,
	position: { x: 52, y: 70 },
	canvas: { width: 750, height: 1390, scale: 0.5973333333333334 },
	fontFamily: 'Inter Black, Microsoft JhengHei, 微軟正黑體',
};

export const render = async ({ profile, description, name, color, ctx, canvas, setDrawed }) => {
	const { position } = Options;
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
	ctx.drawImage(bg, 0, 0, Options.canvas.width, Options.canvas.height);

	const opt = { gap: 0, scale: 1, size: 0 };
	ctx.textAlign = 'left';

	// user name
	ctx.font = `bolder 28px ${Options.fontFamily}`;
	ctx.fillText(name || '你', position.x, position.y);
	opt.gap = 33;
	ctx.fillText('的後天生命線', position.x, position.y + opt.gap);

	// result name
	opt.gap = 104;
	ctx.font = `bolder 53.5px ${Options.fontFamily}`;
	ctx.strokeStyle = 'black';
	ctx.fillText(profile.name, position.x, position.y + opt.gap);
	ctx.stroke();

	// result profile
	opt.gap = 194;
	opt.scale = 0.67;
	Array.from(new Array(profile.star).keys()).forEach((e, i) => {
		ctx.drawImage(
			star,
			125 + position.x + i * 50 * opt.scale,
			position.y + opt.gap,
			star.width * opt.scale,
			star.height * opt.scale,
		);
	});
	opt.gap = 253;
	ctx.font = `bolder 24px ${Options.fontFamily}`;
	const [s, t] = profile.tenths.split('/');
	ctx.fillText(`每${t}人，不到${s}人`, 18 + position.x, position.y + opt.gap);

	opt.gap = 303;
	ctx.font = `20px ${Options.fontFamily}`;
	ctx.textAlign = 'center';
	profile.feature.forEach((e, i) => {
		ctx.fillText(e, 60 + position.x + i * 110, position.y + opt.gap);
	});

	// profile image
	opt.gap = -8;
	opt.size = 318;
	ctx.drawImage(
		profileImage,
		343 + position.x,
		position.y + (classname === 'p5' ? opt.gap + 10 : opt.gap),
		opt.size,
		opt.size,
	);

	// decription header
	opt.gap = 440;
	ctx.textAlign = 'left';
	ctx.font = `37px ${Options.fontFamily}`;
	ctx.fillText(description.title, 24 + position.x, position.y + opt.gap);

	// descriptiom personal
	opt.gap = 585;
	ctx.font = '24px 微軟正黑體';
	splitText(description.personality, Options.maxBlock).forEach((e, i) => {
		ctx.fillText(e, 25 + position.x, position.y + opt.gap + i * Options.lineHeight);
	});

	// descriptiom career
	opt.gap = 795;
	ctx.font = '24px 微軟正黑體';
	splitText(description.career, Options.maxBlock).forEach((e, i) => {
		ctx.fillText(e, 25 + position.x, position.y + opt.gap + i * Options.lineHeight);
	});

	// desciption love
	opt.gap = 959;
	opt.size = 200;
	const rowSize = 284;
	const roeLeft = 73;

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
	opt.gap = 1180;
	ctx.textAlign = 'center';
	ctx.font = 'bold 24px 微軟正黑體';

	love.forEach((e, index) => {
		const { name: na } = e;
		ctx.fillText(na, 175 + position.x + rowSize * index, position.y + opt.gap);
	});

	setDrawed(true);
};
