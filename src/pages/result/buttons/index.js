import Facebook from 'lesca-facebook-share';
import Gtag from 'lesca-gtag';
import QueryString from 'lesca-url-parameters';
import useTween from 'lesca-use-tween';
import { Children, cloneElement, memo, useContext, useEffect } from 'react';
import RegularButton from '../../../components/regularButton';
import { Context } from '../../../settings/config';
import { ACTION, PAGE } from '../../../settings/constant';
import { gtagPages } from '../../../settings/ga';
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
								Gtag.event(gtagPages[PAGE.result], '再玩一次');
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
								Gtag.event(gtagPages[PAGE.result], '分享連結');
								const href = QueryString.root() + QueryString.file();
								Facebook.share({
									href,
									hashtag: '你的後天生命線',
									redirect_uri: href,
								});
							}}
						>
							分享連結
						</RegularButton>
					</div>
				</div>
			</AnimteProvider>
			<AnimteProvider {...{ viewCounter, delay: 100 }}>
				<div className='row'>
					<RegularButton
						center
						inversion
						ico='download'
						onClick={() => {
							Gtag.event(gtagPages[PAGE.result], '長按下載結果圖');
						}}
					>
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
							Gtag.event(gtagPages[PAGE.result], '試試後天運氣 抽iphone14');
						}}
					>
						試試後天運氣 抽iphone14
					</RegularButton>
				</div>
			</AnimteProvider>
		</div>
	);
});
export default ResultButton;
