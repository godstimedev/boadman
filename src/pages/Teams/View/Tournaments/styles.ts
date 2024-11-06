import styled from 'styled-components';

export const Container = styled.div`
	.tournaments {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
		gap: 1rem;
	}
`;
