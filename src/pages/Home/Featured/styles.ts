import { maxQuery, minQuery } from '@/utilities';
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
		padding: 4rem 0;
		text-align: center;
		background-color: #1b1e25;

		.heading {
			margin-bottom: 2rem;
		}
	}

	.game-card-container {
		position: relative;
		overflow: hidden;
	}

	.game-card-container::before {
		content: '';
		position: absolute;
		top: -3rem;
		left: -125px;
		width: 1684px;
		height: 87px;
		background-color: #1b1e25;
		border-radius: 100%;
		z-index: 10;

		${maxQuery('xl')} {
			display: none;
		}
	}
	.game-card-container::after {
		content: '';
		position: absolute;
		bottom: -3rem;
		right: -125px;
		width: 1684px;
		height: 87px;
		background-color: #1b1e25;
		border-radius: 100%;
		z-index: 10;

		${maxQuery('xl')} {
			display: none;
		}
	}

	.game-card-wrapper {
		border: 1px solid transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		max-width: 317px;
		width: 100%;
		height: 402px;

		${maxQuery('md')} {
			width: 237px;
			height: 300px;
		}
	}

	.game-card {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		text-align: left;

		> img {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			object-fit: cover;
			z-index: -10;
			width: 100%;
			height: 100%;
		}

		.game-card-content {
			${minQuery('xl')} {
				margin-bottom: 1.5rem;
			}

			> h6 {
				font-size: 21px;
				line-height: 120%;
				font-weight: 500;

				${maxQuery('md')} {
					font-size: 1rem;
					line-height: 1rem;
				}
			}

			> p {
				font-size: 13px;
				line-height: 17px;
				padding-top: 0.3rem;

				${maxQuery('md')} {
					font-size: 9px;
					line-height: 11px;
					padding-top: 0.2rem;
				}
			}

			> div {
				display: flex;
				align-items: center;
				gap: 1rem;
				margin-top: 0.5rem;

				${maxQuery('md')} {
					gap: 0.5rem;
				}
			}
		}
	}

	.swiper-slide-active {
		.game-card-wrapper {
			border-left: 1px solid white;
			border-right: 1px solid white;

			${maxQuery('xl')} {
				border: 1px solid white;
			}

			.game-card {
				background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.76%, rgba(0, 0, 0, 0.7) 80.81%);
				opacity: 100%;
				> .game-card-content {
					transform: translateY(0);
					transition: transform 0.3s ease-in-out;
				}

				.game-card-content {
					opacity: 1;
					transform: translateY(0);
					transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
				}
			}
		}
	}

	/* Optional: Style for non-active slides */
	.swiper-slide {
		cursor: grab;

		.game-card {
			opacity: 20%;

			.game-card-content {
				opacity: 0;
				transform: translateY(500%);
				transition: transform 0.3s ease-in-out;
			}
		}
	}
`;
