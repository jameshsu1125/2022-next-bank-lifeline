import Gtag from 'lesca-gtag';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import Container from '../../components/container';
import FullCard from '../../components/fullCard';
import RegularButton from '../../components/regularButton';
import { FormContext } from '../../settings/config';
import { FORM_PAGE, FORM_STATE, PAGE } from '../../settings/constant';
import { gtagPages } from '../../settings/ga';
import { BottomSymbol } from '../questions/backButton';
import Form from './form';
import './index.less';
import Submited from './submited';

const MoreInformationButton = memo(({ page }) => {
	const [, setContext] = useContext(FormContext);
	const [style, setStyle] = useTween({ opacity: 0, y: 100 });
	useEffect(() => {
		if (page === FORM_PAGE.form) setStyle({ opacity: 1, y: 0 }, 500);
		else setStyle({ opacity: 0, y: 100 }, 500);
	}, [page]);
	return (
		<div className='formButton' style={style}>
			<RegularButton
				yellow
				center
				onClick={() => {
					setContext((S) => ({ ...S, terms: true }));
					Gtag.event(gtagPages[PAGE.form], '了解活動相關資訊');
				}}
			>
				了解活動相關資訊
			</RegularButton>
		</div>
	);
});

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

	return (
		<div className='Forms'>
			<Container>
				<FormContext.Provider value={value}>
					<FullCard page={page}>{Page}</FullCard>
					<BottomSymbol page={page} />
					<MoreInformationButton page={page} />
				</FormContext.Provider>
			</Container>
		</div>
	);
});
export default Forms;
