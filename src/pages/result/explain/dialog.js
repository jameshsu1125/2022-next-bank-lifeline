import { memo } from 'react';
import './dialog.less';
import Magnifier from './magnifier';

const ExplainDialog = memo(({ lineName, explan, solve, classname, color }) => (
	<div className='ExplainDialog'>
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
));
export default ExplainDialog;
