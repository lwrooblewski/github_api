import { requestUsersFetch } from '@root/store/actions';
import { getDataForUsersList } from '@root/pages/users/users.actions';

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
	return getDataForUsersList({ fetchedUsers, routes });
}
