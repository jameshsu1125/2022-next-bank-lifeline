/* eslint-disable arrow-body-style */
export const setMaxLength = (text, maxLength = 18) => {
	const split = text.split('');
	const map = split.map((s, i) => {
		return text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 128 ? 1 : 2;
	});
	let n = 0;
	const charLength =
		map.length > 0 &&
		map.reduce((accumulator, currentValue, index) => {
			if (accumulator === maxLength || accumulator === maxLength - 1) {
				n = index;
			}
			return accumulator + currentValue;
		});

	if (charLength > maxLength) return split.slice(0, n).join('');
	return text;
};
