import { Home, UsersSearch, UsersSingle, UsersList } from '../../pages';

export const routesMock = {
	root: {
		name: 'Home',
		url: '/',
		component: Home,
		exact: true,
		displayInNavigation: true,
	},
	usersList: {
		name: 'GitHub users',
		url: '/users',
		component: UsersList,
		displayInNavigation: true,
		exact: false,
	},
	searchUser: {
		name: 'Search for user',
		url: '/search',
		component: UsersSearch,
		displayInNavigation: true,
		exact: false,
	},
	singleUser: {
		name: 'Single user',
		exact: false,
		url: '/single/:id',
		component: UsersSingle,
		displayInNavigation: false,
	},
};
export const routesWithComponentsToRender = [
	{ component: Home, key: 'root', url: '/', exact: true },
	{ component: UsersList, key: 'usersList', url: '/users', exact: false },
	{ component: UsersSearch, key: 'searchUser', url: '/search', exact: false },
	{ component: UsersSingle, key: 'singleUser', url: '/single/:id', exact: false },
];

export const linkWithParams = '/some/link/:someParam';
