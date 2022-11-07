import { memo, useContext, useEffect } from 'react';
import Container from '../../components/container';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import './index.less';

const Result = memo(() => {
	const [context] = useContext(Context);
	const result = context[ACTION.result];

	useEffect(() => {
		console.log(result);
	}, [result]);
	return (
		<div className='Result'>
			<Container>asd</Container>
		</div>
	);
});
export default Result;
