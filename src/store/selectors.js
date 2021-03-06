import { List, Map } from 'immutable';
import { createSelector } from 'reselect';
import { subStores } from '@root/store/reducers';

export const selectUsers = (state) => {
	return state.get(subStores.users, List());
};

export const selectUsersLastId = (state) => {
	return (
		state
			.get(subStores.users, List())
			.last()
			?.get('id', 0) || 0
	);
};

export const lastLoadedUserIdSelector = createSelector(selectUsers, (items) => {
	return items.last()?.get('id', 0) || 0;
});

export const usersInStoreAmountSelector = createSelector(selectUsers, (items) => {
	return items.size;
});

export const selectSingleUsersCache = (state) => {
	return state.get(subStores.singleUsersCache, List());
};

export const selectSingleUserFromCache = (username) =>
	createSelector(selectSingleUsersCache, (items) => {
		return items.get(username);
	});

export const selectSearchingUserResults = (state) => {
	return state.get(subStores.searching, Map());
};

export const selectSearchingResultsTotalCount = () =>
	createSelector(selectSearchingUserResults, (results) => {
		return results.get('totalCount', 0);
	});

export const selectSearchingResultsItems = () =>
	createSelector(selectSearchingUserResults, (results) => {
		return results.get('items', Map());
	});

export const selectSearchingRequestState = () =>
	createSelector(selectSearchingUserResults, (results) => {
		return results.get('requestPending', false);
	});
