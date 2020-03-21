import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 100%;
  background-color: ${props => props.background};
`;

function AppContent() {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            background-color: ${theme.colors.primary};
          }
`}
      />
      <Container background={theme.colors.secondary}>Lorem ipsum</Container>
    </>
  );
}

export default AppContent;
