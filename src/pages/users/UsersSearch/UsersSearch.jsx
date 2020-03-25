import React from 'react';
import { Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import {getUsersRowsReadyToRender} from "./UsersSearch.actions";
import UserRow from "@root/components/UserRow/UserRow";
import EndlessScroll from "@root/components/atoms/EndlessScroll/EndlessScroll";
import {routesType} from "@root/types";

function UsersSearch({ routes }) {
	return (
		<Col>
			<Row>
				<InputGroup className="mb-3">
					<InputGroup.Prepend>
						<InputGroup.Text id="github-username">@</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Username"
						aria-label="Username"
						aria-describedby="github-username"
					/>
				</InputGroup>
				<Row>
					{getUsersRowsReadyToRender({ fetchedUsers, routes }).map((userData) => (
						<UserRow key={userData.id} {...userData} />
					))}
				</Row>
			</Row>
		</Col>
	);
}

UsersSearch.propTypes = {
	router: routesType,
};

export default UsersSearch;
