import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';
import './index.less';

const DEFAULT_CHT_STYLE = { top: '3.3rem', left: '1rem' };
const Cht = memo(({ hide }) => {
	const [style, setStyle] = useState(DEFAULT_CHT_STYLE);
	useEffect(() => {
		if (hide) setStyle({ top: 'inherit', left: 'inherit', bottom: '3rem', right: '0.7rem' });
		else setStyle(DEFAULT_CHT_STYLE);
	}, [hide]);
	return <div className='cht' style={style} />;
});

const Eng = memo(({ hide }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (hide) setStyle({ opacity: 0 }, 500);
		else setStyle({ opacity: 1 }, 500);
	}, [hide]);
	return <div className='eng' style={style} />;
});

const Compass = memo(({ topic }) => {
	const [style, setStyle] = useTween({ y: 0 });
	useEffect(() => {
		if (topic) setStyle({ y: -100 }, 500);
		else setStyle({ y: 0 }, 500);
	}, [topic]);
	return <div className='compass' style={style} />;
});

const FullCard = memo(({ children, dialog = false }) => {
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
					<Compass topic={dialog} />
					<Cht hide={dialog} />
					<Eng hide={dialog} />
					<div className='sub-eng' />
					<div className='xui'>
						<div />
					</div>
					<div className='xui revses' style={{ marginLeft: '4rem' }}>
						<div />
					</div>
					<div className='context'>{children}</div>
				</div>
			</div>
		</>
	);
});
export default FullCard;
