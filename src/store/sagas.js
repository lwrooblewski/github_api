import { takeLatest } from 'redux-saga/effects';
import {REQUEST_SINGLE_USER_FETCH, REQUEST_USERS_FETCH} from './actions';
import fetchUsers from './workers/requestUsersFetch';
import requestSingleUserFetch from "@root/store/workers/requestSingleUserFetch";

function* defaultSaga() {
	yield takeLatest(REQUEST_USERS_FETCH, fetchUsers);
	yield takeLatest(REQUEST_SINGLE_USER_FETCH, requestSingleUserFetch);
}

export default defaultSaga;
