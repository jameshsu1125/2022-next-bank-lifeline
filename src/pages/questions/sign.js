import ImagePreloader from 'lesca-image-onload';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Input from '../../components/input';
import { setMaxLength } from '../../components/input/sort';
import RegularButton from '../../components/regularButton';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_PAGE, TRANSITION } from '../../settings/constant';
import './sign.less';

const Dialog = memo(({ transition, setTransition }) => {
	const [, setContext] = useContext(QuestionContext);
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 200 });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, y: 0 }, { duration: 800, easing: Bezier.easeOutBack });
		} else if (transition === TRANSITION.fadeOut) {
			setStyle(
				{ opacity: 0, y: 200 },
				{
					duration: 500,
					easing: Bezier.easeInBack,
					onComplete: () => {
						setContext((S) => ({ ...S, page: QUESTIONS_PAGE.processing }));
					},
				},
			);
		}
	}, [transition]);

	const onClick = useCallback(() => {
		const value = ref.current.getValue?.();
		const name = setMaxLength(value);
		setContext((S) => ({ ...S, name }));
		setTransition(TRANSITION.fadeOut);
	}, [ref]);

	return (
		<div className='dialog' style={style}>
			<div className='text' />
			<div className='container'>
				<div className='dialog-content'>
					<h1>測試完成!請輸入你的名字</h1>
					<Input ref={ref} placeholder='名稱最長限定9字以內' type='text' maxLength={18} />
					<div className='pt-5'>
						<RegularButton center onClick={onClick}>
							前往結果
						</RegularButton>
					</div>
				</div>
			</div>
		</div>
	);
});

const Sign = memo(() => {
	const ref = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);

	return (
		<div ref={ref} className='Sign'>
			<Dialog transition={transition} setTransition={setTransition} />
		</div>
	);
});
export default Sign;
