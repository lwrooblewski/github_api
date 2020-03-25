/**
 * Multiple users
 */

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

/**
 * Single user
 */

export const REQUEST_SINGLE_USER_FETCH = 'REQUEST-SINGLE-USER-FETCH';
export function requestSingleUserFetch({ username }) {
	return {
		type: REQUEST_SINGLE_USER_FETCH,
		payload: {
			username,
		},
	};
}

export const REQUEST_SINGLE_USER_FETCH_SUCCEEDED = 'REQUEST-SINGLE-USER-SUCCEEDED';
export function requestSingleUserFetchSucceeded({ user }) {
	return {
		type: REQUEST_SINGLE_USER_FETCH_SUCCEEDED,
		payload: {
			user,
		},
	};
}

export const REQUEST_SINGLE_USER_FETCH_FAILED = 'REQUEST-SINGLE-USER-FAILED';
export function requestSingleUserFetchFailed({ error }) {
	return {
		type: REQUEST_SINGLE_USER_FETCH_FAILED,
		payload: {
			error,
		},
	};
}

/**
 * Search user
 */
export const REQUEST_USER_SEARCH_FETCH = 'REQUEST-USER-SEARCH-FETCH';
export function requestUserSearchFetch({ username }) {
	return {
		type: REQUEST_USER_SEARCH_FETCH,
		payload: {
			username,
		},
	};
}

export const REQUEST_USER_SEARCH_FETCH_SUCCEEDED = 'REQUEST-USER-SEARCH-FETCH-SUCCEEDED';
export function requestUserSearchFetchSucceeded({ totalCount, items }) {
	return {
		type: REQUEST_USER_SEARCH_FETCH_SUCCEEDED,
		payload: {
			totalCount,
			items,
		},
	};
}

export const REQUEST_USER_SEARCH_FETCH_FAILED = 'REQUEST-USER-SEARCH-FETCH-FAILED';
export function requestUserSearchFetchFailed({ error }) {
	return {
		type: REQUEST_USER_SEARCH_FETCH_FAILED,
		payload: {
			error,
		},
	};
}

export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export function clearSearchResults() {
	return {
		type: CLEAR_SEARCH_RESULTS,
		payload: {},
	};
}

export const SET_SEARCHING_REQUEST_STATE = 'SET-SEARCHING-REQUEST-STATE';
export function setSearchingRequestState({ state }) {
	return {
		type: SET_SEARCHING_REQUEST_STATE,
		payload: {
			state,
		},
	};
}
