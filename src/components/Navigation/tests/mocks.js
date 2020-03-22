import { Home, UsersSearch, UsersSingle, UsersList } from '../../../pages';

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

export const routesMockWithoutRoot = {
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

export const navigationDisplayedLinksMock = [
	{ name: 'Home', url: '/' },
	{ name: 'GitHub users', url: '/users' },
	{ name: 'Search for user', url: '/search' },
];

export const rootUrl = '/';
