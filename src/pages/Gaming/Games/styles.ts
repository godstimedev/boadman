import { StyledInputContainer } from '@/ui/InputGroup/styles';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h6 {
		font-size: 20px;
		line-height: 26.4px;
	}

	.top {
		display: grid;
		grid-template-columns: 2.8fr 1.2fr;
		gap: 1rem;
		height: max-content;

		${maxQuery('xl')} {
			grid-template-columns: 1fr;
		}

		> div:first-child {
			display: flex;
			gap: 1rem;

			${maxQuery('lg')} {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				justify-content: flex-start;
			}

			> div:first-child {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 1rem;
				flex: 1;

				> div {
					background-color: ${({ theme }) => theme.colors.accent500};
					padding: 1.4rem 1rem;
					border-radius: 5px;
				}
			}

			> div:last-child {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 1rem;
				flex: 1;

				> div {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			${maxQuery('xl')} {
				display: flex;
				flex-direction: row;
				gap: 1rem;
			}

			${maxQuery('md')} {
				display: none;
			}
		}
	}

	.swiper-con {
		display: none;

		${maxQuery('md')} {
			display: block;
			margin: 1rem 0rem 0rem;
		}
	}

	.stats-card {
		display: flex;
		gap: 1rem;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 1rem;
		}

		> div {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
			background-color: ${({ theme }) => theme.colors.secondary500};
			flex: 1;
			padding: 1rem;
			border-radius: 4px;

			> div:nth-child(1) {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				h6 {
					font-size: 20px;
					line-height: 26.4px;
					margin-top: auto;
					padding-top: 0.6rem;
				}

				span {
					font-size: 13px;
					line-height: 17.16px;
					padding-top: 0.4rem;
					color: ${({ theme }) => theme.colors.accent200};
					white-space: nowrap;
				}
			}
			> div:nth-child(2) {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				margin-top: auto;

				span {
					font-size: 12px;
					line-height: 15.84px;
					color: ${({ theme }) => theme.colors.accent200};
					white-space: nowrap;
				}

				p {
					font-size: 14px;
					line-height: 18.48px;
					align-self: flex-end;
				}
			}
		}
	}

	.most-played-card {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.secondary500};
		border-radius: 4px;
		padding: 1rem;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> span {
				padding: 0.5rem;
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 100%;
			}

			> div {
				display: flex;
				justify-content: center;
				flex-direction: column;
				gap: 0.7rem;

				span {
					font-size: 11px;
					line-height: 14.52px;
					color: ${({ theme }) => theme.colors.accent200};
					/* white-space: nowrap; */
				}

				p {
					font-size: 15px;
					line-height: 19.8px;
					font-weight: 500;
				}
			}
		}
	}

	.alert-card {
		background: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;

		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		${maxQuery('xl')} {
			height: max-content;
		}

		span {
			width: max-content;
			padding: 0.5rem;
			background: ${({ theme }) => theme.colors.accent100};
			border-radius: 50%;
		}

		p {
			font-size: 12px;
			line-height: 15.84px;
			padding-right: 0rem;
		}

		div {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin-top: 0.1rem;

			> button {
				width: 100%;
			}
		}
	}

	.make-challenge {
		display: flex;
		gap: 1rem;
		background-color: ${({ theme }) => theme.colors.accent500};
		padding: 1rem;
		border-radius: 5px;

		${maxQuery('xl')} {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		p {
			font-size: 12px;
			line-height: 15.84px;
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding-right: 3rem;
			align-items: start;

			${maxQuery('md')} {
				padding-right: 1rem;
			}
		}
	}

	.middle {
		display: flex;
		gap: 1.5rem;

		${maxQuery('xl')} {
			flex-direction: column;
		}

		${maxQuery('md')} {
			display: none;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			flex: 1;

			> div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 1rem;
			}
			/* > div:first-child {
				padding: 0.5rem 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
			} */
		}
	}
	.section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		${maxQuery('md')} {
			margin-bottom: 1rem;
		}
	}

	.bottom {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.filter-box {
			display: flex;
			gap: 0.65rem;
			background-color: ${({ theme }) => theme.colors.accent100};
			padding: 1rem;
			border-radius: 5px;
			overflow-x: auto;

			button {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				white-space: nowrap;
				padding: 0 0.75rem;
				font-size: 14px;
				line-height: 16.8px;
				font-weight: 400;

				&.active {
					background-color: ${({ theme }) => theme.colors.accent500};
					border-radius: 4px;
				}
			}

			> div {
				${maxQuery('lg')} {
					display: none;
				}
				margin-left: auto;

				${StyledInputContainer} {
					input {
						padding: 0.5rem 1rem;
						background-color: ${({ theme }) => theme.colors.accent500};
					}
				}
			}
		}

		.input-box {
			display: none;
			${maxQuery('lg')} {
				display: block;
			}

			${StyledInputContainer} {
				input {
					padding: 0.5rem 1rem;
					background-color: ${({ theme }) => theme.colors.accent500};
				}
			}
		}

		.games-con {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
		}

		.game-card {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;

			> div {
				min-width: 260px;
				height: 200px;
				img {
					width: 100%;
					height: 100%;
					border-radius: 5px;
					object-fit: cover;
				}
			}

			p {
				font-size: 14px;
				line-height: 18.48px;
				font-weight: 500;
			}
		}
	}

	.match-card {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		background-color: ${({ theme }) => theme.colors.accent500};
		width: 100%;
		height: 138px;

		${maxQuery('lg')} {
			height: max-content;
		}

		span {
			font-size: 10px;
			line-height: 13.2px;
			color: ${({ theme }) => theme.colors.accent200};
		}
		p {
			font-size: 12px;
			line-height: 14.8px;
		}

		.status {
			display: flex;
			flex-direction: column;
			align-items: center;

			.img-con {
				width: 12px;
				height: 12px;

				img {
					width: 100%;
				}
			}

			.badge {
				background-color: ${({ theme }) => theme.colors.secondary500};
				padding: 0.3rem 0.5rem;
				border-radius: 17px;
				height: max-content;
				text-transform: capitalize;
			}

			> div {
				display: flex;
				align-items: center;
				gap: 0.15rem;
			}

			.winner {
				font-size: 10px;
				line-height: 12px;
				font-weight: 500;
				color: ${({ theme }) => theme.colors.white} !important;
			}
		}

		.icon-con {
			padding: 0.5rem;
			background-color: ${({ theme }) => theme.colors.accent100};
			border-radius: 100%;
		}

		> div:first-child {
			display: flex;
			justify-content: space-between;
			gap: 0.75rem;
			padding: 1rem 1rem 0rem 1rem;

			${maxQuery('md')} {
				padding: 0.75rem 0.75rem 0rem 0.75rem;
			}

			> div {
				display: flex;
				align-items: center;
				gap: 0.7rem;

				p {
					font-size: 14px;
					line-height: 18.48px;
					font-weight: 500;
				}
			}
		}

		hr {
			border: 1px solid ${({ theme }) => theme.colors.accent100};
		}

		> div:last-child {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 0.75rem;
			padding: 0rem 1rem 1rem 1rem;
			${maxQuery('md')} {
				padding: 0 0.75rem 0.75rem 0.75rem;
			}

			> div {
				display: flex;
				align-items: center;
				gap: 0.65rem;

				> div {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
				}

				.player {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					p {
						color: white;

						&.active {
							color: ${({ theme }) => theme.colors.white};
						}

						&.inactive {
							color: ${({ theme }) => theme.colors.accent200};
						}
					}
				}

				.img-con {
					width: 12px;
					height: 12px;

					img {
						width: 100%;
					}
				}
			}

			.scores {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.25rem;

				> span {
					font-size: 1rem;
					line-height: 21.12px;
					font-weight: 500;
					color: ${({ theme }) => theme.colors.accent200};

					&.active {
						color: ${({ theme }) => theme.colors.white};
					}
				}
			}

			> div:last-child {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}
`;
