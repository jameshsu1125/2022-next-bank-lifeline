import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_PAGE } from '../../settings/constant';
import './index.less';

const DEFAULT_CHT_STYLE = { top: '3.3rem', left: '1rem', opacity: 1 };
const Cht = memo(({ property }) => {
	const [style, setStyle] = useState(DEFAULT_CHT_STYLE);
	useEffect(() => {
		if (property === 1) {
			setStyle({ top: 'inherit', left: 'inherit', bottom: '3rem', right: '0.7rem', opacity: 1 });
		} else if (property === 2) {
			setStyle({ opacity: 0 });
		} else setStyle(DEFAULT_CHT_STYLE);
	}, [property]);
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

const Compass = memo(({ property }) => {
	const [style, setStyle] = useTween({ y: 0, opacity: 1 });
	useEffect(() => {
		console.log(property);
		if (property === 0) setStyle({ y: 0, opacity: 1 }, 500);
		else if (property === 1) setStyle({ y: -100, opacity: 1 }, 500);
		else if (property === 2) setStyle({ opacity: 0 }, 500);
		else setStyle({ y: 0, opacity: 1 }, 500);
	}, [property]);
	return <div className='compass' style={style} />;
});

const Vtext = memo(({ hide }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (hide) setStyle({ opacity: -100 }, 500);
		else setStyle({ opacity: 1 }, 500);
	}, [hide]);
	return <div className='vertical-text' style={style} />;
});

const RTL = memo(({ property }) => {
	const [style, setStyle] = useTween({ backgroundColor: '#989898', opacity: 0 });
	useEffect(() => {
		if (property === 1) setStyle({ backgroundColor: '#ffffff', opacity: 1 }, 500);
		else if (property === 0) setStyle({ backgroundColor: '#989898', opacity: 0.3 }, 500);
		else setStyle({ backgroundColor: '#989898', opacity: 1 }, 500);
	}, [property]);
	return <div className='rt-l' style={style} />;
});

const LBL = memo(({ property }) => {
	const [style, setStyle] = useTween({ backgroundColor: '#989898', opacity: 0 });
	useEffect(() => {
		if (property === 1) setStyle({ backgroundColor: '#ffffff', opacity: 1 }, 500);
		else if (property === 0) setStyle({ backgroundColor: '#989898', opacity: 0.3 }, 500);
		else if (property === 2) setStyle({ backgroundColor: '#ffffff', opacity: 1 }, 500);
		else if (property === 3) setStyle({ backgroundColor: '#ffffff', opacity: 1 }, 500);
		else setStyle({ backgroundColor: '#989898', opacity: 1 }, 500);
	}, [property]);
	return <div className='lb-l' style={style} />;
});

const FullCard = memo(({ children, invertion = false }) => {
	const [context] = useContext(QuestionContext);
	const { page } = context;

	const style = useMemo(() => {
		if (invertion) return 'FullCard FullCard-invertion';
		return 'FullCard';
	}, [invertion]);

	const notQuestion = useMemo(() => page !== QUESTIONS_PAGE.question, [page]);
	const compass = useMemo(() => {
		if (page === QUESTIONS_PAGE.sign) return 1;
		if (page === QUESTIONS_PAGE.form) return 2;
		if (page === QUESTIONS_PAGE.submited) return 2;

		return 0;
	}, [page]);
	const rtl = useMemo(() => {
		if (page === QUESTIONS_PAGE.sign) return 1;
		if (page === QUESTIONS_PAGE.form) return 2;
		if (page === QUESTIONS_PAGE.submited) return 2;
		return 0;
	}, [page]);

	const lbl = useMemo(() => {
		if (page === QUESTIONS_PAGE.processing) return 1;
		if (page === QUESTIONS_PAGE.form) return 2;
		if (page === QUESTIONS_PAGE.submited) return 3;
		return 0;
	}, [page]);

	const cht = useMemo(() => {
		if (page === QUESTIONS_PAGE.sign) return 1;
		if (page === QUESTIONS_PAGE.processing) return 2;
		if (page === QUESTIONS_PAGE.form) return 2;
		if (page === QUESTIONS_PAGE.submited) return 2;
		return 0;
	}, [page]);

	return (
		<>
			<div className={style}>
				<div className='container'>
					<div />
				</div>
			</div>
			<div className='FullCard-content'>
				<div className='content'>
					<RTL property={rtl} />
					<LBL property={lbl} />
					<Vtext hide={rtl} />
					<Compass property={compass} />
					<Cht property={cht} />
					<Eng hide={notQuestion} />
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
