import { fromJS, List, Map } from 'immutable';
import {
	REQUEST_SINGLE_USER_FETCH_SUCCEEDED,
	REQUEST_USERS_FETCH_SUCCEEDED
} from '@root/store/actions';

export const subStores = {
	users: 'users',
	singleUsersCache: 'singleUsersCache',
};

const defaultState = Map({
	[subStores.users]: List(),
	[subStores.singleUsersCache]: Map(),
});

const reducers = (state = defaultState, action) => {
	switch (action.type) {
		case REQUEST_USERS_FETCH_SUCCEEDED: {
			const currentUsersState = state.get(subStores.users);
			const withNewUsers = currentUsersState.merge(fromJS(action.payload.users));
			return state.set(subStores.users, withNewUsers);
		}
		case REQUEST_SINGLE_USER_FETCH_SUCCEEDED: {
			let {user} = action.payload;
			user = fromJS(user);
			return state.setIn([subStores.singleUsersCache, user.get('login')], user);
		}
		default: {
			return state;
		}
	}
};

export default reducers;
