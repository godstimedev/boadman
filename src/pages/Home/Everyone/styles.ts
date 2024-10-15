import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 4rem 0;

	h2 {
		text-align: center;
		margin-bottom: 2rem;

		${maxQuery('md')} {
			margin-bottom: 4rem;
		}
	}

	.card-wrapper {
		max-width: 709px;
		width: 100%;
		height: 580px;
	}

	.swiper-slide-active {
		transform: scale(1) !important; /* Scale the active slide to make it larger */
		transition: transform 0.3s ease !important; /* Smooth transition */
	}

	/* Optional: Style for non-active slides */
	.swiper-slide {
		cursor: grab;
		transform: scale(0.8);
		transition: transform 0.3s ease;
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
`;
