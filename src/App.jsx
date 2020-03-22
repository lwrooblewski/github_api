import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from './providers';
import AppContent from './components/AppContent';

const App = () => (
	<ThemeProvider>
		<AppContent>
			<Router />
		</AppContent>
	</ThemeProvider>
);

export default App;
