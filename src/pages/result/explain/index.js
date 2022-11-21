/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useContext } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import ExplainDialog from './dialog';
import './index.less';

const ResultExplain = memo(({ viewCounter }) => {
	const [context] = useContext(Context);
	const { result, color } = context[ACTION.result];
	const data = getResultById[result];
	const { lineName, explan, solve } = data.explanation;
	const { classname } = data.profile;

	return (
		<div className='ResultExplain'>
			<div className='trip'>
				<div className='t' />
			</div>
			<ExplainDialog {...{ lineName, explan, solve, classname, color, viewCounter }} />
		</div>
	);
});
export default ResultExplain;
