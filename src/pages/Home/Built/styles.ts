import styled from 'styled-components';

export const Container = styled.section`
	padding: 4rem 2rem;

	h2 {
		text-align: center;

		span {
			color: ${({ theme }) => theme.colors.primary500};
		}
	}
`;
