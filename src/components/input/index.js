/* eslint-disable arrow-body-style */
import { forwardRef, useImperativeHandle, useCallback, useRef, memo } from 'react';
import './index.less';
import { setMaxLength } from './sort';

let timeout = setTimeout(() => {});

export const RegularInput = memo(({ type, name, placeholder, onChange, maxLength }) => {
	return (
		<input
			type={type}
			name={name}
			className='Input'
			placeholder={placeholder}
			onChange={onChange}
			maxLength={maxLength}
		/>
	);
});

const Input = forwardRef(({ placeholder, name, type, maxLength }, ref) => {
	const inputRef = useRef();

	useImperativeHandle(ref, () => ({
		getValue() {
			return inputRef.current?.value;
		},
	}));

	const onChange = useCallback(
		(e) => {
			const input = e.target;
			const text = input.value;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				const t = setMaxLength(text, maxLength);
				input.value = t;
			}, 1000);
		},
		[maxLength],
	);

	return (
		<input
			ref={inputRef}
			type={type}
			name={name}
			className='Input'
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
});

Input.defaultProps = {
	placeholder: '',
	name: '',
	type: 'text',
	maxLength: 18,
};

export default Input;
