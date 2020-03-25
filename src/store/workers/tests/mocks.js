import { fromJS, List, Map } from 'immutable';

export const usersResponseMock = [
	{
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	},
	{
		login: 'defunkt',
		avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
	},
];

export const storeMock = Map({
	users: List(fromJS(usersResponseMock)),
});
