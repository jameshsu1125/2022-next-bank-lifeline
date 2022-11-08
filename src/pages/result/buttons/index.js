import { memo, useContext, useEffect } from 'react';
import RegularButton from '../../../components/regularButton';
import { Context } from '../../../settings/config';
import { ACTION, PAGE } from '../../../settings/constant';
import './index.less';

const ResultButton = memo(() => {
	const [, setContext] = useContext(Context);
	useEffect(() => {}, []);
	return (
		<div className='ResultButton'>
			<div className='trip' />
			<div className='row'>
				<div className='w-[50%]'>
					<RegularButton
						inversion
						ico='back'
						onClick={() => {
							setContext({ type: ACTION.page, state: PAGE.questions });
						}}
					>
						再玩一次
					</RegularButton>
				</div>
				<div className='w-[50%]'>
					<RegularButton inversion ico='back'>
						分享連結
					</RegularButton>
				</div>
			</div>
			<div className='row'>
				<RegularButton center inversion ico={false}>
					長按下載結果圖
				</RegularButton>
			</div>
			<div className='row'>
				<RegularButton
					center
					yellow
					onClick={() => {
						setContext({ type: ACTION.page, state: PAGE.form });
					}}
				>
					參加抽獎 試試後天運氣
				</RegularButton>
			</div>
		</div>
	);
});
export default ResultButton;
