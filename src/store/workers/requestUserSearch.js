import { put, call } from 'redux-saga/effects';
import useApi from '../../utils/api/useApi';
import {SearchUser} from '../../utils/api/methods';
import {
    requestUserSearchFetchFailed, requestUserSearchFetchSucceeded,
} from '../actions';

export default function* fetchSearchedUsers({ payload }) {
    try {
        const { username } = payload;
        const apiMethod = SearchUser({ username });
        const { data: users } = yield call(useApi, apiMethod);
        yield put(requestUserSearchFetchSucceeded({ users }));
    } catch (error) {
        yield put(requestUserSearchFetchFailed({ error }));
    }
}
