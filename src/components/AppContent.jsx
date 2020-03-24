import React from 'react';
import { Container } from 'react-bootstrap';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import routes from '@root/router/routes';
import Navigation from './Navigation/Navigation';

function AppContent() {
	const theme = useTheme();
	return (
		<>
			<Global
				styles={css`
					html,
					body {
						height: 100%;
						width: 100%;
						margin: 0;
						background-color: ${theme.colors.background};
						display: flex;
						justify-content: center;
					}
				`}
			/>
			<Container>{children}</Container>
		</>
	);
}

export default AppContent;
