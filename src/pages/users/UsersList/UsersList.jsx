import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndlessScroll from '@root/components/atoms/EndlessScroll/EndlessScroll';
import { getUsersRowsReadyToRender, onUserListRender } from '@root/pages/users/UsersList/UsersList.actions';
import { routesType } from '../../../types';
import { selectUsers, usersInStoreAmountSelector } from '@root/store/selectors';
import UserRow from '@root/components/UserRow/UserRow';

function UsersList({ routes }) {
	const dispatch = useDispatch();
	const usersAmount = useSelector(usersInStoreAmountSelector);
	const fetchedUsers = useSelector(selectUsers);
	useEffect(() => {
		onUserListRender(dispatch, usersAmount);
	}, []);

	return (
		<EndlessScroll onScrolledToEnd={() => console.log('end')}>
			{getUsersRowsReadyToRender({ fetchedUsers, routes }).map((userData) => (
				<UserRow key={userData.id} {...userData} />
			))}
		</EndlessScroll>
	);
}

UsersList.propTypes = {
	...routesType,
};

export default UsersList;
