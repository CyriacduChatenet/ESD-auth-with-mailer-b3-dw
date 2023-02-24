import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PrivateRouter } from './private';
import { PublicRouter } from './public';

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<PublicRouter />
			<PrivateRouter />
		</BrowserRouter>
	);
};
