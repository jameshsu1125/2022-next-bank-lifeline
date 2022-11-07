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

export const RESULT = { result: 'TIJN', name: '123123' };
export const RESULT_INFOMATION = {
	a: { name: '結構線', star: 3, tenths: '3/10', feature: ['細膩穩重', '有條理', '讓人安心'] },
	b: { name: 'X光線', star: 4, tenths: '2/10', feature: ['浪漫', '藝術氣質', '活出自我'] },
	c: { name: '銷魂麵線', star: 3, tenths: '2/10', feature: ['敢衝行動派', '活在當下', '無拘無束'] },
	d: { name: '愛的連線', star: 3, tenths: '2/10', feature: ['充滿溫暖', '樂於給予', '好人緣'] },
	e: { name: '飛行線', star: 4, tenths: '2/10', feature: ['愛探索', '有渲染力', '點子王'] },
	f: { name: '貓皇路線', star: 4, tenths: '1/10', feature: ['自信發光', '征服人心', '領導力'] },
	g: { name: '0和1的智慧線', star: 5, tenths: '9/100', feature: ['喜歡思考', '聰明', '觀點獨特'] },
	h: {
		name: '霍金的輪廓線',
		star: 5,
		tenths: '4/100',
		feature: ['眼光犀利', '具影響力', '令人崇拜'],
	},
};

export const RESULT_GET_BY_ID = {
	FIJS: { ...RESULT_INFOMATION.a },
	TIJS: { ...RESULT_INFOMATION.a },
	FEJS: { ...RESULT_INFOMATION.d },
	FEJN: { ...RESULT_INFOMATION.d },
	FIPS: { ...RESULT_INFOMATION.b },
	FIPN: { ...RESULT_INFOMATION.b },
	FEPS: { ...RESULT_INFOMATION.c },
	TEPS: { ...RESULT_INFOMATION.c },
	FEPN: { ...RESULT_INFOMATION.e },
	TEPN: { ...RESULT_INFOMATION.e },
	TEJS: { ...RESULT_INFOMATION.f },
	TEJN: { ...RESULT_INFOMATION.f },
	TIPS: { ...RESULT_INFOMATION.g },
	TIPN: { ...RESULT_INFOMATION.g },
	FIJN: { ...RESULT_INFOMATION.h },
	TIJN: { ...RESULT_INFOMATION.h },
};

export const FORM_PAGE = {
	form: '/form',
	submited: '/submited',
};

export const FORM_STATE = {
	page: FORM_PAGE.form,
};
