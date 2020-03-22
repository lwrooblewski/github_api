import { routesWithComponentsToRender, routesMock } from './mocks';
import { getRoutesArray } from '../Router.actions';

describe('does function getRoutesArray', () => {
	it('return array with urls and component to render inside router', () => {
		const result = getRoutesArray(routesMock);
		expect(result).toStrictEqual(routesWithComponentsToRender);
	});
});
