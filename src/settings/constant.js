/* eslint-disable implicit-arrow-linebreak */

import { base64 } from './image';

/* eslint-disable no-plusplus */
export const ACTION = {
	page: '頁面',
	transition: '動態',
	result: '結果資料',
	entrytime: '進入網站時間',
	prcessing: '資料處理中',
	image: '下載圖',
};

export const PAGE = {
	landing: '/landing',
	questions: '/questions',
	result: '/result',
	form: '/form',
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};
export const HAND_DURATIONS = { css: 2000, stay: 0 };
export const LOGO_DURATION = { logo: 300, compass: 0, hand: 200, button: 1000 };
export const QUESTIONS_PAGE = { question: '/question', sign: '/sign', processing: '/processing' };
export const PRCESSING_STATE = { enabled: false, body: '資料處理中' };
export const QUESTIONS_STATE = {
	page: QUESTIONS_PAGE.question,
	transition: TRANSITION.unset,
	index: 0,
	answers: [],
	name: '',
};
export const FORM_PAGE = { form: '/form', submited: '/submited' };
export const FORM_STATE = { page: FORM_PAGE.form, terms: false };

export const RESULT_IDS = {
	A0FIJS: 'FIJS',
	A1TIJS: 'TIJS',
	B0FEJS: 'FEJS',
	B1FEJN: 'FEJN',
	C0FIPS: 'FIPS',
	C1FIPN: 'FIPN',
	D0FEPS: 'FEPS',
	D1TEPS: 'TEPS',
	E0FEPN: 'FEPN',
	E1TEPN: 'TEPN',
	F0TEJS: 'TEJS',
	F1TEJN: 'TEJN',
	G0TIPS: 'TIPS',
	G1TIPN: 'TIPN',
	H0FIJN: 'FIJN',
	H1TIJN: 'TIJN',
};
export const RESULT = {
	result: RESULT_IDS.F0TEJS,
	name: '伊斯巴拉淦巴尼杜兒',
	color: Math.random() > 0.5 ? 1 : 2,
};

const date = new Date();
export const ENTRYTIME = `${date.getFullYear()}/${
	date.getMonth() + 1
}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

export const IMAGE_STATE = { base64 };
export const splitText = (str, size) => {
	const numChunks = Math.ceil(str.length / size);
	const chunks = new Array(numChunks);
	for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
		chunks[i] = str.substr(o, size);
	}
	return chunks;
};

export const ImageLoader = (url) =>
	new Promise((res, rej) => {
		const image = new Image();
		image.onload = (img) => {
			res(img.currentTarget);
		};
		image.onerror = () => {
			rej(new Error('image loaded error'));
		};
		image.src = url;
	});
