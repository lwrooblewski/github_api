import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link, useMatch } from '@reach/router';
import { NavigationContainer } from './Navigation.components';
import { routesType } from '../../types';
import { getArrayOfNavigationLinks, getRootUrl } from './Navigation.actions';

function Navigation({ routes }) {
	const isLinkActive = (url) => useMatch(url);
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
