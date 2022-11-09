/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useContext } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './index.less';

const ResultExplane = memo(({ random }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { lineName, explan, solve } = data.explanation;
	const { classname } = data.profile;
	return (
		<div className='ResultExplane'>
			<div className='trip'>
				<div className='t' />
			</div>
			<div className='dialog'>
				<div>
					<div className='content'>
						<div className='row'>
							<h1>
								此處的
								{lineName}！
							</h1>
						</div>
						<div className='row'>
							<p>{explan}</p>
						</div>
						<div className='row'>
							<div className='blankName' />
						</div>
						<div className='row'>
							<p>
								為你規劃保險，
								<br />
								{solve}
							</p>
						</div>
					</div>
					<div className='hand'>
						<div className={`p ${classname}`} />
						<div className={`magnifier m${classname}`} />
						<div className={`l l${classname} r${classname}-${random}`} />
					</div>
				</div>
			</div>
		</div>
	);
});
export default ResultExplane;
