import { number, oneOfType, string } from 'prop-types';

const userRowPropTypes = {
	avatarUrl: string,
	login: string,
	singleUserRoute: string,
}.isRequired;

export default userRowPropTypes;
