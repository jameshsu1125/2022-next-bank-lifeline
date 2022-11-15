import useTween from 'lesca-use-tween';
import { Children, cloneElement, memo, useContext, useEffect } from 'react';
import { Context, getResultById, resultName } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './index.less';

const Headline = memo(({ children, hr = true, style }) => (
	<>
		<div className='headline -ml-5 mt-5 pl-10' style={style}>
			{children}
		</div>
		{hr && <hr style={style} />}
	</>
));

const AnimteProvider = memo(({ children, viewCounter, delay }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: 50 });
	useEffect(() => {
		if (viewCounter === 1) {
			setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
		}
	}, [viewCounter]);

	return Children.map(children, (child) => cloneElement(child, { style }));
});

const ResultDescription = memo(({ viewCounter }) => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { title, personality, career, love } = data.description;

	return (
		<div className='ResultDescription'>
			<div className='dialog'>
				<div>
					<div className='row'>
						<AnimteProvider {...{ viewCounter, delay: 0 }}>
							<h1>
								你的將來，
								<br />
								{title}
							</h1>
						</AnimteProvider>
					</div>
					<div className='row'>
						<AnimteProvider {...{ viewCounter, delay: 50 }}>
							<Headline>你的個性線</Headline>
						</AnimteProvider>
						<AnimteProvider {...{ viewCounter, delay: 100 }}>
							<p className='px-5'>{personality}</p>
						</AnimteProvider>
					</div>
					<div className='row'>
						<AnimteProvider {...{ viewCounter, delay: 150 }}>
							<Headline>你的事業線</Headline>
						</AnimteProvider>
						<AnimteProvider {...{ viewCounter, delay: 200 }}>
							<p className='px-5'>{career}</p>
						</AnimteProvider>
					</div>
					<div className='row'>
						<AnimteProvider {...{ viewCounter, delay: 200 }}>
							<div className='inner-dialog'>
								<div>
									<div className='content'>
										<Headline hr={false}>適合發展感情線的是</Headline>
										<div className='hand-container'>
											{love.map((e) => {
												const style =
													e.name === resultName.貓皇路線 ? { backgroundPositionY: '-26px' } : {};
												return (
													<div key={e.name}>
														<div className={e.classname} style={style} />
														<div>{e.name}</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</AnimteProvider>
					</div>
				</div>
			</div>
		</div>
	);
});
export default ResultDescription;
