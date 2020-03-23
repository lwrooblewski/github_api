import { put, call, select } from 'redux-saga/effects';
import { lastLoadedUserIdSelector } from '@root/store/selectors';
import useApi from '../../utils/api/useApi';
import { Users } from '../../utils/api/methods';
import { requestUsersFetchFailed, requestUsersFetchSucceeded } from '../actions';

export default function* fetchUsers() {
	try {
		const since = yield select(lastLoadedUserIdSelector);
		const apiMethod = Users({ since });
		const { data: users } = yield call(useApi, apiMethod);
		yield put(requestUsersFetchSucceeded({ users }));
	} catch (error) {
		yield put(requestUsersFetchFailed({ error }));
	}
}
