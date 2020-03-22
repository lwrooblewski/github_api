import React from 'react';
import { LocationProvider } from '@reach/router';
import { ThemeProvider } from './providers';
import Router from './router/Router';
import AppContent from './components/AppContent';

const App = () => (
	<ThemeProvider>
		<LocationProvider>
			<AppContent>
				<Router />
			</AppContent>
		</LocationProvider>
	</ThemeProvider>
);

export default App;
