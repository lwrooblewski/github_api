import { routesWithComponentsToRender, routesMock } from './mocks';
import { createLinkAddress, getRoutesArray } from '../Router.actions';

jest.mock('@root/pages/home/index.js', () => {});
describe('does function getRoutesArray', () => {
	it('return array with urls and component to render inside router', () => {
		const result = getRoutesArray(routesMock);
		expect(result).toStrictEqual(routesWithComponentsToRender);
	});
});

describe('does function createLinkAddress', () => {
	it('create link with no parameters provided', () => {
		const result = createLinkAddress(routesMock.usersList.url);
		expect(result).toBe('/users');
	});
	it('create link with parameters if provided', () => {
		const result = createLinkAddress(routesMock.singleUser.url, {
			id: 'bar',
		});
		expect(result).toBe('/single/bar');
	});
});
