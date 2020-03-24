import React from 'react';
import { Router as ReachRouter, createHistory } from '@reach/router';
import routes from './routes';
import { getRoutesArray } from './Router.actions';

function Router() {
	const routesArray = getRoutesArray(routes);
	return (
		<ReachRouter>
			{routesArray.map(({ component, url, key }) => {
				const Component = component;
				return <Component path={url} key={key} routes={routes} />;
			})}
		</ReachRouter>
	);
}

export default Router;
