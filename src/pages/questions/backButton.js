import useTween from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import RegularButton from '../../components/regularButton';
import { QuestionContext } from '../../settings/config';
import { FORM_PAGE, QUESTIONS_PAGE } from '../../settings/constant';
import './backButton.less';

const DEFAULT_STYLE = { opacity: 0, y: 100 };

export const BottomSymbol = memo(({ page }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 100 });

	useEffect(() => {
		if (page !== QUESTIONS_PAGE.question && page !== FORM_PAGE.form) {
			setStyle({ y: 0, opacity: 1 }, 500);
		} else setStyle({ y: 100, opacity: 0 }, 500);
	}, [page]);

	return <div className='BottomSymbol' style={style} />;
});

const BackButton = memo(() => {
	const [context, setContext] = useContext(QuestionContext);
	const { index, page } = context;
	const [disabled, setDisabled] = useState(index === 0);

	const [style, setStyle] = useTween(DEFAULT_STYLE);

	useEffect(() => {
		if (disabled) setStyle(DEFAULT_STYLE, 500);
		else setStyle({ opacity: 1, y: 0 }, 500);
	}, [disabled]);

	useEffect(() => {
		if (page === QUESTIONS_PAGE.question) setDisabled(index === 0);
		else setDisabled(true);
	}, [index, page]);

	const onClick = useCallback(() => {
		if (!disabled) setContext((S) => ({ ...S, index: index - 1 }));
	}, [disabled, index]);

	return (
		<div className='BackButton' style={style}>
			<RegularButton onClick={onClick} inversion disabled={disabled} ico='back'>
				BACK
			</RegularButton>
		</div>
	);
});
export default BackButton;
