import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 3rem;

	.stats {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div:first-child {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			${maxQuery('md')} {
				flex-direction: column;
				justify-content: center;
			}

			.player-1,
			.player-2 {
				background-color: ${({ theme }) => theme.colors.accent500};
				padding: 1rem 3rem 1rem 1rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex: 1;
				border-radius: 4px;

				${maxQuery('xl')} {
					padding: 0.75rem;
				}
				${maxQuery('md')} {
					width: 100%;
					padding: 0.75rem;
				}

				span {
					font-size: 14px;
					font-weight: 400;
					line-height: 18.48px;
					color: ${({ theme }) => theme.colors.accent200};

					${maxQuery('xl')} {
						font-size: 10px;
						font-weight: 400;
						line-height: 13.2px;
					}

					> .quote {
						font-size: 12px;
						font-weight: 400;
						line-height: 15.84px;

						${maxQuery('xl')} {
							font-size: 10px;
							font-weight: 400;
							line-height: 13.2px;
						}
					}
				}
				p {
					font-size: 14px;
					font-weight: 400;
					line-height: 18.48px;
				}

				> div:first-child {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;

					> div {
						display: flex;
						align-items: center;
						gap: 0.5rem;

						p {
							font-size: 14px;
							font-weight: 500;
							line-height: 16.8px;

							${maxQuery('xl')} {
								font-size: 12px;
								font-weight: 500;
								line-height: 14.4px;
							}
						}

						.img-con {
							width: 1rem;
							height: 1rem;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}
					}
				}

				> div:last-child {
					display: flex;
					justify-content: center;
					gap: 2rem;

					${maxQuery('xl')} {
						gap: 1rem;
					}
					${maxQuery('lg')} {
						gap: 0.5rem;
					}
					${maxQuery('md')} {
						gap: 1rem;
					}

					> div {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 0.75rem;
					}
				}
			}

			.versus {
				font-size: 14px;
				font-weight: 500;
				line-height: 16.8px;
			}
		}

		> div:last-child {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			${maxQuery('xl')} {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
				gap: 1rem;
			}
		}
	}

	.rules {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
		}

		> div {
			display: grid;
			grid-template-columns: 1.3fr 1.7fr;
			align-items: start;
			justify-content: space-between;
			gap: 2rem;

			${maxQuery('md')} {
				display: none;
			}
		}

		.trigger {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			button {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 1rem;
				font-size: 14px;
				font-weight: 500;
				line-height: 18.48px;
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 4px;

				&.active {
					background-color: ${({ theme }) => theme.colors.primary500};
					transition: all 0.2s ease-in-out;
				}
			}
		}

		.display {
		}

		.accordion-con {
			display: none;

			${maxQuery('md')} {
				display: block;
			}
		}
	}
`;
