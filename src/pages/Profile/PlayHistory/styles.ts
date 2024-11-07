import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.matches {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(277px, 1fr));
		gap: 1rem;
	}
`;
