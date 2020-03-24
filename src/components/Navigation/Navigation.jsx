import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { NavigationContainer } from './Navigation.components';
import { routesType } from '../../types';
import { getArrayOfNavigationLinks, getRootUrl } from './Navigation.actions';

function Navigation({ routes }) {
	const isLinkActive = (url) => useRouteMatch(url);
	return (
		<NavigationContainer>
			<Nav fill variant="tabs" defaultActiveKey={getRootUrl(routes)}>
				{getArrayOfNavigationLinks(routes).map(({ url, name }) => (
					<NavItem key={`${url}_${name}`}>
						<Link className={`nav-link ${isLinkActive(url) ? 'active' : ''}`} to={url}>
							{name}
						</Link>
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
