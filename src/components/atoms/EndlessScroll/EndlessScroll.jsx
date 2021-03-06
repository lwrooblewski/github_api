import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { childrenType } from '@root/types';
import useIntersectionObserver from '@root/utils/hooks/useIntersectionObserver';
import { Container, DataContainer } from './EndlessScroll.components';
import Loading from '../Loading/Loading';

export default function EndlessScroll({ children, onScrolledToEnd = () => {} }) {
	const loadingRef = useRef();
	const inView = useIntersectionObserver(loadingRef);

	useEffect(() => {
		if (inView) onScrolledToEnd();
	}, [inView]);

	return (
		<Container>
			<DataContainer>{children}</DataContainer>
			<Loading ref={loadingRef} />
		</Container>
	);
}

EndlessScroll.propTypes = {
	children: childrenType,
	onScrolledToEnd: PropTypes.func.isRequired,
};
