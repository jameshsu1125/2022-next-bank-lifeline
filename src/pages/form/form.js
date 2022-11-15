import ImagePreloader from 'lesca-image-onload';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import ScrollableDialog from '../../components/dialog';
import useRegister from '../../hooks/useRegister';
import { FormContext } from '../../settings/config';
import { FORM_PAGE, TRANSITION } from '../../settings/constant';
import './form.less';
import MultipleInputs from './multipleInputs';
import Private from './private';
import Terms from './terms';

const Form = memo(() => {
	const [context, setContext] = useContext(FormContext);
	const { terms } = context;

	const contanerRef = useRef();
	const [transition, setTransition] = useState(TRANSITION.unset);
	const [priv, setPrivate] = useState(false);
	const checkState = useState(false);
	const [checked, setChecked] = checkState;
	const [queryRespone, fetcher] = useRegister();

	useEffect(() => {
		new ImagePreloader().load(contanerRef.current).then(() => setTransition(TRANSITION.fadeIn));
	}, []);

	useEffect(() => {
		if (queryRespone) setContext((S) => ({ ...S, page: FORM_PAGE.submited }));
	}, [queryRespone]);

	return (
		<>
			<div ref={contanerRef} className='Form'>
				<MultipleInputs
					transition={transition}
					setPrivate={setPrivate}
					checkState={checkState}
					fetcher={fetcher}
				/>
			</div>
			{priv && (
				<ScrollableDialog
					head='隱私條款'
					checked={checked}
					onClose={(readed) => {
						setPrivate(false);
						if (readed) setChecked(true);
					}}
				>
					<Private />
				</ScrollableDialog>
			)}
			{terms && (
				<ScrollableDialog
					head='活動條款'
					checked
					onClose={() => {
						setContext((S) => ({ ...S, terms: false }));
					}}
				>
					<Terms />
				</ScrollableDialog>
			)}
		</>
	);
});
export default Form;
