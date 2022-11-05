import Click from 'lesca-click';
import { memo, useEffect, useId, useMemo, useRef } from 'react';
import './index.less';

const RegularButton = memo(
	({ children, onClick, center, ico, flip, data, inversion, disabled, yellow }) => {
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
			if (yellow) classname.push('yellow');
			return classname.join(' ');
		}, [inversion, flip]);

		const iconStyle = useMemo(() => {
			const classname = [];
			if (ico) classname.push(ico);
			if (center) classname.push('center');
			if (classname.length > 0) classname.push('ico');
			return classname.join(' ');
		}, [center, ico]);

		const containerStyle = useMemo(() => {
			const classname = ['RegularButton'];
			if (disabled) classname.push('RegularButtonDisabled');
			if (flip) classname.push('RegularButtonFlip');
			return classname.join(' ');
		}, [disabled, flip]);

		return (
			<div ref={ref} id={id} className={containerStyle} data-name={data}>
				<div className={style}>
					<div className={iconStyle}>
						<div>{children}</div>
					</div>
				</div>
			</div>
		);
	},
);

RegularButton.defaultProps = {
	ico: 'arrow',
	flip: false,
	center: false,
	data: '',
	inversion: false,
	disabled: false,
	yellow: false,
};

export default RegularButton;
