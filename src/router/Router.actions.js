/* eslint import/prefer-default-export: 0 */
export function getRoutesArray(routes) {
	const routesEntries = Object.entries(routes);
	return routesEntries.map(([key, { url, component }]) => ({
		component,
		url,
		key,
	}));
}
