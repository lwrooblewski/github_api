import endpoints from './endpoints.json';
import {createLinkAddress} from "@root/router/Router.actions";

export const Users = ({ since }) => `${endpoints.Users}?since=${since}`;
export const User = ({ username }) => createLinkAddress(endpoints.User, {
    username,
});
export const { SearchUser } = endpoints;
