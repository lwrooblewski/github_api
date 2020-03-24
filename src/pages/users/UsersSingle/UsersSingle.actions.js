import {requestSingleUserFetch} from "@root/store/actions";

export function fetchSingleUserData(dispatch, username) {
    dispatch(requestSingleUserFetch({
        username,
    }));
}

export function getUserDataRowsReadyToRender({ user }) {
     const dataArray = [];
     user.mapEntries(([label, value]) => {
        dataArray.push({
            id: label.toUpperCase(),
            label,
            value,
        });
     });
     return dataArray;
}
