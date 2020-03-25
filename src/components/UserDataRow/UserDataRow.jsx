import React from 'react';
import { Col, Row } from 'react-bootstrap';
import userDataRowPropTypes from '@root/types/components/UserDataRow';

function UserDataRow({ label, value }) {
	return (
		<Row>
			<Col>
				<strong>{label}</strong>
			</Col>
			<Col className="text-right">{value}</Col>
		</Row>
	);
}

UserDataRow.propTypes = userDataRowPropTypes;

export default UserDataRow;
