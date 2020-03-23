export const REQUEST_USERS_FETCH = 'REQUEST-USERS-FETCH';
export function requestUsersFetch() {
	return {
		type: REQUEST_USERS_FETCH,
		payload: {},
	};
}

export const REQUEST_USERS_FETCH_SUCCEEDED = 'REQUEST-USERS-FETCH-SUCCEEDED';
export function requestUsersFetchSucceeded({ users }) {
	return {
		type: REQUEST_USERS_FETCH_SUCCEEDED,
		payload: {
			users,
		},
	};
}

export const REQUEST_USERS_FETCH_FAILED = 'REQUEST-USERS-FETCH-FAILED';
export function requestUsersFetchFailed({ error }) {
	return {
		type: REQUEST_USERS_FETCH_FAILED,
		payload: {
			error,
		},
	};
}
