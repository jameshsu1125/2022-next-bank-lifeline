/* eslint-disable implicit-arrow-linebreak */
import { createContext } from 'react';
import {
	ACTION,
	ENTRYTIME,
	IMAGE_STATE,
	PAGE,
	PRCESSING_STATE,
	RESULT,
	RESULT_IDS,
	TRANSITION,
} from './constant';

export const Context = createContext();
export const LoadingContext = createContext();
export const QuestionContext = createContext();
export const FormContext = createContext();

export const initialState = {
	[ACTION.page]: PAGE.landing,
	[ACTION.transition]: TRANSITION.unset,
	[ACTION.result]: RESULT,
	[ACTION.entrytime]: ENTRYTIME,
	[ACTION.prcessing]: PRCESSING_STATE,
	[ACTION.image]: IMAGE_STATE,
};

export const reducer = (state, action) => {
	if (action.state instanceof Object) {
		let stateStorage = {};
		Object.entries(action.state)
			.map((actionState) => {
				const value = Object.values(ACTION).filter((actionValue) => actionValue === actionState[0]);
				if (value.length > 0) return actionState;
				if (action.type) return [action.type, Object.fromEntries([actionState])];
				return undefined;
			})
			.filter((actionState) => actionState !== undefined)
			.forEach((actionState) => {
				const [key, value] = actionState;
				const prevValue = stateStorage[key];
				if (prevValue) stateStorage = { [key]: { ...prevValue, ...value } };
				else stateStorage = { [key]: value };
			});
		return { ...state, ...stateStorage };
	}
	if (action.type) return { ...state, [action.type]: action.state };
	return state;
};

export const validateEmail = (email) =>
	String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);

export const questions = [
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
export const processingDuration = 3000;
export const submitedURL = 'https://ins.nextbank.com.tw/Member/RegCon/';

export const resultName = {
	結構線: '結構線',
	X光線: 'X光線',
	銷魂麵線: '銷魂麵線',
	愛的連線: '愛的連線',
	飛行線: '飛行線',
	貓皇路線: '貓皇路線',
	智慧線: '0和1的智慧線',
	霍金的輪廓線: '霍金的輪廓線',
};
const resultInformation = {
	[resultName.結構線]: {
		name: '結構線',
		star: 3,
		tenths: '3/10',
		feature: ['細膩穩重', '有條理', '讓人安心'],
		classname: 'p0',
		index: '1',
	},
	[resultName.X光線]: {
		name: 'X光線',
		star: 4,
		tenths: '2/10',
		feature: ['浪漫', '藝術氣質', '活出自我'],
		classname: 'p1',
		index: '2',
	},
	[resultName.銷魂麵線]: {
		name: '銷魂麵線',
		star: 3,
		tenths: '2/10',
		feature: ['敢衝行動派', '活在當下', '無拘無束'],
		classname: 'p2',
		index: '3',
	},
	[resultName.愛的連線]: {
		name: '愛的連線',
		star: 3,
		tenths: '2/10',
		feature: ['充滿溫暖', '樂於給予', '好人緣'],
		classname: 'p3',
		index: '4',
	},
	[resultName.飛行線]: {
		name: '飛行線',
		star: 4,
		tenths: '2/10',
		feature: ['愛探索', '有渲染力', '點子王'],
		classname: 'p4',
		index: '5',
	},
	[resultName.貓皇路線]: {
		name: '貓皇路線',
		star: 4,
		tenths: '1/10',
		feature: ['自信發光', '征服人心', '領導力'],
		classname: 'p5',
		index: '6',
	},
	[resultName.智慧線]: {
		name: '0和1的智慧線',
		star: 5,
		tenths: '9/100',
		feature: ['喜歡思考', '聰明', '觀點獨特'],
		classname: 'p6',
		index: '7',
	},
	[resultName.霍金的輪廓線]: {
		name: '霍金的輪廓線',
		star: 5,
		tenths: '4/100',
		feature: ['眼光犀利', '具影響力', '令人崇拜'],
		classname: 'p7',
		index: '8',
	},
};

const resultDescription = {
	[resultName.結構線]: {
		title: '是穩固世界的要角',
		personality:
			'能在混亂中撐住穩固結構的，就是你！你不只自律，還為世界建構秩序，是朋友、同事的堅固後盾。穩定可靠，還有善解人意的細膩，給人舒服的安全感。',
		career:
			'細心的你，也非常負責任，總能沉著應對難題。任何細節都逃不過你的鷹眼，工作有條有理，讓人想給你滿滿正評，有你就超放心！',
		love: [resultInformation[resultName.飛行線], resultInformation[resultName.銷魂麵線]],
	},
	[resultName.X光線]: {
		title: '有穿透靈魂的力量',
		personality:
			'X光線的穿透力，就像擁有靈魂穿透力的你。你浪漫、執著、氣質脫俗，相信自己獨特的價值觀。透過創作抒發，自在隨性，活出真我的樣貌。',
		career:
			'你有很強的感受力，對世界有獨到見解；能揮灑自我的領域，都是你展翅飛翔的天空。自由的靈魂、飽滿的能量，引領你實現理想。',
		love: [resultInformation[resultName.貓皇路線], resultInformation[resultName.X光線]],
	},
	[resultName.銷魂麵線]: {
		title: '天天讓人迷戀到銷魂',
		personality:
			'你就像朋友生活中不可缺的那碗麵線，天天一起也讓人銷魂！聚會中，你是炒熱氣氛的開心果，幽默的梗王；不拘小節、即時享樂、自由無拘、熱情外向惹人愛！',
		career:
			'活在當下，冒險也不怕的行動派！腦筋很會急轉彎，在挑戰中展現機智，能化危機為轉機，就是你發熱發光的強項！',
		love: [resultInformation[resultName.結構線], resultInformation[resultName.霍金的輪廓線]],
	},
	[resultName.愛的連線]: {
		title: '讓愛無所不在',
		personality:
			'充滿愛的你，能讓大家手牽手連在一起。你溫柔體貼，樂於給予，總是設身處地為人著想；喜歡幫助人、照顧人，就像帶來溫暖的天使。',
		career:
			'你很會閱讀空氣，人際關係很好。你是團隊溝通協調的關鍵，像磁鐵，能把大家吸在一起。鼓勵人、愛地球，都是讓你感到充實的使命。',
		love: [resultInformation[resultName.智慧線], resultInformation[resultName.愛的連線]],
	},
	[resultName.飛行線]: {
		title: '是自由放飛的精彩旅程',
		personality:
			'你就像探索世界的飛行線，對一切充滿好奇。你喜歡交新朋友、體驗新鮮的事物。享受改變，無拘無束、天馬行空，萬物都是你的靈感來源。',
		career:
			'喜歡做沒人做過的事。你反應快、口才好，有很強的感染力。你的興趣廣泛，做什麼都很可以；點子多、充滿熱情，能為工作創造精彩之旅。',
		love: [resultInformation[resultName.霍金的輪廓線], resultInformation[resultName.結構線]],
	},
	[resultName.貓皇路線]: {
		title: '散發領袖的霸氣',
		personality:
			'喵吼~ 你是讓大家都臣服的天生領袖！有戰略思考的靈巧，又有讓人倚靠的穩重；展現霸氣又讓人信服的魅力。',
		career:
			'快、狠、準的風格，讓人喜歡跟著你工作。不妥協的鋼鐵意志，貓皇樣征服萬人心，你就是受人愛戴的領袖類型。',
		love: [resultInformation[resultName.X光線], resultInformation[resultName.貓皇路線]],
	},
	[resultName.智慧線]: {
		title: '可能顛覆宇宙真理',
		personality:
			'你的大腦就像精密程式碼，擅長思考，解構概念。內向的你，腦中總有精彩的推理。你總是能深入探究，發掘獨特的新觀點。',
		career:
			'你喜歡探索未知，熱愛邏輯辯思或科學；看似一個人的世界，其實你正在遨遊宇宙，分析並發現令人驚豔的新真理！',
		love: [resultInformation[resultName.愛的連線], resultInformation[resultName.智慧線]],
	},
	[resultName.霍金的輪廓線]: {
		title: '可能開創人類的新將來',
		personality:
			'你深思熟慮，是有遠見的策略家；知識淵博，是稀有的智者；在你獨特、深不可測的內在，藏著柔軟又充滿大愛的心，是低調，卻又無法被忽視的存在。',
		career:
			'追求完美的你，會成為同領域中的佼佼者，你的力量，可能感動人心、也可能帶來創新，不管理性或感性的你， 都有撼動的影響力！',
		love: [resultInformation[resultName.飛行線], resultInformation[resultName.銷魂麵線]],
	},
};

export const resultExplanation = {
	[resultName.結構線]: {
		lineName: '密集線',
		explan: '暗示愛護大家的你，也要愛護自己！',
		solve: '降低風險更放鬆',
	},
	[resultName.X光線]: {
		lineName: '交叉線',
		explan: '暗示穿透人心的你，有時難免遇到糾結點！',
		solve: '不擔心不糾結無憂慮',
	},
	[resultName.銷魂麵線]: {
		lineName: '波動線',
		explan: '暗示波動大的行動派人生，有時也要小心謹慎！',
		solve: '愛冒險也要少風險',
	},
	[resultName.愛的連線]: {
		lineName: '愛之線',
		explan: '暗示愛護大家的你，也要愛護自己！',
		solve: '用心守護你',
	},
	[resultName.飛行線]: {
		lineName: '扭曲航線',
		explan: '暗示開啟旅程的你，也要小心安全！',
		solve: '探索之路更放心',
	},
	[resultName.貓皇路線]: {
		lineName: '巔峰線',
		explan: '暗示霸氣如靠山的你，也需要一個懂你的靠山！',
		solve: '讓你放心依靠',
	},
	[resultName.智慧線]: {
		lineName: '程式線',
		explan: '暗示思考精密的人生，也可能會有小bug！',
		solve: '降低bug風險',
	},
	[resultName.霍金的輪廓線]: {
		lineName: '特殊線',
		explan: '暗示創新的你，需要先為創新準備好！',
		solve: '提前計畫少風險',
	},
};

export const getResultById = {
	[RESULT_IDS.A0FIJS]: {
		profile: resultInformation[resultName.結構線],
		description: resultDescription[resultName.結構線],
		explanation: resultExplanation[resultName.結構線],
	},
	[RESULT_IDS.A1TIJS]: {
		profile: resultInformation[resultName.結構線],
		description: resultDescription[resultName.結構線],
		explanation: resultExplanation[resultName.結構線],
	},
	[RESULT_IDS.B0FEJS]: {
		profile: resultInformation[resultName.愛的連線],
		description: resultDescription[resultName.愛的連線],
		explanation: resultExplanation[resultName.愛的連線],
	},
	[RESULT_IDS.B1FEJN]: {
		profile: resultInformation[resultName.愛的連線],
		description: resultDescription[resultName.愛的連線],
		explanation: resultExplanation[resultName.愛的連線],
	},
	[RESULT_IDS.C0FIPS]: {
		profile: resultInformation[resultName.X光線],
		description: resultDescription[resultName.X光線],
		explanation: resultExplanation[resultName.X光線],
	},
	[RESULT_IDS.C1FIPN]: {
		profile: resultInformation[resultName.X光線],
		description: resultDescription[resultName.X光線],
		explanation: resultExplanation[resultName.X光線],
	},
	[RESULT_IDS.D0FEPS]: {
		profile: resultInformation[resultName.銷魂麵線],
		description: resultDescription[resultName.銷魂麵線],
		explanation: resultExplanation[resultName.銷魂麵線],
	},
	[RESULT_IDS.D1TEPS]: {
		profile: resultInformation[resultName.銷魂麵線],
		description: resultDescription[resultName.銷魂麵線],
		explanation: resultExplanation[resultName.銷魂麵線],
	},
	[RESULT_IDS.E0FEPN]: {
		profile: resultInformation[resultName.飛行線],
		description: resultDescription[resultName.飛行線],
		explanation: resultExplanation[resultName.飛行線],
	},
	[RESULT_IDS.E1TEPN]: {
		profile: resultInformation[resultName.飛行線],
		description: resultDescription[resultName.飛行線],
		explanation: resultExplanation[resultName.飛行線],
	},
	[RESULT_IDS.F0TEJS]: {
		profile: resultInformation[resultName.貓皇路線],
		description: resultDescription[resultName.貓皇路線],
		explanation: resultExplanation[resultName.貓皇路線],
	},
	[RESULT_IDS.F1TEJN]: {
		profile: resultInformation[resultName.貓皇路線],
		description: resultDescription[resultName.貓皇路線],
		explanation: resultExplanation[resultName.貓皇路線],
	},
	[RESULT_IDS.G0TIPS]: {
		profile: resultInformation[resultName.智慧線],
		description: resultDescription[resultName.智慧線],
		explanation: resultExplanation[resultName.智慧線],
	},
	[RESULT_IDS.G1TIPN]: {
		profile: resultInformation[resultName.智慧線],
		description: resultDescription[resultName.智慧線],
		explanation: resultExplanation[resultName.智慧線],
	},
	[RESULT_IDS.H0FIJN]: {
		profile: resultInformation[resultName.霍金的輪廓線],
		description: resultDescription[resultName.霍金的輪廓線],
		explanation: resultExplanation[resultName.霍金的輪廓線],
	},
	[RESULT_IDS.H1TIJN]: {
		profile: resultInformation[resultName.霍金的輪廓線],
		description: resultDescription[resultName.霍金的輪廓線],
		explanation: resultExplanation[resultName.霍金的輪廓線],
	},
};
