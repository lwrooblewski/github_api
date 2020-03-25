import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndlessScroll from '@root/components/atoms/EndlessScroll/EndlessScroll';
import {
	fetchNewUsersPage,
	getUsersRowsReadyToRender,
	onUserListRender,
} from '@root/pages/users/UsersList/UsersList.actions';
import { routesType } from '@root/types';
import { selectUsers, usersInStoreAmountSelector } from '@root/store/selectors';
import UserRow from '@root/components/UserRow/UserRow';

function UsersList({ routes }) {
	const dispatch = useDispatch();
	const usersAmount = useSelector(usersInStoreAmountSelector);
	const fetchedUsers = useSelector(selectUsers);

	useEffect(() => {
		onUserListRender(dispatch, usersAmount);
	}, []);

	const appendNewUsers = useCallback(() => {
		fetchNewUsersPage(dispatch);
	}, []);

	return (
		<EndlessScroll onScrolledToEnd={appendNewUsers}>
			{getUsersRowsReadyToRender({ fetchedUsers, routes }).map((userData) => (
				{/* Disabling due to known properties of UserRow */}
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<UserRow key={userData.id} {...userData} />
			))}
		</EndlessScroll>
	);
}

UsersList.propTypes = {
	routes: routesType.isRequired,
};

export default UsersList;
