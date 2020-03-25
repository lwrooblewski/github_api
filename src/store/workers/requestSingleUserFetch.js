import { put, call } from 'redux-saga/effects';
import useApi from '../../utils/api/useApi';
import { User } from '../../utils/api/methods';
import { requestSingleUserFetchFailed, requestSingleUserFetchSucceeded } from '../actions';

export default function* requestSingleUserFetch({ payload }) {
	try {
		const { username } = payload;
		const apiMethod = User({ username });
		const { data: user } = yield call(useApi, apiMethod);
		yield put(requestSingleUserFetchSucceeded({ user }));
	} catch (error) {
		yield put(requestSingleUserFetchFailed({ error }));
	}
}
