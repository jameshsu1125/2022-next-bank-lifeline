import { memo, useEffect, useMemo, useState } from 'react';
import Container from '../../components/container';
import FullCard from '../../components/fullCard';
import { FormContext } from '../../settings/config';
import { FORM_PAGE, FORM_STATE } from '../../settings/constant';
import { BottomSymbol } from '../questions/backButton';
import Form from './form';
import './index.less';
import Submited from './submited';

const Forms = memo(() => {
	const value = useState(FORM_STATE);
	const { page } = value[0];

	const Page = useMemo(() => {
		const [target] = Object.values(FORM_PAGE).filter((data) => data === page);
		switch (target) {
			case FORM_PAGE.form:
				return <Form />;

			case FORM_PAGE.submited:
				return <Submited />;

			default:
				return false;
		}
	}, [page]);

	useEffect(() => {}, []);
	return (
		<div className='Forms'>
			<Container>
				<FormContext.Provider value={value}>
					<FullCard page={page}>{Page}</FullCard>
					<BottomSymbol page={page} />
				</FormContext.Provider>
			</Container>
		</div>
	);
});
export default Forms;
