import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	${maxQuery('md')} {
		gap: 2rem;
	}

	> div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		${maxQuery('xl')} {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		${maxQuery('md')} {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
		${maxQuery('sm')} {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	h6 {
		font-size: 20px;
		font-weight: 500;
		line-height: 26.4px;
	}

	.about {
		background-color: ${({ theme }) => theme.colors.accent500};
		padding: 1.2rem 1rem;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		p {
			color: ${({ theme }) => theme.colors.accent200};
			font-size: 14px;
			font-weight: 400;
			line-height: 18.48px;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			${maxQuery('md')} {
				flex-direction: column;
				gap: 1rem;
				align-items: start;
			}

			> div:first-child {
				display: flex;
				align-items: center;
				gap: 1rem;

				> div {
					display: flex;
					align-items: center;
					gap: 0.45rem;

					> div {
						display: flex;
						flex-direction: column;
						align-items: start;
						gap: 0.15rem;

						> span {
							font-size: 10px;
							font-weight: 400;
							line-height: 13.2px;
						}

						> p {
							font-size: 12px;
							font-weight: 500;
							line-height: 15.84px;
							text-transform: uppercase;
							color: white;
						}
					}
				}
			}

			> .socials {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				> span {
					padding: 0.5rem 0.5rem;
					border-radius: 4px;
					background-color: ${({ theme }) => theme.colors.secondary500};
					cursor: pointer;
				}
			}
		}
	}

	.games-playing {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
			gap: 1rem;

			.games-card {
				display: flex;
				flex-direction: column;
				background-color: ${({ theme }) => theme.colors.accent500};
				width: 100%;
				border-radius: 5px;

				h6 {
					font-size: 16px;
					font-weight: 500;
					line-height: 19.2px;
				}

				span {
					font-size: 12px;
					font-weight: 400;
					line-height: 14.4px;

					color: ${({ theme }) => theme.colors.accent200};
				}

				hr {
					border: 1px solid ${({ theme }) => theme.colors.accent100};
				}

				> div:first-child {
					display: flex;
					justify-content: space-between;
					align-items: start;
					padding: 1rem;

					> div {
						display: flex;
						align-items: center;
						gap: 1rem;

						.img-con {
							width: 48px;
							height: 48px;
							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
								border-radius: 5px;
							}
						}

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.5rem;
						}
					}
				}

				> div:last-child {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 1rem;

					p {
						font-size: 14px;
						font-weight: 500;
						line-height: 16.8px;
					}

					svg {
						width: 18px;
						height: 18px;
					}

					> div {
						display: flex;
						align-items: center;
						gap: 0.5rem;

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.5rem;
						}
					}
				}
			}
		}
	}

	.general-stats {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 5px;

			hr {
				border: 1px solid ${({ theme }) => theme.colors.accent100};
			}

			span {
				font-size: 12px;
				font-weight: 400;
				line-height: 14.4px;

				color: ${({ theme }) => theme.colors.accent200};
			}

			p {
				font-size: 14px;
				font-weight: 500;
				line-height: 16.8px;
			}

			> div:first-child {
				display: flex;
				align-items: center;
				gap: 1rem;
				justify-content: space-between;
				flex-wrap: wrap;

				svg {
					width: 18px;
					height: 18px;
				}

				> div {
					display: flex;
					align-items: center;
					gap: 1rem;

					> div {
						display: flex;
						flex-direction: column;
						gap: 0.75rem;
					}
				}
			}

			> div:last-child {
				display: flex;
				align-items: start;
				gap: 4rem;

				${maxQuery('lg')} {
					gap: 1.5rem;
				}
				${maxQuery('md')} {
					flex-wrap: wrap;
				}

				> div:first-child {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					> div {
						display: flex;
						align-items: center;
					}
				}

				> div:nth-child(2) {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1rem;

					> div {
						display: flex;
						align-items: center;
						gap: 0.5rem;

						img {
							width: 20px;
							height: 20px;
							border-radius: 50%;
						}
					}
				}
				> div:nth-child(3) {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1.2rem;
				}
				> div:nth-child(4) {
					display: flex;
					flex-direction: column;
					align-items: start;
					gap: 1rem;
				}
			}
		}
	}

	.game-stats {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
			gap: 1rem;

			.game-stats-card {
				display: flex;
				flex-direction: column;
				background-color: ${({ theme }) => theme.colors.accent500};
				width: 100%;
				border-radius: 5px;

				h6 {
					font-size: 12px;
					font-weight: 500;
					line-height: 15.84px;
				}

				span {
					font-size: 10px;
					font-weight: 400;
					line-height: 12px;
					color: ${({ theme }) => theme.colors.accent200};
				}

				hr {
					border: 1px solid ${({ theme }) => theme.colors.accent100};
				}

				> div:first-child {
					display: flex;
					justify-content: space-between;
					align-items: start;
					padding: 0.8rem 1rem;

					> div {
						display: flex;
						align-items: center;
						gap: 0.75rem;

						.img-con {
							width: 1rem;
							height: 1rem;
							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.5rem;
						}
					}
				}

				> div:last-child {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0.8rem 1rem;

					p {
						font-size: 12px;
						font-weight: 500;
						line-height: 14.4px;
					}

					svg {
						width: 10px;
						height: 10px;
					}

					> div {
						display: flex;
						align-items: center;
						gap: 0.65rem;

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.6rem;
						}
					}
				}
			}
		}
	}
`;
