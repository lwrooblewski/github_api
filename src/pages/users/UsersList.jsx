import React from 'react';
import UserRow from '../../components/UserRow/UserRow';

function UsersList() {
	return (
		<div>
			<UserRow
				avatarUrl="https://github.com/images/error/octocat_happy.gif"
				followers={100}
				following={200}
				login="octocat"
			/>
		</div>
	);
}

export default UsersList;
