import { shape, string, elementType, bool } from 'prop-types';

const route = shape({
	name: string.isRequired,
	url: string.isRequired,
	component: elementType.isRequired,
	displayInNavigation: bool.isRequired,
}).isRequired;

export default route;
