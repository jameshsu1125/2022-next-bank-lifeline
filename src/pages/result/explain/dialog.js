import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import Magnifier from './magnifier';
import './dialog.less';

const ExplainDialog = memo(({ lineName, explan, solve, classname, color, viewCounter }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 200 });

	useEffect(() => {
		if (viewCounter === 2) {
			setStyle({ opacity: 1, y: 0 }, 800);
		}
	}, [viewCounter]);

	return (
		<div className='ExplainDialog' style={style}>
			<div className='content'>
				<div className='row'>
					<h1>
						此處的
						{lineName}
						{lineName.length >= 4 ? '' : '！'}
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
						聰明選保險，
						<br />
						{solve}
					</p>
				</div>
			</div>
			<div className='hand'>
				<div>
					<div className={`p ${classname}`} />
					<Magnifier classname={classname} color={color} />
				</div>
			</div>
		</div>
	);
});
export default ExplainDialog;
