import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@root/components/atoms/Avatar';
import { selectSingleUserFromCache } from '@root/store/selectors';
import Loading from '@root/components/atoms/Loading/Loading';
import UserDataRow from '@root/components/UserDataRow/UserDataRow';
import { isEvenNumber } from '@root/utils/helpers';
import { UserSingleDataContainer } from './UsersSingle.components';
import { fetchSingleUserData, getUserDataRowsReadyToRender } from './UsersSingle.actions';

function UsersSingle() {
	const { username } = useParams();
	const dispatch = useDispatch();
	const user = useSelector(selectSingleUserFromCache(username));
	useEffect(() => {
		if (!user) fetchSingleUserData(dispatch, username);
	}, []);

	return user ? (
		<Col>
			<UserSingleDataContainer>
				<UserDataRow label={<Avatar src={user.get('avatar_url')} />} value={user.get('name')} />
			</UserSingleDataContainer>
			{getUserDataRowsReadyToRender({ user }).map((cell, index) => (
				<UserSingleDataContainer key={cell.id} highlight={!isEvenNumber(index)}>
					<UserDataRow label={cell.label} value={cell.value || 'N/A'} />
				</UserSingleDataContainer>
			))}
		</Col>
	) : (
		<Loading />
	);
}

export default UsersSingle;
