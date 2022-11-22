import Click from 'lesca-click';
// import Facebook from 'lesca-facebook-share';
import copy from 'copy-text-to-clipboard';
import QueryString from 'lesca-url-parameters';
import useTween from 'lesca-use-tween';
import UserAgent from 'lesca-user-agent';
import { Children, cloneElement, memo, useContext, useEffect, useState } from 'react';
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
	const [context, setContext] = useContext(Context);
	const image = context[ACTION.image];
	const [device, setDevice] = useState(UserAgent.get() === 'mobile');

	useEffect(() => {
		Click.addPreventExcept('#download');
		const resize = () => {
			setDevice(UserAgent.get() === 'mobile');
		};
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

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
						<RegularButton
							center
							inversion
							ico='link'
							onClick={() => {
								const href = QueryString.root();
								if (copy(href)) alert('連結已複製至剪貼簿');
								else alert('瀏覽器不支援剪貼功能，請於瀏覽器複製連結');
								/* Facebook.share({
									href,
									hashtag: '後天生命線',
									redirect_uri: href,
								}); */
							}}
						>
							分享連結
						</RegularButton>
					</div>
				</div>
			</AnimteProvider>
			<AnimteProvider {...{ viewCounter, delay: 100 }}>
				<div className='row'>
					<RegularButton center inversion ico='download'>
						{device ? (
							'長按下載結果圖'
						) : (
							<a className='pointer-events-auto px-[6rem] py-4' href={image.base64} download>
								點擊下載結果圖
							</a>
						)}
					</RegularButton>
					{device && <img id='doweload' width='408' height='64' src={image.base64} alt='' />}
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
						試試後天運氣 抽iPhone14
					</RegularButton>
				</div>
			</AnimteProvider>
		</div>
	);
});
export default ResultButton;
