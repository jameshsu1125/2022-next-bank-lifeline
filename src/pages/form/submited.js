import { memo, useEffect } from 'react';
import RegularButton from '../../components/regularButton';
import { submitedURL } from '../../settings/config';
import './submited.less';

const Dialog = memo(() => (
	<div className='dialog'>
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
));

const Submited = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Submited'>
			<div className='row'>
				<div className='logo' />
				<hr />
			</div>
			<div className='row'>
				<p>
					您已完成抽獎程序
					<br />
					我們將於2023年2月2日
					<br />
					於將來FB公布抽獎名單！
				</p>
			</div>
			<div className='row'>
				<Dialog />
			</div>
			<div className='fit-row'>
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
		</div>
	);
});
export default Submited;
