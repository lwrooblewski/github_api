import { takeLatest } from 'redux-saga/effects';
import { REQUEST_USERS_FETCH } from './actions';
import fetchUsers from './workers/requestUsersFetch';

function* defaultSaga() {
	yield takeLatest(REQUEST_USERS_FETCH, fetchUsers);
}

export default defaultSaga;
