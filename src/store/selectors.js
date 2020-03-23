import { createSelector } from 'reselect';
import { subStores } from '@root/store/reducers';

export const selectUsers = (state) => {
	return state.get(subStores.users);
};

export const lastLoadedUserIdSelector = createSelector(selectUsers, (items) => {
	return items.last()?.get('id', 0) || 0;
});
