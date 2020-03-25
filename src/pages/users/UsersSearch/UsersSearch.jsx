import React, {useCallback, useState} from 'react';
import { Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { useDebouncedCallback } from 'use-debounce';
import {getUsersRowsReadyToRender, onInputChange} from "./UsersSearch.actions";
import UserRow from "@root/components/UserRow/UserRow";
import {routesType} from "@root/types";
import {useDispatch} from "react-redux";

function UsersSearch({ routes }) {
	const dispatch = useDispatch();
	const [debouncedOnInputChange] = useDebouncedCallback(
		(username) => {
			onInputChange(username, dispatch);
		},
		1000
	);

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
						onChange={(e) => debouncedOnInputChange(e.target.value)}
					/>
				</InputGroup>
				{/*<Row>*/}
				{/*	{getUsersRowsReadyToRender({ fetchedUsers, routes }).map((userData) => (*/}
				{/*		<UserRow key={userData.id} {...userData} />*/}
				{/*	))}*/}
				{/*</Row>*/}
			</Row>
		</Col>
	);
}

UsersSearch.propTypes = {
	router: routesType,
};

export default UsersSearch;
