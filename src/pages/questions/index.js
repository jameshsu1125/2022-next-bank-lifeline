import ImagePreloader from 'lesca-image-onload';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Container from '../../components/container';
import FullCard from '../../components/fullCard';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_PAGE, QUESTIONS_STATE, TRANSITION } from '../../settings/constant';
import BackButton from './backButton';
import './index.less';
import Processing from './processing';
import Question from './question';
import Sign from './sign';

const Logo = memo(() => <div className='logo' />);

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
					<FullCard dialog={page !== QUESTIONS_PAGE.question}>
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
