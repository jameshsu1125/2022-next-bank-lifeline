import { memo } from 'react';
import './descriptions.less';

const Descriptions = memo(({ children }) => <div className='Descriptions'>{children}</div>);
export default Descriptions;
