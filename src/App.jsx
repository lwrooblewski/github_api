import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { LocationProvider } from '@reach/router';
import { ThemeProvider } from './providers';
import Router from './router/Router';
import AppContent from './components/AppContent';
import store from './store';

const App = () => (
	<StoreProvider store={store}>
		<ThemeProvider>
			<LocationProvider>
				<AppContent>
					<Router />
				</AppContent>
			</LocationProvider>
		</ThemeProvider>
	</StoreProvider>
);

export default App;
