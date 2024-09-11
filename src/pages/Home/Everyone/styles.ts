import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 4rem 1rem;

	h2 {
		text-align: center;
		margin-bottom: 4rem;
	}

	.card {
		background-color: ${({ theme }) => theme.colors.accent500};

		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 6.5rem 1.5rem;
		border-radius: 1rem;
		text-align: center;
		transform: scale(1);
		transition: transform 0.3s;

		${maxQuery('md')} {
			padding: 6rem 1rem;
		}

		img {
			max-width: 260px;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}

	.card:hover {
		transform: scale(0.8);
		transition: transform 0.3s;
	}
`;
