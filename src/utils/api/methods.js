import { createLinkAddress } from '@root/router/Router.actions';
import endpoints from './endpoints.json';

export const Users = ({ since }) => `${endpoints.Users}?since=${since}`;

export const User = ({ username }) =>
	createLinkAddress(endpoints.User, {
		username,
	});

export const SearchUser = ({ username }) =>
	createLinkAddress(endpoints.SearchUser, {
		query: username,
	});
