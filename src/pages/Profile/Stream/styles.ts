import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.streams {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
		gap: 1rem;
	}
`;
