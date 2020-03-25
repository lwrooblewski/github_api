import {getDataForUsersList} from "@root/pages/users/users.actions";
import {clearSearchResults, requestUserSearchFetch} from "@root/store/actions";

export function getUsersRowsReadyToRender({ fetchedUsers, routes }) {
    return getDataForUsersList({ fetchedUsers, routes });
}

export function onInputChange(username, dispatch) {
    dispatch(requestUserSearchFetch({ username }));
}

export function clearSearchResultsFromStore(dispatch){
    dispatch(clearSearchResults());
}
