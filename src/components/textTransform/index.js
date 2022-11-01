import useTween, { Bezier } from 'lesca-use-tween';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Pad } from 'lesca-number';

const CUSTOM_PEN_LEVEL = 50;
const CHARCODE_RANGE = { min: 48, max: 122 };

const SplitCode = (text, index) => {
	const textLength = text.length;
	const pad = Pad(Math.floor(index), textLength);
	const string = [...pad].map((e, i) => {
		const p = window.parseInt(e) / 10;
		const t = text[i];
		const offsetCode = CUSTOM_PEN_LEVEL * p;
		const code = t.charCodeAt() + offsetCode;
		const { min, max } = CHARCODE_RANGE;
		const randomChar = String.fromCharCode(min + Math.floor(Math.random() * (max - min)));
		return p === 0 ? String.fromCharCode(code) : randomChar;
	});
	return string.join('');
};

const TextTransform = forwardRef(({ children }, ref) => {
	const textRef = useRef(children);
	const indexRef = useRef([...children].reduce((prev) => prev * 10, 1) - 1);

	const [tweenIndex, setTweenIndex] = useTween({ index: 0 });
	const [state, setstate] = useState();
	const floorIndex = Math.floor(tweenIndex.index);

	useEffect(() => {
		setstate(SplitCode(textRef.current, tweenIndex.index));
	}, [floorIndex]);

	useImperativeHandle(ref, () => ({
		play(duration = children.length * 200, onComplete = () => {}) {
			// setTweenIndex({ index: 0 }, { duration, onComplete, easing: Bezier.easeOutQuart });
		},
	}));

	return state;
});

export default TextTransform;
