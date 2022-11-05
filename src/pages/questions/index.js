import ImagePreloader from 'lesca-image-onload';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import Container from '../../components/container';
import FullCard from '../../components/fullCard';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_PAGE, QUESTIONS_STATE, TRANSITION } from '../../settings/constant';
import BackButton from './backButton';
import Form from './form';
import './index.less';
import Processing from './processing';
import Question from './question';
import Sign from './sign';

const DEFAULT_LOGO_STYLE = { top: '0.75rem', left: '0.75rem', scale: 1, opacity: 1 };
const Logo = memo(() => {
	const [context] = useContext(QuestionContext);
	const { page } = context;

	const [style, setStyle] = useTween(DEFAULT_LOGO_STYLE);

	useEffect(() => {
		if (page === QUESTIONS_PAGE.processing) {
			setStyle({ scale: 1.9, opacity: 1, top: '3.05rem', left: '10.35rem' }, 500);
		} else if (page === QUESTIONS_PAGE.form) setStyle({ opacity: 0 }, 500);
		else setStyle(DEFAULT_LOGO_STYLE, 500);
	}, [page]);

	return <div className='logo' style={style} />;
});

const Questions = memo(() => {
	const ref = useRef();
	const value = useState(QUESTIONS_STATE);
	const { page } = value[0];
	const Page = useMemo(() => {
		const [target] = Object.values(QUESTIONS_PAGE).filter((data) => data === page);
		console.log(target);
		switch (target) {
			case QUESTIONS_PAGE.question:
				return <Question />;

			case QUESTIONS_PAGE.sign:
				return <Sign />;

			case QUESTIONS_PAGE.processing:
				return <Processing />;

			case QUESTIONS_PAGE.form:
				return <Form />;

			default:
				return false;
		}
	}, [page]);

	useEffect(() => {
		new ImagePreloader().load(ref.current).then(() => {
			const [, setContext] = value;
			setContext((S) => ({ ...S, transition: TRANSITION.fadeIn }));
		});
	}, []);

	return (
		<div ref={ref} className='Questions'>
			<QuestionContext.Provider value={value}>
				<Container>
					<FullCard invertion={page === QUESTIONS_PAGE.processing}>
						<Logo />
						{Page}
					</FullCard>
					<BackButton />
				</Container>
			</QuestionContext.Provider>
		</div>
	);
});
export default Questions;
