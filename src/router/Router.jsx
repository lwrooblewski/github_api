import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from "react-router-dom";
import { Container} from "react-bootstrap";
import routes from './routes';
import { getRoutesArray } from './Router.actions';
import {childrenType} from "@root/types";

function Router({ children }) {
	const routesArray = getRoutesArray(routes);
	return (
		<BrowserRouter>
			<Switch>
				<Container>
					{children}
					{routesArray.map(({ component, url, key, exact = false }) => {
						const Component = component;
						return (<Route path={url} exact={exact}><Component key={key} routes={routes}/></Route>);
					})}
				</Container>
			</Switch>
		</BrowserRouter>
	);
}

Router.propTypes ={
	children: childrenType,
}

export default Router;
