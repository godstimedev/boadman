import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h6 {
			padding: 0.5rem 0;
		}
	}

	.friends-con {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
		gap: 1rem;
	}
`;
