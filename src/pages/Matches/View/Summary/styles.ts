import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 3rem;

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
			text-align: left;
			align-self: flex-start;
		}

		button {
			${maxQuery('md')} {
				display: none;
			}
		}
	}

	.stats {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		padding-right: 4rem;
		background-color: ${({ theme }) => theme.colors.accent500};
		border-radius: 4px;

		${maxQuery('lg')} {
			padding: 1rem;
		}

		${maxQuery('md')} {
			display: none;
		}

		p {
			font-size: 14px;
			font-weight: 500;
			line-height: 18.48px;

			${maxQuery('md')} {
				font-size: 12px;
				font-weight: 500;
				line-height: 15.84px;
			}
		}

		span {
			font-size: 14px;
			font-weight: 400;
			line-height: 18.48px;

			color: ${({ theme }) => theme.colors.accent200};

			${maxQuery('md')} {
				font-size: 12px;
				font-weight: 400;
				line-height: 15.84px;
			}
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.65rem;
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.65rem;

			p {
				font-size: 14px;
				font-weight: 500;
				line-height: 18.48px;
			}

			span {
				font-size: 12px;
				font-weight: 500;
				line-height: 15.84px;
			}
		}

		> div:nth-child(2) {
			display: flex;
			flex-direction: row;
			gap: 1rem;

			> p {
				align-self: end;
			}

			> div {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.65rem;

				&:first-child {
					span {
						color: #ffa000;
					}
				}
			}
		}
		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.65rem;
		}
	}

	.stats-mobile {
		display: none;

		${maxQuery('md')} {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 4px;

			p {
				font-size: 14px;
				font-weight: 500;
				line-height: 18.48px;

				${maxQuery('md')} {
					font-size: 12px;
					font-weight: 500;
					line-height: 15.84px;
				}
			}

			span {
				font-size: 14px;
				font-weight: 400;
				line-height: 18.48px;

				color: ${({ theme }) => theme.colors.accent200};

				${maxQuery('md')} {
					font-size: 12px;
					font-weight: 400;
					line-height: 15.84px;
				}
			}

			> div:first-child {
				display: flex;
				align-items: center;
				justify-content: space-between;

				> div:first-child {
					display: flex;
					flex-direction: column;
					align-items: start;
					gap: 0.65rem;

					p {
						font-size: 14px;
						font-weight: 500;
						line-height: 18.48px;
					}

					span {
						font-size: 12px;
						font-weight: 500;
						line-height: 15.84px;
					}
				}

				> div:nth-child(2) {
					display: flex;
					flex-direction: row;
					gap: 1rem;

					> p {
						align-self: end;
					}

					> div {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 0.65rem;

						&:first-child {
							span {
								color: #ffa000;
							}
						}
					}
				}
			}

			div:last-child {
				display: flex;
				align-items: center;
				justify-content: space-between;

				> div {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.65rem;
				}
			}
		}
	}

	.players {
		display: flex;
		gap: 1.5rem;

		${maxQuery('md')} {
			flex-direction: column;
		}

		.player-1,
		.player-2 {
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 4px;
			flex: 1;

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

			hr {
				border: 1px solid #313337;
			}

			> div:first-child {
				padding: 1rem;
				padding-right: 2rem;
				display: flex;
				align-items: center;
				justify-content: space-between;

				${maxQuery('md')} {
					padding: 1rem;
				}

				> div {
					display: flex;
					flex-direction: column;
					align-items: start;
					gap: 0.5rem;

					div {
						display: flex;
						align-items: center;
						gap: 0.5rem;
					}

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

			> .middle {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
				padding: 1rem;
				gap: 0.75rem;

				> div {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.65rem;
				}
			}

			> div:last-child {
				padding: 1rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;

				p {
					font-size: 14px;
					font-weight: 500;
					line-height: 16.8px;
				}

				> div {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-right: 4rem;

					${maxQuery('md')} {
						padding-right: 1rem;
					}

					> div:first-child {
						display: flex;
						flex-direction: row;
						align-items: center;
						gap: 0.75rem;

						> div {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 0.5rem;
						}
					}
					> div {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 0.5rem;
					}
				}
			}
		}
	}
`;
