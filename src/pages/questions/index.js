import ImagePreloader from 'lesca-image-onload';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Container from '../../components/container';
import FullCard from '../../components/fullCard';
import RegularButton from '../../components/regularButton';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_PAGE, QUESTIONS_STATE, TRANSITION } from '../../settings/constant';
import BackButton, { BottomSymbol } from './backButton';
import './index.less';
import Logo from './logo';
import Processing from './processing';
import Question from './question';
import Sign from './sign';

const Questions = memo(() => {
	const ref = useRef();
	const value = useState(QUESTIONS_STATE);
	const { page } = value[0];
	const [, setContext] = value;
	const Page = useMemo(() => {
		const [target] = Object.values(QUESTIONS_PAGE).filter((data) => data === page);
		switch (target) {
			case QUESTIONS_PAGE.question:
				// ? reset user data
				setContext(QUESTIONS_STATE);
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
			setContext((S) => ({ ...S, transition: TRANSITION.fadeIn }));
		});
	}, []);

	return (
		<div ref={ref} className='Questions'>
			<QuestionContext.Provider value={value}>
				<Container>
					<BottomSymbol page={page} />
					<FullCard page={page} invertion={page === QUESTIONS_PAGE.processing}>
						<Logo />
						{Page}
					</FullCard>
					<BackButton page={page} />
					{page === QUESTIONS_PAGE.form && (
						<div className='absolute bottom-3 w-[408px]'>
							<RegularButton yellow center>
								了解活動相關資訊
							</RegularButton>
						</div>
					)}
				</Container>
			</QuestionContext.Provider>
		</div>
	);
});
export default Questions;
