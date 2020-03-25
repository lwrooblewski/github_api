import { fromJS, List, Map } from 'immutable';
import {
	CLEAR_SEARCH_RESULTS,
	REQUEST_SINGLE_USER_FETCH_SUCCEEDED, REQUEST_USER_SEARCH_FETCH_SUCCEEDED,
	REQUEST_USERS_FETCH_SUCCEEDED, SET_SEARCHING_REQUEST_STATE
} from '@root/store/actions';

export const subStores = {
	users: 'users',
	singleUsersCache: 'singleUsersCache',
	searching: 'searching',
};

const searchingDefaultState = Map({
	totalCount: 0,
	items: List(),
	requestPending: false,
});

const defaultState = Map({
	[subStores.users]: List(),
	[subStores.singleUsersCache]: Map(),
	[subStores.searching]: Map(searchingDefaultState),
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
		case REQUEST_USER_SEARCH_FETCH_SUCCEEDED: {
			const {totalCount, items} = action.payload;
			return state.setIn([subStores.searching, 'totalCount'], fromJS(totalCount)).setIn([subStores.searching, 'items'], fromJS(items));
		}
		case CLEAR_SEARCH_RESULTS: {
			return state.set(subStores.searching, searchingDefaultState);
		}
		case SET_SEARCHING_REQUEST_STATE: {
			return state.setIn([subStores.searching, 'requestPending'], action.payload.state);
		}
		default: {
			return state;
		}
	}
};

export default reducers;
