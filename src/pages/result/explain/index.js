/* eslint-disable react/jsx-one-expression-per-line */
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './index.less';
import Magnifier from './magnifier';

const Dialog = memo(({ lineName, explan, solve, classname, random, viewCounter }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 200 });
	useEffect(() => {
		if (viewCounter === 2) {
			setStyle({ opacity: 1, y: 0 }, 800);
		}
	}, [viewCounter]);
	return (
		<div className='dialog' style={style}>
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
					<Magnifier classname={classname} random={random} />
				</div>
			</div>
		</div>
	);
});

const ResultExplain = memo(({ random, viewCounter }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { lineName, explan, solve } = data.explanation;
	const { classname } = data.profile;

	return (
		<div className='ResultExplain'>
			<div className='trip'>
				<div className='t' />
			</div>
			<Dialog {...{ lineName, explan, solve, classname, random, viewCounter }} />
		</div>
	);
});
export default ResultExplain;
