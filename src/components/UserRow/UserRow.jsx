import React from 'react';
import { Row } from 'react-bootstrap';
import { useTheme } from 'emotion-theming';
import { Avatar, UserDataCol, Login } from './UserRow.components';
import userRowPropTypes from '../../types/components/UserRow';

function UserRow({ avatarUrl, login }) {
	const theme = useTheme();
	return (
		<Row>
			<UserDataCol>
				<Avatar src={avatarUrl} />
			</UserDataCol>
			<UserDataCol>
				<Login theme={theme}>{login}</Login>
			</UserDataCol>
		</Row>
	);
}

UserRow.propTypes = {
	...userRowPropTypes,
};

export default UserRow;
