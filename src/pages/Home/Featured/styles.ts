import styled from 'styled-components';

export const Container = styled.section`
	background-color: ${({ theme }) => theme.colors.secondary500};
	padding: 4rem 0rem;

	.curve-background {
		> img {
			width: 100%;
			height: 100%;
		}
	}

	.content {
		padding: 4rem;
		text-align: center;
		background-color: #1b1e25;
	}
`;
