import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './setup/router/router';
import { MainLayout } from './app/layout';

import './index.css';
import { Contexts } from './setup/contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Contexts>
			<MainLayout>
				<Router />
			</MainLayout>
		</Contexts>
	</React.StrictMode>
);
