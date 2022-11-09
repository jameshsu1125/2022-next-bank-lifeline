import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import RegularButton from '../../components/regularButton';
import { submitedURL } from '../../settings/config';
import { TRANSITION } from '../../settings/constant';

export const Logo = memo(({ transition }) => {
	const [style, setStyle] = useTween({ opacity: 0, x: -50 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) setStyle({ opacity: 1, x: 0 }, 500);
	}, [transition]);
	return <div className='logo' style={style} />;
});

export const Text = memo(({ transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
	}, [transition]);
	return (
		<p style={style}>
			您已完成抽獎程序
			<br />
			我們將於2023年2月2日
			<br />
			於將來FB公布抽獎名單！
		</p>
	);
});

export const Dialog = memo(({ transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 400 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
	}, [transition]);
	return (
		<div className='dialog' style={style}>
			<div>
				<div>現在註冊 將將保會員</div>
				<div>
					不用等，直接拿
					<div className='backline'>
						<div> 小禮物！</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export const Button = memo(({ transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 2 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, scale: 1 }, { duration: 400, delay });
		}
	}, [transition]);
	return (
		<div className='fit-row' style={style}>
			<RegularButton
				ico={false}
				flip
				onClick={() => {
					window.open(submitedURL);
				}}
			>
				立即註冊拿好禮
			</RegularButton>
		</div>
	);
});
