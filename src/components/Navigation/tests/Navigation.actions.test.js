import { getArrayOfNavigationLinks, getRootUrl } from '../Navigation.actions';
import { routesMock, navigationDisplayedLinksMock, rootUrl, routesMockWithoutRoot } from './mocks';

describe('does function getArrayOfNavigationLinks', () => {
	it('filtered out routes without displayInNavigation property', () => {
		const result = getArrayOfNavigationLinks(routesMock);
		expect(result).toStrictEqual(navigationDisplayedLinksMock);
	});
});

describe('does function getRootUrl', () => {
	it('get root url', () => {
		const result = getRootUrl(routesMock);
		expect(result).toBe(rootUrl);
	});
	it('throws an error if root object does not exist', () => {
		const result = () => getRootUrl(routesMockWithoutRoot);
		expect(result).toThrow(Error);
	});
});
