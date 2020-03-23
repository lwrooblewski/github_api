import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onUserListRender } from '@root/pages/users/UsersList/UsersList.actions';
import UserRow from '../../../components/UserRow/UserRow';
import { routesType } from '../../../types';

function UsersList({ routes }) {
	const dispatch = useDispatch();
	useEffect(() => {
		onUserListRender(dispatch);
	}, []);

	return (
		<div>
			<UserRow
				avatarUrl="https://github.com/images/error/octocat_happy.gif"
				followers={100}
				following={200}
				login="octocat"
				singleUserRoute={routes.singleUser.url}
			/>
		</div>
	);
}

UsersList.propTypes = {
	...routesType,
};

export default UsersList;
