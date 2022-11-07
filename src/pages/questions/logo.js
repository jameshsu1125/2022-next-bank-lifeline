import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_PAGE } from '../../settings/constant';
import './logo.less';

const DEFAULT_LOGO_STYLE = { top: '0.75rem', left: '0.75rem', scale: 1, opacity: 1 };
const Logo = memo(() => {
	const [context] = useContext(QuestionContext);
	const { page } = context;
	const [style, setStyle] = useTween(DEFAULT_LOGO_STYLE);

	useEffect(() => {
		if (page === QUESTIONS_PAGE.processing) {
			setStyle(
				{ scale: 1.8, opacity: 1, top: '2.55rem', left: '10.35rem' },
				{ duration: 800, easing: Bezier.easeInOutQuart },
			);
		} else if (page === QUESTIONS_PAGE.form || page === QUESTIONS_PAGE.submited) {
			setStyle({ opacity: 0 }, 500);
		} else setStyle(DEFAULT_LOGO_STYLE, 500);
	}, [page]);

	return <div className='question-logo' style={style} />;
});

export default Logo;
