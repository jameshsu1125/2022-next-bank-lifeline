import { memo, useContext, useEffect } from 'react';
import RegularButton from '../../components/regularButton';
import { QuestionContext } from '../../settings/config';
import { QUESTIONS } from '../../settings/constant';
import './question.less';

const Buttons = memo(({ body = [] }) => (
	<div className='question-buttons'>
		{body.map((e, i) => (
			<RegularButton key={e} flip={i % 2 === 1} arrow={false}>
				{e}
			</RegularButton>
		))}
	</div>
));

const Title = memo(({ title }) => <div className='title'>{title}</div>);

const Question = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index } = context;
	const { title, body } = QUESTIONS[index];

	useEffect(() => {}, []);
	return (
		<div className='Question'>
			<Title title={title} />
			<Buttons body={body} />
		</div>
	);
});
export default Question;
