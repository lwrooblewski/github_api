import styled from '@emotion/styled';
import { Col, Row } from 'react-bootstrap';
import { centerContentInColumn } from '../../utils/styles/mixins';

export const UserDataCol = styled(Col)`
	${centerContentInColumn}
`;

export const UserRowContainer = styled(Row)`
	margin: 10px 0;
`;

export const Login = styled.span`
	font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
	color: ${({ theme }) => theme.colors.text};
`;
