import Click from 'lesca-click';
import { memo, useEffect, useMemo } from 'react';
import './index.less';

const CheckBox = memo(({ children, onClick, checked = false }) => {
	useEffect(() => {
		Click.add('.visible-button', onClick);
		return () => Click.remove('.visible-button');
	}, []);

	const checkBoxStyle = useMemo(() => {
		if (checked) return 'checkbox on';
		return 'checkbox';
	}, [checked]);

	return (
		<div className='CheckBox'>
			<div className={checkBoxStyle} />
			<span>{children}</span>
			<div className='visible-button' />
		</div>
	);
});
export default CheckBox;
