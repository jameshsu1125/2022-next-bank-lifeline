import ImagePreloader from 'lesca-image-onload';
import useTween from 'lesca-use-tween';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import CheckBox from '../../components/checkBox';
import { RegularInput } from '../../components/input';
import RegularButton from '../../components/regularButton';
import { TRANSITION } from '../../settings/constant';
import './form.less';

const INPUT_PORPERTY = [
	{ name: 'name', placeholder: '請輸入你的名字', type: 'text', maxLength: 999 },
	{ name: 'tel', placeholder: '請輸入你的電話', type: 'tel', maxLength: 10 },
	{ name: 'email', placeholder: '請輸入你的電子信箱', type: 'email', maxLength: 999 },
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

const Form = memo(() => {
	const ref = useRef();
	const contanerRef = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);

	useEffect(() => {
		new ImagePreloader().load(contanerRef.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);

	const onCheck = useCallback(() => {
		console.log('a');
	}, []);

	const onClick = useCallback(() => {
		const form = ref.current;
		const formData = new FormData(form);

		const result = INPUT_PORPERTY.map((e) => {
			const { name } = e;
			return { name, data: formData.get(name) };
		});

		result.forEach((e) => {
			console.log(e);
		});
	}, [ref]);
	return (
		<div ref={contanerRef} className='Form'>
			<Animate transition={transition}>
				<h1>
					留下資料參加抽獎
					<br />
					才不會錯過
					<br />
					你的後天好運!
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
					<CheckBox onClick={onCheck}>我已閱讀隱私條款</CheckBox>
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
		</div>
	);
});
export default Form;
