import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from './providers';
import Router from './router/Router';
import AppContent from './components/AppContent';
import store from './store';
import routes from "@root/router/routes";
import Navigation from "@root/components/Navigation/Navigation";

const App = () => (
	<StoreProvider store={store}>
		<ThemeProvider>
			<Router>
				<Navigation routes={routes} />
			</Router>
		</ThemeProvider>
	</StoreProvider>
);

export default App;
