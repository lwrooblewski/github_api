const REQUEST_USERS_FETCH = 'REQUEST-USERS-FETCH';
export function requestUsersFetch({ page, perPage }) {
	return {
		type: REQUEST_USERS_FETCH,
		payload: {
			page,
			perPage,
		},
	};
}

const REQUEST_USERS_FETCH_SUCCEEDED = 'REQUEST-USERS-FETCH-SUCCEEDED';
export function requestUsersFetchSucceeded({ users }) {
	return {
		type: REQUEST_USERS_FETCH_SUCCEEDED,
		payload: {
			users,
		},
	};
}
