import {List, Map} from 'immutable';
import { createSelector } from 'reselect';
import { subStores } from '@root/store/reducers';

export const selectUsers = (state) => {
	return state.get(subStores.users, List());
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

export const selectSingleUserFromCache = (username) => createSelector(selectSingleUsersCache, (items) => {
	return items.get(username);
});


export const selectSearchingUserResults = (state) => {
	return state.get(subStores.searching, Map());
};

export const selectSearchingResultsTotalCount = () => createSelector(selectSearchingUserResults, (items) => {
	return items.get('totalCount');
});

export const selectSearchingResultsItems = () => createSelector(selectSearchingUserResults, (items) => {
	return items.get('items');
});
