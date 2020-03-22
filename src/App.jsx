import React from 'react';

import { ThemeProvider } from './providers';
import AppContent from './components/AppContent';

const App = () => (
	<ThemeProvider>
		<AppContent />
	</ThemeProvider>
);

export default App;
