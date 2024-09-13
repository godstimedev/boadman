import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 4rem 0;

	h2 {
		text-align: center;
		margin-bottom: 1rem;

		${maxQuery('md')} {
			margin-bottom: 4rem;
		}
	}

	.card-wrapper {
		width: 480px;
		height: 580px;

		${minQuery('xl')} {
			margin-left: 27rem;
			/* gives center effect on mobile*/
		}

		${maxQuery('md')} {
			width: 280px;
			height: 450px;
			margin-left: 1.2rem;
		}

		${maxQuery('360px')} {
			width: 280px;
			height: 450px;
			margin-left: 0rem;
		}
	}

	.card {
		background-color: ${({ theme }) => theme.colors.accent500};

		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		text-align: center;
		transform: scale(0.8);
		transition: transform 0.3s ease-in-out;

		${maxQuery('md')} {
			transform: scale(1);
			padding: 2rem 1rem;
			margin-left: 3rem;
			padding: 1rem !important;
		}

		img {
			max-width: 260px;

			${maxQuery('md')} {
				width: 220px !important;
			}
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}

	.card:hover {
		transform: scale(1);
		transition: transform 0.3s ease-in-out;
		cursor: grab;
	}
`;
