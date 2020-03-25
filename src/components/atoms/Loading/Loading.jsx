import React, { forwardRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { LoadingContainer } from './Loading.components';

const Loading = forwardRef((props, ref) => {
	return (
		<LoadingContainer>
			<Spinner animation="border" variant="primary" ref={ref} />
		</LoadingContainer>
	);
});

export default Loading;
