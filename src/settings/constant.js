export const ACTION = {
	page: '頁面',
	transition: '動態',
	result: '結果資料',
	entrytime: '進入網站時間',
	prcessing: '資料處理中',
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

export const HAND_DURATIONS = {
	css: 2000,
	stay: 0,
};

export const LOGO_DURATION = {
	logo: 300,
	compass: 0,
	hand: 200,
	button: 1000,
};

export const LANDING_STATE = {
	transition: TRANSITION.unset,
};

export const QUESTIONS_PAGE = {
	question: '/question',
	sign: '/sign',
	processing: '/processing',
};

export const QUESTIONS_STATE = {
	page: QUESTIONS_PAGE.question,
	transition: TRANSITION.unset,
	index: 0,
	answers: [],
	name: '',
};

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
	result: RESULT_IDS.C1FIPN,
	name: '伊斯巴拉淦巴尼杜兒',
};

export const FORM_PAGE = {
	form: '/form',
	submited: '/submited',
};

export const FORM_STATE = {
	page: FORM_PAGE.form,
	terms: false,
};

const date = new Date();
export const ENTRYTIME = `${date.getFullYear()}/${
	date.getMonth() + 1
}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

export const PRCESSING = {
	enabled: false,
	body: '資料處理中',
};
