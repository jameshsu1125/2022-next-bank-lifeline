/* eslint-disable react/jsx-one-expression-per-line */
import { memo, useContext } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './skills.less';

const Skills = memo(() => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { star, tenths, feature } = data.profile;
	const [num, total] = tenths.split('/');

	return (
		<div className='Skills'>
			<div className='row-a'>
				<div>
					獨特程度
					{[...new Array(star).keys()].map((e) => (
						<div key={`star${e}`} className='star' />
					))}
				</div>
				<div>
					每{total}
					人，不到
					{num}人
				</div>
			</div>
			<div className='row-b'>
				{feature.map((e) => (
					<div key={e}>{e}</div>
				))}
			</div>
		</div>
	);
});
export default Skills;
