import { shape, string, elementType, bool } from 'prop-types';

const route = shape({
	name: string,
	url: string,
	component: elementType,
	displayInNavigation: bool,
}).isRequired;

export default route;
