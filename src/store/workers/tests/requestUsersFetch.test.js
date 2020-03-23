import { REQUEST_USERS_FETCH_SUCCEEDED, requestUsersFetch, requestUsersFetchSucceeded } from '../../actions';
import recordSaga from '../../../utils/tests/recordSaga';
import fetchUsers from '../requestUsersFetch';
import { usersResponseMock } from './mocks';

jest.mock('../../../utils/api/useApi', () =>
	jest.fn(() => ({
		data: [
			{
				login: 'mojombo',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
			},
			{
				login: 'defunkt',
				avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
			},
		],
	})),
);

describe('should fetch from github api users collection', () => {
	it('when REQUEST_USERS_FETCH action is dispatched', async () => {
		const dispatched = await recordSaga(fetchUsers, requestUsersFetch({ since: 0 }));
		const requestFetchUsersAction = dispatched.find(({ type }) => type === REQUEST_USERS_FETCH_SUCCEEDED);
		expect(requestFetchUsersAction).toEqual(
			requestUsersFetchSucceeded({
				users: usersResponseMock,
			}),
		);
	});
});
