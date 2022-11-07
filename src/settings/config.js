/* eslint-disable implicit-arrow-linebreak */
import { createContext } from 'react';
import { ACTION, PAGE, RESULT, TRANSITION } from './constant';

export const Context = createContext();
export const LoadingContext = createContext();
export const QuestionContext = createContext();

export const initialState = {
	[ACTION.page]: PAGE.form,
	[ACTION.transition]: TRANSITION.unset,
	[ACTION.result]: RESULT,
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
