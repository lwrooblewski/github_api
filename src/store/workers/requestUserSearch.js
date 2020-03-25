import { put, call } from 'redux-saga/effects';
import useApi from '../../utils/api/useApi';
import { SearchUser } from '../../utils/api/methods';
import { requestUserSearchFetchFailed, requestUserSearchFetchSucceeded, setSearchingRequestState } from '../actions';

export default function* fetchSearchedUsers({ payload }) {
	try {
		yield put(setSearchingRequestState({ state: true }));
		const { username } = payload;
		const apiMethod = SearchUser({ username });
		const {
			data: { total_count: totalCount, items },
		} = yield call(useApi, apiMethod);
		yield put(requestUserSearchFetchSucceeded({ totalCount, items }));
		yield put(setSearchingRequestState({ state: false }));
	} catch (error) {
		yield put(setSearchingRequestState({ state: false }));
		yield put(requestUserSearchFetchFailed({ error }));
	}
}
