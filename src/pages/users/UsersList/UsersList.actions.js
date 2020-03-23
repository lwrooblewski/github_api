/* eslint import/prefer-default-export: 0 */
import { requestUsersFetch } from '@root/store/actions';

export function onUserListRender(dispatch) {
	dispatch(requestUsersFetch());
}
