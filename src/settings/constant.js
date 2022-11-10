export const ACTION = {
	page: '頁面',
	transition: '動態',
	result: '結果資料',
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
	stay: 3000,
};

export const LOGO_DURATION = {
	logo: 1500,
	title: 900,
	description: 700,
	monitor: 500,
	compass: 0,
	hand: 200,
	button: 3000,
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
	result: RESULT_IDS.A0FIJS,
	name: '伊斯巴拉淦巴尼杜兒',
};

export const FORM_PAGE = {
	form: '/form',
	submited: '/submited',
};

export const FORM_STATE = {
	page: FORM_PAGE.form,
};
