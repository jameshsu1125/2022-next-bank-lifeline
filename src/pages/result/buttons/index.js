import useTween from 'lesca-use-tween';
import { Children, cloneElement, memo, useContext, useEffect } from 'react';
import RegularButton from '../../../components/regularButton';
import { Context } from '../../../settings/config';
import { ACTION, PAGE } from '../../../settings/constant';
import './index.less';

const AnimteProvider = memo(({ children, viewCounter, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });
	useEffect(() => {
		if (viewCounter === 3) {
			setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
		}
	}, [viewCounter]);
	return Children.map(children, (child) => cloneElement(child, { style }));
});

const ResultButton = memo(({ viewCounter }) => {
	const [, setContext] = useContext(Context);
	useEffect(() => {}, []);
	return (
		<div className='ResultButton'>
			<AnimteProvider {...{ viewCounter, delay: 0 }}>
				<div className='row'>
					<div className='w-[50%]'>
						<RegularButton
							inversion
							center
							ico='back'
							onClick={() => {
								setContext({ type: ACTION.page, state: PAGE.questions });
							}}
						>
							再玩一次
						</RegularButton>
					</div>
					<div className='w-[50%]'>
						<RegularButton center inversion ico='link'>
							分享連結
						</RegularButton>
					</div>
				</div>
			</AnimteProvider>
			<AnimteProvider {...{ viewCounter, delay: 100 }}>
				<div className='row'>
					<RegularButton center inversion ico='download'>
						長按下載結果圖
					</RegularButton>
				</div>
			</AnimteProvider>
			<AnimteProvider {...{ viewCounter, delay: 200 }}>
				<div className='row'>
					<RegularButton
						center
						yellow
						ico='gift'
						onClick={() => {
							setContext({ type: ACTION.page, state: PAGE.form });
						}}
					>
						參加抽獎 試試後天運氣
					</RegularButton>
				</div>
			</AnimteProvider>
		</div>
	);
});
export default ResultButton;
