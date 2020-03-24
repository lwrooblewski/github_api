import { Home, UsersSearch, UsersSingle, UsersList } from '../pages';

const routes = {
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
		url: '/single/:username',
		component: UsersSingle,
		displayInNavigation: false,
	},
};

export default routes;
