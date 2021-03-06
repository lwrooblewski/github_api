import { runSaga } from 'redux-saga';

export default async function recordSaga(saga, initialAction, store) {
	const dispatched = [];

	await runSaga(
		{
			dispatch: (action) => dispatched.push(action),
			getState: () => store,
		},
		saga,
		initialAction,
	).toPromise();

	return dispatched;
}
