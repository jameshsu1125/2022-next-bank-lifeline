import Click from 'lesca-click';
import { memo, useEffect, useId, useMemo, useRef } from 'react';
import './index.less';

const RegularButton = memo(({ children, onClick, ico, flip, data, inversion, disabled }) => {
	const id = useId();
	const ref = useRef();

	useEffect(() => {
		Click.add(`#${id}`, () => {
			onClick?.(ref.current);
		});
		return () => Click.remove(`#${id}`);
	}, [onClick]);

	const style = useMemo(() => {
		const classname = [];
		if (inversion) classname.push('inversion');
		if (flip) classname.push('flip');
		return classname.join(' ');
	}, [inversion, flip]);

	return (
		<div
			ref={ref}
			id={id}
			className={`RegularButton${disabled ? ' RegularButtonDisabled' : ''}`}
			data-name={data}
		>
			<div className={style}>
				<div className={ico ? `ico ${ico}` : ''}>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
});

RegularButton.defaultProps = {
	ico: 'arrow',
	flip: false,
	data: '',
	inversion: false,
	disabled: false,
};

export default RegularButton;
