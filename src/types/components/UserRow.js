import { string } from 'prop-types';
import { routesType } from '../index';

const userRowPropTypes = {
	avatarUrl: string.isRequired,
	login: string.isRequired,
	routes: routesType,
	singleUserRoute: string.isRequired,
};

export default userRowPropTypes;
