import { fromJS, List, Map } from 'immutable';
import { REQUEST_USERS_FETCH_SUCCEEDED } from '@root/store/actions';

export const subStores = {
	users: 'users',
};

const defaultState = Map({
	[subStores.users]: List(),
});

const reducers = (state = defaultState, action) => {
	switch (action.type) {
		case REQUEST_USERS_FETCH_SUCCEEDED: {
			const currentUsersState = state.get(subStores.users);
			const withNewUsers = currentUsersState.merge(fromJS(action.payload.users));
			return state.set(subStores.users, withNewUsers);
		}
		default: {
			return state;
		}
	}
};

export default reducers;
