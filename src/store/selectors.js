import { List } from 'immutable';
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

export const fetchedUsers = createSelector(selectUsers, (items) => items);
