import Click from 'lesca-click';
import { memo, useEffect, useId } from 'react';
import './index.less';

const RegularButton = memo(({ children, onClick }) => {
	const id = useId();

	useEffect(() => {
		Click.add(`#${id}`, () => {
			onClick?.();
		});
		return () => Click.remove(`#${id}`);
	}, []);

	return (
		<div id={id} className='RegularButton'>
			<div>
				<div>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
});
export default RegularButton;
