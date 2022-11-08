import { memo, useContext, useEffect } from 'react';
import { Context, getResultById } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import './index.less';

const Headline = memo(({ children, hr = true }) => (
	<>
		<div className='headline -ml-5 mt-5 pl-10'>{children}</div>
		{hr && <hr />}
	</>
));

const ResultDescription = memo(() => {
	const [context] = useContext(Context);
	const { result } = context[ACTION.result];
	const data = getResultById[result];
	const { title, personality, career, love } = data.description;

	console.log(love);

	useEffect(() => {}, []);
	return (
		<div className='ResultDescription'>
			<div className='dialog'>
				<div>
					<div className='row'>
						<h1>
							你的將來，
							<br />
							{title}
						</h1>
					</div>
					<div className='row'>
						<Headline>你的個性線</Headline>
						<p className='px-5'>{personality}</p>
					</div>
					<div className='row'>
						<Headline>你的事業線</Headline>
						<p className='px-5'>{career}</p>
					</div>
					<div className='row'>
						<div className='inner-dialog'>
							<div>
								<div className='content'>
									<Headline hr={false}>適合發展感情線的是</Headline>
									<div className='hand-container'>
										{love.map((e) => (
											<div key={e.name}>
												<div className={e.classname} />
												<div>{e.name}</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
export default ResultDescription;
