export const ACTION = {
	page: '頁面',
	transition: '動態',
};

export const PAGE = {
	landing: '/landing',
	questions: '/questions',
	result: '/result',
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
	form: '/form',
	submited: '/submite',
};

export const QUESTIONS_STATE = {
	page: QUESTIONS_PAGE.sign,
	transition: TRANSITION.unset,
	index: 0,
	answers: [],
	name: '',
};

export const QUESTIONS = [
	{
		title: '走著走著遇到叉路口，你會…',
		body: [{ text: '跟著貓，往左走' }, { text: '跟著狗，往右走' }],
	},
	{
		title: '和人發生衝突的時候，你會…',
		body: [
			{ text: '就事論事，把道理講清楚', id: 'T' },
			{ text: '退讓一步，追求海闊天空', id: 'F' },
		],
	},
	{
		title: '早晨起床，看見下雨，你會先想到…',
		body: [{ text: '很好～這樣不會缺水！' }, { text: '哎呀～天空又在哭了！' }],
	},
	{
		title: '你比較喜歡…',
		body: [
			{ text: '待在自己的小宇宙', id: 'I' },
			{ text: '有朋友的熱鬧世界', id: 'E' },
		],
	},
	{
		title: '旅行的時候，你習慣…',
		body: [
			{ text: '先安排好，一路按著計畫走', id: 'J' },
			{ text: '大略安排，邊走邊改變計畫', id: 'P' },
		],
	},
	{
		title: '你覺得外星人可能是…',
		body: [{ text: '長得像人類，但能變換外表' }, { text: '隱形沒身體，還能瞬間移動' }],
	},
	{
		title: '面對新的事物，你會…',
		body: [
			{ text: '更相信自己的直覺', id: 'N' },
			{ text: '更相信既有的經驗', id: 'S' },
		],
	},
	{
		title: '如果一個人去看展，你會選擇…',
		body: [{ text: '月球上的驚奇生物展' }, { text: '達文西的一根頭髮展' }],
	},
];
