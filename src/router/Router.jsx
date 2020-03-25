import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { childrenType } from '@root/types';
import { getRoutesArray } from './Router.actions';
import routes from './routes';

function Router({ children }) {
	const routesArray = getRoutesArray(routes);
	return (
		<BrowserRouter>
			<Container>
				{children}
				<Switch>
					{routesArray.map(({ component, url, key, exact = false }) => {
						const Component = component;
						return (
							<Route path={url} exact={exact} key={key}>
								<Component routes={routes} />
							</Route>
						);
					})}
				</Switch>
			</Container>
		</BrowserRouter>
	);
}

Router.propTypes = {
	children: childrenType.isRequired,
};

export default Router;
