import { Home, Users } from './pages';

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

export default routes;
