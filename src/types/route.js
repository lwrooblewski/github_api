import { shape, string } from 'prop-types';

const route = shape({
	name: string.isRequired,
	url: string.isRequired,
});

export default route;
