import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useId, useState } from 'react';
import { Background } from '.';
import { TRANSITION } from '../../settings/constant';
import RegularButton from '../regularButton';
import './index.less';

const Content = memo(({ transition, children, id, onClick, onClose, onFadein, buttonLabel }) => {
	const [style, setStyle] = useTween({ y: window.innerHeight });

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ y: 0 }, { duration: 500, onComplete: () => onFadein() });
		} else if (transition === TRANSITION.fadeOut) {
			setStyle({ y: window.innerHeight }, { duration: 500, onComplete: () => onClose() });
		}
	}, [transition]);
	return (
		<div className='content' style={style}>
			<div className='h-full w-full bg-yellow p-2'>
				<div className='relative flex h-full w-full flex-col items-center justify-start bg-white'>
					<div className='flex h-full w-full justify-center overflow-y-scroll'>{children}</div>
					<div className='w-full py-5 px-8'>
						<RegularButton
							center
							yellow
							flip
							ico='close'
							onClick={() => {
								onClick();
							}}
						>
							{buttonLabel}
						</RegularButton>
					</div>
					<div id={id} className='dialog-close' />
				</div>
			</div>
		</div>
	);
});

const StaticDialog = memo(
	({ children, onClick, onFadein, onClose, buttonLabel = '立即抽iPhone14' }) => {
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
					onClose={onClose}
					onClick={onClick}
					transition={transition}
					id={id}
					onFadein={onFadein}
					buttonLabel={buttonLabel}
				>
					{children}
				</Content>
			</div>
		);
	},
);
export default StaticDialog;
