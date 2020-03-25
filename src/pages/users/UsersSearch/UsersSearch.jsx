import React, { useEffect, useState } from 'react';
import { Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { useDebouncedCallback } from 'use-debounce';
import { clearSearchResultsFromStore, getUsersRowsReadyToRender, onInputChange } from './UsersSearch.actions';
import UserRow from '@root/components/UserRow/UserRow';
import { routesType } from '@root/types';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectSearchingRequestState,
	selectSearchingResultsItems,
	selectSearchingResultsTotalCount,
} from '@root/store/selectors';
import Loading from '@root/components/atoms/Loading/Loading';

const DEBOUNCE_TIME = 600;
function UsersSearch({ routes }) {
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const fetchedUsersTotalCount = useSelector(selectSearchingResultsTotalCount());
	const fetchedUsers = useSelector(selectSearchingResultsItems());
	const isLoading = useSelector(selectSearchingRequestState());

	useEffect(() => {
		if (!query) {
			clearSearchResultsFromStore(dispatch);
			setIsTyping(false);
		}
	}, [query]);

	const [debouncedOnInputChange] = useDebouncedCallback((username) => {
		setIsTyping(false);
		if (query) onInputChange(username, dispatch);
	}, DEBOUNCE_TIME);
	const noResults = fetchedUsersTotalCount === 0;

	const shouldDisplay = {
		loading: isLoading,
		results: !isTyping && !isLoading && fetchedUsers.size > 0,
		typing: isTyping,
		noResults: !isTyping && !isLoading && query && noResults,
	};

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
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
							setIsTyping(true);
							debouncedOnInputChange(e.target.value);
						}}
					/>
				</InputGroup>
			</Row>
			<Row>
				<Col>
					{shouldDisplay.typing && <i>Typing...</i>}
					{shouldDisplay.loading && <Loading />}
					{shouldDisplay.results
						? getUsersRowsReadyToRender({ fetchedUsers, routes }).map((userData) => (
								<UserRow key={userData.id} {...userData} />
						  ))
						: null}
					{shouldDisplay.noResults ? <i>No results found.</i> : null}
				</Col>
			</Row>
		</Col>
	);
}

UsersSearch.propTypes = {
	router: routesType,
};

export default UsersSearch;
