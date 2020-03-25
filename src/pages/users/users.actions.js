import {createLinkAddress} from "@root/router/Router.actions";

export function getDataForUsersList({ fetchedUsers, routes }) {
    return fetchedUsers.map((user) => {
        return {
            id: user.get('id'),
            avatarUrl: user.get('avatar_url'),
            username: user.get('login'),
            singleUserRoute: createLinkAddress(routes.singleUser.url, { id: user.get('login') }),
        };
    });
}
