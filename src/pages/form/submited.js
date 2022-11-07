import { memo, useEffect } from 'react';
import './submited.less';

const Dialog = memo(() => (
	<div className='dialog'>
		<div>
			<div>現在註冊 將將保會員</div>
			<div>
				不用等，直接拿
				<span> 小禮物！</span>
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
		</div>
	);
});
export default Submited;
