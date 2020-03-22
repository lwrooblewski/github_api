import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { NavigationContainer } from './Navigation.components';
import { routesType } from '../../types';

function Navigation({ routes }) {
	const ROOT_URL = routes.root.url;
	const ROUTES_ENTRIES = Object.entries(routes);
	return (
		<NavigationContainer>
			<Nav fill variant="tabs" defaultActiveKey={ROOT_URL}>
				{ROUTES_ENTRIES.map(([key, { url, name }]) => (
					<NavItem key={key}>
						<NavLink href={url}>{name}</NavLink>
					</NavItem>
				))}
			</Nav>
		</NavigationContainer>
	);
}

Navigation.propTypes = {
	routes: routesType.isRequired,
};

export default Navigation;
