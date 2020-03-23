import { put, call } from 'redux-saga/effects';
import useApi from '../../utils/api/useApi';
import { Users } from '../../utils/api/methods';
import { requestUsersFetchFailed, requestUsersFetchSucceeded } from '../actions';

export default function* fetchUsers(action) {
	const method = Users({ since: action.payload.since });
	try {
		const { data: users } = yield call(useApi, method);
		yield put(requestUsersFetchSucceeded({ users }));
	} catch (e) {
		yield put(requestUsersFetchFailed(e));
	}
}
