import { requestUsersFetch } from '@root/store/actions';
import { createLinkAddress } from '@root/router/Router.actions';

export function fetchInitialUsers(dispatch) {
	dispatch(requestUsersFetch());
}

export function fetchNewUsersPage(dispatch) {
	fetchInitialUsers(dispatch);
}

export function onUserListRender(dispatch, usersAmount) {
	if (usersAmount === 0 || !usersAmount) {
		fetchNewUsersPage(dispatch);
	}
}

export function getUsersRowsReadyToRender({ fetchedUsers, routes }) {
	return fetchedUsers.map((user) => {
		return {
			id: user.get('id'),
			avatarUrl: user.get('avatar_url'),
			login: user.get('login'),
			singleUserRoute: createLinkAddress(routes.singleUser.url, { id: user.get('login') }),
		};
	});
}
