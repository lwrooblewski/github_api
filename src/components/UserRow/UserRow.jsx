import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from '@reach/router';
import { useTheme } from 'emotion-theming';
import { Avatar, UserDataCol, Login } from './UserRow.components';
import userRowPropTypes from '../../types/components/UserRow';
import { createLinkAddress } from '../../router/Router.actions';

function UserRow({ avatarUrl, login, singleUserRoute }) {
	const theme = useTheme();
	return (
		<Row>
			<UserDataCol>
				<Avatar src={avatarUrl} />
			</UserDataCol>
			<UserDataCol>
				<Login theme={theme}>{login}</Login>
			</UserDataCol>
			<UserDataCol>
				<Link
					to={createLinkAddress(singleUserRoute, {
						id: login,
					})}
				>
					See details
				</Link>
			</UserDataCol>
		</Row>
	);
}

UserRow.propTypes = {
	...userRowPropTypes,
};

export default UserRow;
