/* eslint-disable react/jsx-one-expression-per-line */
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION, TRANSITION } from '../../../settings/constant';
import './skills.less';

const Table = memo(({ num, star, feature, total, transition, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 100 });
	useEffect(() => {
		if (transition === TRANSITION.fadeIn) {
			setStyle({ opacity: 1, y: 1 }, { duration: 500, delay });
		}
	}, [transition]);
	return (
		<div className='Skills' style={style}>
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

const Skills = memo(({ transition, delay }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { star, tenths, feature } = data.profile;
	const [num, total] = tenths.split('/');

	return (
		<Table
			num={num}
			star={star}
			feature={feature}
			total={total}
			transition={transition}
			delay={delay}
		/>
	);
});
export default Skills;
