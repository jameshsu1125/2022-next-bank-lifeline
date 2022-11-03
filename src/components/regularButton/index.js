import Click from 'lesca-click';
import { memo, useEffect, useId } from 'react';
import './index.less';

const RegularButton = memo(({ children, onClick, arrow = true, flip = false }) => {
	const id = useId();

	console.log(flip);

	useEffect(() => {
		Click.add(`#${id}`, () => {
			onClick?.();
		});
		return () => Click.remove(`#${id}`);
	}, []);

	return (
		<div id={id} className='RegularButton'>
			<div className={flip ? 'flip' : ''}>
				<div className={arrow ? 'arrow' : ''}>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
});
export default RegularButton;
