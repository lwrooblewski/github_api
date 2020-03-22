export function getArrayOfNavigationLinks(routes) {
	const routesEntries = Object.entries(routes);
	const shouldBeDisplayedRoutes = routesEntries.filter(([, { displayInNavigation }]) => displayInNavigation);
	return shouldBeDisplayedRoutes.map(([, { url, name }]) => ({
		url,
		name,
	}));
}

export function getRootUrl(routes) {
	if (!routes.root) throw new Error('No route with `root` key in routes.js');
	return routes.root.url;
}
