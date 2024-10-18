import { StyledMatchContainer } from '@/components/Cards/Match/styles';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 4rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	${maxQuery('md')} {
		padding: 2rem;
	}

	span {
		font-size: 12px;
		font-weight: 400;
		line-height: 15.84px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	.modal-head {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 1rem;

			h6 {
				font-size: 20px;
				font-weight: 500;
				line-height: 26.4px;
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5rem;

				> div {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					img {
						width: 24px;
						height: 24px;
						border-radius: 50%;
						object-fit: cover;
					}
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;

			> div {
				display: flex;
				align-items: center;
				gap: 0.75rem;

				p {
					font-size: 16px;
					font-weight: 500;
					line-height: 21.12px;
				}

				.img-con {
					background-color: ${({ theme }) => theme.colors.accent100};
					border-radius: 50px;
					padding: 0.35rem;
				}
			}

			> div:last-child {
				> div {
					background-color: ${({ theme }) => theme.colors.accent100};
					padding: 0.65rem 0.85rem;
					border-radius: 5px;

					font-size: 12px;
					font-weight: 400;
					line-height: 15.84px;
				}
			}
		}
	}

	.stats {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		> div:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 4.5rem;

			${maxQuery('md')} {
				gap: 1.5rem;
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;

				p {
					font-size: 14px;
					font-weight: 500;
					line-height: 18.48px;
				}
			}
		}

		> div:last-child {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;

			${maxQuery('lg')} {
				gap: 1rem;
			}
			${maxQuery('md')} {
				flex-wrap: wrap;
				justify-content: center;
			}

			> div {
				img {
					width: 70px;
					height: 70px;
					border-radius: 50%;
					object-fit: cover;
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					> div {
						display: flex;
						align-items: center;
						gap: 0.35rem;
						white-space: nowrap;

						p {
							font-size: 12px;
							font-weight: 500;
							line-height: 15.84px;
						}

						svg {
							width: 12px;
							height: 12px;
						}
					}

					span {
						font-size: 10px;
						font-weight: 400;
						line-height: 13.2px;
					}
				}
			}
		}
	}

	.history {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h6 {
			font-size: 12px;
			font-weight: 500;
			line-height: 15.84px;
		}

		> div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;

			${maxQuery('lg')} {
				grid-template-columns: 1fr;
			}

			${StyledMatchContainer} {
				background-color: ${({ theme }) => theme.colors.secondary500};
			}
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;

		${maxQuery('md')} {
			flex-direction: column;
		}

		> button {
			width: 100%;
		}
	}
`;
