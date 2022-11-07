import { memo, useContext, useEffect, useState } from 'react';
import Container from '../../components/container';
import { Context } from '../../settings/config';
import { ACTION, RESULT_GET_BY_ID } from '../../settings/constant';
import ResultButton from './buttons';
import './index.less';

const Result = memo(() => {
	const [context] = useContext(Context);
	const { result, name } = context[ACTION.result];
	const [data] = useState(RESULT_GET_BY_ID[result]);

	useEffect(() => {
		console.log(data);
		// console.log(RESULT_GET_BY_ID, result);
	}, [data]);

	return (
		<div className='Result'>
			<Container>
				<div className='container'>
					<div>{JSON.stringify(data) + name}</div>
					<ResultButton />
				</div>
			</Container>
		</div>
	);
});
export default Result;
