import endpoints from './endpoints.json';

export const Users = ({ since }) => `${endpoints.Users}?since=${since}`;
export const { User } = endpoints;
export const { SearchUser } = endpoints;
