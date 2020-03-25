import {getDataForUsersList} from "@root/pages/users/users.actions";
import {requestUserSearchFetch} from "@root/store/actions";

export function getUsersRowsReadyToRender({ fetchedUsers, routes }) {
    getDataForUsersList({ fetchedUsers, routes });
}

export function onInputChange(username, dispatch) {
    dispatch(requestUserSearchFetch({ username }));
}
