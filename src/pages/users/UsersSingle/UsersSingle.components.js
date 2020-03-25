import styled from '@emotion/styled';

export const UserSingleDataContainer = styled.div`
	margin: 20px 0;
	padding: 10px;
	background-color: ${(props) => (props.highlight ? props.theme.colors.primary : ' transparent')};
`;
