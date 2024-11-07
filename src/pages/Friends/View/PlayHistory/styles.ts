import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.matches {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
		gap: 1rem;
	}
`;
