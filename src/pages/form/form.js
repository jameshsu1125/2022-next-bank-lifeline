import ImagePreloader from 'lesca-image-onload';
import useTween from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import CheckBox from '../../components/checkBox';
import ScrollableDialog from '../../components/dialog';
import { RegularInput } from '../../components/input';
import RegularButton from '../../components/regularButton';
import { FormContext, validateEmail } from '../../settings/config';
import { FORM_PAGE, TRANSITION } from '../../settings/constant';
import './form.less';

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

const Form = memo(() => {
	const [, setContext] = useContext(FormContext);
	const ref = useRef();
	const contanerRef = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);
	const [terms, setTerms] = useState(false);
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		new ImagePreloader().load(contanerRef.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);
	const onCheck = useCallback(() => setTerms(true), []);
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

		// TODO => add Modal Component ?
		if (result.length > 0) alert(`請確實填寫以下資料\n${result.join(', ')}。`);
		else {
			setContext((S) => ({ ...S, page: FORM_PAGE.submited }));
		}
	}, [ref, checked]);
	return (
		<>
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
						<CheckBox checked={checked} onClick={onCheck}>
							我已閱讀隱私條款
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
			</div>
			{terms && (
				<ScrollableDialog
					head='隱私條款'
					checked={checked}
					onClose={(readed) => {
						setTerms(false);
						if (readed) {
							setChecked(true);
						}
					}}
				>
					<p>
						非常歡迎您光臨內政部全球資訊網(以下簡稱本網站)，為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
					</p>
					<p>
						一、隱私權保護政策的適用範圍
						<br />
						隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。
						<br />
						隱私權保護政策不適用於本網站以外的相關連結網站
						，也不適用於非本網站所委託或參與管理的人員。
						<br />
						二、資料的蒐集與使用方式
						<br />
						為了在本網站上提供您最佳的互動性服務，可能會請您提供相關個人的資料，其範圍如下：
					</p>
					<p>
						本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、連絡方式及使用時間等。
					</p>
					<p>
						非常歡迎您光臨內政部全球資訊網(以下簡稱本網站)，為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
					</p>
					<p>
						一、隱私權保護政策的適用範圍
						<br />
						隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。
						<br />
						隱私權保護政策不適用於本網站以外的相關連結網站
						，也不適用於非本網站所委託或參與管理的人員。
						<br />
						二、資料的蒐集與使用方式
						<br />
						為了在本網站上提供您最佳的互動性服務，可能會請您提供相關個人的資料，其範圍如下：
					</p>
					<p>
						本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、連絡方式及使用時間等。
					</p>
				</ScrollableDialog>
			)}
		</>
	);
});
export default Form;
