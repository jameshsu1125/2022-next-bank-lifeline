import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useCallback, useEffect, useId, useRef, useState } from 'react';
import { TRANSITION } from '../../settings/constant';
import RegularButton from '../regularButton';
import './index.less';

const Background = memo(({ transition }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) setStyle({ opacity: 1 }, 500);
		else if (transition === TRANSITION.fadeOut) setStyle({ opacity: 0 }, 500);
	}, [transition]);
	return <div className='bg' style={style} />;
});

const Content = memo(({ transition, children, head, id, onClose, setTransition, checked }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight });
	const [disabled, setDisabled] = useState(!checked);

	useEffect(() => {
		const scroll = (e) => {
			const { target } = e;
			const { scrollTop, scrollHeight, clientHeight } = target;
			if (scrollTop + clientHeight >= scrollHeight) {
				setDisabled(false);
			}
		};
		ref.current.addEventListener('scroll', scroll);
	}, []);

	const onComplete = useCallback(() => {
		onClose(!disabled);
	}, [disabled]);

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) setStyle({ y: 0 }, 500);
		else if (transition === TRANSITION.fadeOut) {
			setStyle({ y: window.innerHeight }, { duration: 500, onComplete });
		}
	}, [transition]);
	return (
		<div className='content' style={style}>
			<div className='h-full w-full bg-yellow p-2'>
				<div className='relative flex h-full w-full flex-col items-center justify-start bg-white p-2 py-5'>
					<h1>{head}</h1>
					<div ref={ref} className='scroll'>
						{children}
					</div>
					<div className='w-full py-5 px-8'>
						<RegularButton
							center
							yellow
							flip
							ico='close'
							disabled={disabled}
							onClick={() => {
								setTransition(TRANSITION.fadeOut);
							}}
						>
							{disabled ? '請向下滑 閱讀全文' : '關閉'}
						</RegularButton>
					</div>
					<div id={id} className='dialog-close' />
				</div>
			</div>
		</div>
	);
});

const ScrollableDialog = memo(({ children, onClose, head, checked }) => {
	const id = useId();
	const [transition, setTransition] = useState(TRANSITION.unset);

	useEffect(() => {
		Click.add(`#${id}`, () => {
			setTransition(TRANSITION.fadeOut);
		});
		Click.addPreventExcept('.scroll');
		setTransition(TRANSITION.fadeIn);
	}, []);
	return (
		<div className='ScrollableDialog'>
			<Background transition={transition} />
			<Content
				id={id}
				head={head}
				transition={transition}
				onClose={onClose}
				setTransition={setTransition}
				checked={checked}
			>
				{children}
			</Content>
		</div>
	);
});
export default ScrollableDialog;
