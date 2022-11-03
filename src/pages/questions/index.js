import { memo, useState } from 'react';
import Container from '../../components/container';
import FullCard from '../../components/fullCard';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS_STATE } from '../../settings/constant';
import './index.less';
import Question from './question';

const Logo = memo(() => <div className='logo' />);

const Questions = memo(() => {
	const value = useState(QUESTIONS_STATE);
	return (
		<div className='Questions'>
			<QuestionContext.Provider value={value}>
				<Container>
					<FullCard>
						<Logo />
						<Question />
					</FullCard>
				</Container>
			</QuestionContext.Provider>
		</div>
	);
});
export default Questions;
