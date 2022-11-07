import useTween from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect } from 'react';
import RegularButton from '../../components/regularButton';
import { QuestionContext, questions } from '../../settings/config';
import { QUESTIONS_PAGE, TRANSITION } from '../../settings/constant';
import './question.less';

const DEFAULT_BUTTON_STYLE = { opacity: 0, y: 8 };

const Button = memo(({ data, i, transition }) => {
	const [context, setContext] = useContext(QuestionContext);
	const { index } = context;
	const [style, setStyle] = useTween(DEFAULT_BUTTON_STYLE);

	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle(DEFAULT_BUTTON_STYLE, {
				duration: 20,
				onComplete: () => {
					setStyle({ opacity: 1, y: 0 }, { duration: 300, delay: 100 + 100 * i });
				},
			});
		}
	}, [index, transition]);

	const onClick = useCallback(
		(e) => {
			const { name } = e.dataset;
			const ctx = { ...context };
			if (name) ctx.answers[index] = name;
			if (index < questions.length - 1) ctx.index += 1;
			else ctx.page = QUESTIONS_PAGE.sign;
			setContext(ctx);
		},
		[index, transition],
	);
	return (
		<div style={style}>
			<RegularButton flip={i % 2 === 1} ico={false} onClick={onClick} data={data.id || ''}>
				{data.text}
			</RegularButton>
		</div>
	);
});

const Buttons = memo(({ body = [], transition }) => (
	<div className='question-buttons'>
		{body.map((e, i) => (
			<Button key={e.text} data={e} i={i} transition={transition} />
		))}
	</div>
));

const DEFAULT_TITLE_STYLE = { opacity: 0, y: 8 };

const Title = memo(({ title, transition }) => {
	const [style, setStyle] = useTween(DEFAULT_TITLE_STYLE);
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle(DEFAULT_TITLE_STYLE, {
				duration: 50,
				onComplete: () => setStyle({ opacity: 1, y: 0 }, 300),
			});
		}
	}, [title, transition]);
	return (
		<div className='title' style={style}>
			{title}
		</div>
	);
});

const Question = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index, transition } = context;
	const { title, body } = questions[index];

	return (
		<div className='Question'>
			<Title title={title} transition={transition} />
			<Buttons body={body} transition={transition} />
		</div>
	);
});
export default Question;
