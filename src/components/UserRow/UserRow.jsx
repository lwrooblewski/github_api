import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'emotion-theming';
import Avatar from "@root/components/atoms/Avatar";
import { UserDataCol, Login, UserRowContainer } from './UserRow.components';
import {userRowType} from '../../types/components';
import { createLinkAddress } from '../../router/Router.actions';

function UserRow({ avatarUrl, username, singleUserRoute }) {
	const theme = useTheme();
	return (
		<UserRowContainer>
			<UserDataCol>
				<Avatar src={avatarUrl} />
			</UserDataCol>
			<UserDataCol>
				<Login theme={theme}>{username}</Login>
			</UserDataCol>
			<UserDataCol>
				<Link
					to={createLinkAddress(singleUserRoute, {
						username,
					})}
				>
					Details
				</Link>
			</UserDataCol>
		</UserRowContainer>
	);
}

UserRow.propTypes = {
	...userRowType,
};

export default UserRow;
