import { Home, Users } from '../../pages';

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
		component: Users.List,
		displayInNavigation: true,
	},
	searchUser: {
		name: 'Search for user',
		url: '/search',
		component: Users.Search,
		displayInNavigation: true,
	},
	singleUser: {
		name: 'Single user',
		url: '/single/:id',
		component: Users.Single,
		displayInNavigation: false,
	},
};

export const routesWithComponentsToRender = [
	{ component: Home, key: 'root', url: '/' },
	{ component: Users.List, key: 'usersList', url: '/users' },
	{ component: Users.Search, key: 'searchUser', url: '/search' },
	{ component: Users.Single, key: 'singleUser', url: '/single/:id' },
];
