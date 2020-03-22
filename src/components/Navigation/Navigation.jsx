import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { NavigationContainer } from './Navigation.components';
import { routesType } from '../../types';
import { getArrayOfNavigationLinks, getRootUrl } from './Navigation.actions';

function Navigation({ routes }) {
	return (
		<NavigationContainer>
			<Nav fill variant="tabs" defaultActiveKey={getRootUrl(routes)}>
				{getArrayOfNavigationLinks(routes).map(({ url, name }) => (
					<NavItem key={`${url}_${name}`}>
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
