import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppWrapper } from './base';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppWrapper>
			<App />
		</AppWrapper>
	</React.StrictMode>
);
