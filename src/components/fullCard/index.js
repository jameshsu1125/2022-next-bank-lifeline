import { memo, useEffect } from 'react';
import './index.less';

const FullCard = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<>
			<div className='FullCard'>
				<div className='container'>
					<div />
				</div>
			</div>
			<div className='FullCard-content'>
				<div className='content'>
					<div className='rt-l' />
					<div className='lb-l' />
					<div className='vertical-text' />
					<div className='compass' />
					<div className='cht' />
					<div className='eng' />
					<div className='sub-eng' />
					<div className='xui'>
						<div />
					</div>
					<div className='xui' style={{ marginLeft: '4rem' }}>
						<div />
					</div>
					<div className='context'>{children}</div>
				</div>
			</div>
		</>
	);
});
export default FullCard;
