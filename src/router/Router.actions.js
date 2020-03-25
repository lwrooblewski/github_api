export function getRoutesArray(routes) {
	const routesEntries = Object.entries(routes);
	return routesEntries.map(([key, { url, component, exact }]) => ({
		component,
		url,
		key,
		exact,
	}));
}

export function createLinkAddress(url, parameters = {}) {
	let address = url;
	const params = Object.entries(parameters);
	params.forEach(([key, value]) => {
		address = address.replace(`:${key}`, value);
	});
	return address;
}
