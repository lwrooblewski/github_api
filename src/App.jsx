import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import routes from '@root/router/routes';
import Navigation from '@root/components/Navigation/Navigation';
import GlobalStyles from '@root/components/GlobalStyles';
import { ThemeProvider } from './providers';
import Router from './router/Router';
import store from './store';

const App = () => (
	<StoreProvider store={store}>
		<ThemeProvider>
			<Router>
				<GlobalStyles />
				<Navigation routes={routes} />
			</Router>
		</ThemeProvider>
	</StoreProvider>
);

export default App;
