import { takeLatest } from 'redux-saga/effects';
import requestSingleUserFetch from '@root/store/workers/requestSingleUserFetch';
import fetchSearchedUsers from '@root/store/workers/requestUserSearch';
import fetchUsers from './workers/requestUsersFetch';
import { REQUEST_SINGLE_USER_FETCH, REQUEST_USER_SEARCH_FETCH, REQUEST_USERS_FETCH } from './actions';

function* defaultSaga() {
	yield takeLatest(REQUEST_USERS_FETCH, fetchUsers);
	yield takeLatest(REQUEST_SINGLE_USER_FETCH, requestSingleUserFetch);
	yield takeLatest(REQUEST_USER_SEARCH_FETCH, fetchSearchedUsers);
}

export default defaultSaga;
