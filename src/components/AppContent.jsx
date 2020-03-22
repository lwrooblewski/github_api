import React from 'react';
import { Container } from 'react-bootstrap';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import routes from '@root/router/routes';
import { childrenType } from '../types';
import Navigation from './Navigation/Navigation';

function AppContent({ children }) {
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
			<Navigation routes={routes} />
			<Container>{children}</Container>
		</>
	);
}

AppContent.propTypes = {
	...childrenType,
};

export default AppContent;
