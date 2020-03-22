import { Home, UsersSearch, UsersSingle, UsersList } from '../../pages';

export const routesMock = {
	root: {
		name: 'Home',
		url: '/',
		component: Home,
		displayInNavigation: true,
	},
	usersList: {
		name: 'GitHub users',
		url: '/users',
		component: UsersList,
		displayInNavigation: true,
	},
	searchUser: {
		name: 'Search for user',
		url: '/search',
		component: UsersSearch,
		displayInNavigation: true,
	},
	singleUser: {
		name: 'Single user',
		url: '/single/:id',
		component: UsersSingle,
		displayInNavigation: false,
	},
};
export const routesWithComponentsToRender = [
	{ component: Home, key: 'root', url: '/' },
	{ component: UsersList, key: 'usersList', url: '/users' },
	{ component: UsersSearch, key: 'searchUser', url: '/search' },
	{ component: UsersSingle, key: 'singleUser', url: '/single/:id' },
];

export const linkWithParams = '/some/link/:someParam';
