import {getDataForUsersList} from "@root/pages/users/users.actions";

export function getUsersRowsReadyToRender({ fetchedUsers, routes }) {
    getDataForUsersList({ fetchedUsers, routes });
}
