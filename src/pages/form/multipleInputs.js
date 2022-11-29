import useTween from 'lesca-use-tween';
import { memo, useCallback, useEffect, useRef } from 'react';
import CheckBox from '../../components/checkBox';
import { RegularInput } from '../../components/input';
import RegularButton from '../../components/regularButton';
import { validateEmail } from '../../settings/config';
import { TRANSITION } from '../../settings/constant';

const INPUT_PORPERTY = [
	{ name: 'name', placeholder: '請輸入你的名字', type: 'text', maxLength: 999, modal: '名字' },
	{ name: 'tel', placeholder: '請輸入你的電話', type: 'tel', maxLength: 10, modal: '電話' },
	{
		name: 'email',
		placeholder: '請輸入你的電子信箱',
		type: 'email',
		maxLength: 999,
		modal: '電子信箱',
	},
];

const Animate = memo(({ transition, children, delay = 0, direct = 'y' }) => {
	const [style, setStyle] = useTween({ opacity: 0, [direct]: direct === 'x' ? -100 : 100 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, [direct]: 0 }, { duration: 500, delay });
		}
	}, [transition]);

	return <div style={style}>{children}</div>;
});

const MultipleInputs = memo(({ transition, setPrivate, checkState, fetcher }) => {
	const ref = useRef();
	const [checked] = checkState;

	const onCheck = useCallback(() => {
		setPrivate(true);
	}, []);

	const onClick = useCallback(() => {
		const form = ref.current;
		const formData = new FormData(form);
		const fetchData = {};
		const result = INPUT_PORPERTY.map((e) => {
			const { name, modal } = e;
			fetchData[name] = formData.get(name);
			return { name, data: fetchData[name], modal };
		})
			.filter((e) => {
				const { name, data } = e;
				if (name === 'name') {
					if (data === '') return true;
				} else if (name === 'tel') {
					if (!data || data.length !== 10 || data.slice(0, 2) !== '09') return true;
				} else if (name === 'email') {
					if (validateEmail(data) === null) return true;
				}
				return false;
			})
			.map((e) => e.modal);
		if (!checked) result.push('閱讀隱私條款');
		if (result.length > 0) alert(`請確實填寫以下資料\n${result.join(', ')}。`);
		else {
			const { name: Name, email: Email, tel: Mobile } = fetchData;
			fetcher({ Name, Email, Mobile });
		}
	}, [ref, checked]);

	return (
		<>
			<Animate transition={transition}>
				<h1>
					留下資料抽iPhone14
					<br />
					才不會錯過後天好運
				</h1>
			</Animate>
			<form ref={ref} className='w-[300px] space-y-5'>
				{INPUT_PORPERTY.map((e, i) => (
					<Animate delay={100 * i} key={e.name} transition={transition}>
						<RegularInput
							placeholder={e.placeholder}
							type={e.type}
							name={e.name}
							maxLength={e.maxLength}
						/>
					</Animate>
				))}
				<Animate delay={300} transition={transition}>
					<CheckBox checked={checked} onClick={onCheck}>
						我已閱讀並同意個人資料蒐集處理及利用告知事項和保險行銷使用
					</CheckBox>
				</Animate>
				<Animate delay={400} transition={transition}>
					<hr />
				</Animate>
				<Animate delay={1000} direct='x' transition={transition}>
					<RegularButton center onClick={onClick}>
						送出抽獎
					</RegularButton>
				</Animate>
			</form>
		</>
	);
});
export default MultipleInputs;
