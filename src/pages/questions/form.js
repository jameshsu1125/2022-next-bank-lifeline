import { memo, useEffect } from 'react';
import CheckBox from '../../components/checkBox';
import Input from '../../components/input';
import RegularButton from '../../components/regularButton';
import './form.less';

const INPUT_PORPERTY = [
	{ name: 'name', placeholder: '請輸入你的名字', type: 'text' },
	{ name: 'tel', placeholder: '請輸入你的電話', type: 'tel' },
	{ name: 'email', placeholder: '請輸入你的電子信箱', type: 'email' },
];

const InputContainer = memo(({ placeholder }) => {
	return (
		<div>
			<Input placeholder={placeholder} type />
		</div>
	);
});

const CheckContainer = memo(() => {
	return (
		<div>
			<CheckBox>我已閱讀隱私條款</CheckBox>
		</div>
	);
});

const Button = memo(() => {
	return (
		<div className='w-[300px]'>
			<RegularButton center>送出抽獎</RegularButton>
		</div>
	);
});

const Form = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Form'>
			<h1>
				留下資料參加抽獎
				<br />
				才不會錯過
				<br />
				你的後天好運!
			</h1>
			<div className='w-[300px] space-y-5'>
				{INPUT_PORPERTY.map((e) => (
					<InputContainer placeholder={e.placeholder} type={e.type} name={e.name} />
				))}
				<CheckContainer />
			</div>
			<hr />
			<Button />
		</div>
	);
});
export default Form;
