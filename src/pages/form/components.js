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
			將將～你已符合抽獎資格
			<br />
			我們將於2023年2月28日
			<br />
			於將來銀行網路投保專區公布抽獎名單！
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
				<div>註冊會員&預約車險到期提醒</div>
				<div>
					<div className='backline'>
						<div>限量好禮</div>
					</div>
					等你拿！
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
				加入將來人拿好禮
			</RegularButton>
		</div>
	);
});
