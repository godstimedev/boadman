import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 2fr 5fr;
	gap: 1rem;

	${maxQuery('xl')} {
		grid-template-columns: 1fr 2fr;
	}
	${maxQuery('md')} {
		grid-template-columns: 1fr;
	}

	aside {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.rating {
			background-color: ${({ theme }) => theme.colors.accent500};
			padding: 1rem;
			border-radius: 5px;

			> div {
				padding: 0.5rem 0;
				border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};
				p {
					font-size: 14px;
					line-height: 18.48px;
					font-weight: 500;
				}
			}

			.top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				> div:first-child {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					span {
						padding: 0.5rem;
						background-color: ${({ theme }) => theme.colors.secondary500};
						border-radius: 50%;
					}
				}

				> div:last-child {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
					span {
						font-size: 12px;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
					}
				}
			}

			.middle {
				table {
					width: 100%;
					border-collapse: collapse;

					tr {
						text-align: center;
						/* border-top: 1px solid ${({ theme }) => theme.colors.accent100}; */

						td:not(:first-child) {
							> div {
								margin: 0.5rem auto;
								border-left: 1px solid ${({ theme }) => theme.colors.accent100};
							}
						}
						td {
							span {
								font-size: 12px;
								line-height: 18.48px;
								color: ${({ theme }) => theme.colors.accent200};
							}
							p {
								font-size: 14px;
								line-height: 18.48px;
								font-weight: 500;
							}
						}
					}
				}
			}

			.bottom {
				width: 75%;
				border-collapse: collapse;
				margin-left: auto;

				tr {
					text-align: center;
					/* border-top: 1px solid ${({ theme }) => theme.colors.accent100}; */

					td {
						span {
							font-size: 12px;
							line-height: 18.48px;
							color: ${({ theme }) => theme.colors.accent200};
						}
						p {
							font-size: 14px;
							line-height: 18.48px;
							font-weight: 500;
						}

						> div {
							display: flex;
							align-items: center;
							gap: 0.2rem;
							justify-content: center;
						}
					}
				}
			}
		}

		.top-weapons {
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 5px;
			padding: 1rem 1rem 0 1rem;

			> div {
				display: flex;
				justify-content: space-between;
				align-items: center;
				/* border-bottom: 1px solid ${({ theme }) => theme.colors.accent100}; */
				p {
					font-size: 14px;
					line-height: 18.48px;
					font-weight: 500;
				}
			}

			> table {
				width: 100%;
				border-collapse: collapse;

				tr {
					text-align: center;
					border-top: 1px solid ${({ theme }) => theme.colors.accent100};

					td {
						padding: 1rem 0;
					}

					td:first-child {
						display: flex;
						align-items: center;
						justify-content: center;
					}

					td:nth-child(2) {
						text-align: left;
						> div {
							display: flex;
							flex-direction: column;
							gap: 0.2rem;

							span {
								font-size: 12px;
								line-height: 15.84px;
								color: ${({ theme }) => theme.colors.accent200};
							}

							p {
								font-size: 14px;
								line-height: 16.8px;
								font-weight: 500;
							}
						}
					}

					td:last-child {
						/* padding: 1rem 0; */
						div {
							display: flex;
							align-items: center;
							gap: 0.5rem;

							p {
								font-size: 12px;
								line-height: 14.4px;
								font-weight: 400;
								color: ${({ theme }) => theme.colors.accent200};
							}

							> div {
								display: flex;
								flex-direction: column;
								gap: 0.2rem;

								span {
									font-size: 10px;
									line-height: 12px;
									color: ${({ theme }) => theme.colors.accent200};
								}
							}
						}
					}
				}
			}
		}

		.map-performance {
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 5px;
			padding: 1rem 1rem 0 1rem;

			> div {
				display: flex;
				justify-content: space-between;
				align-items: center;
				/* border-bottom: 1px solid ${({ theme }) => theme.colors.accent100}; */
				p {
					font-size: 14px;
					line-height: 18.48px;
					font-weight: 500;
				}
			}

			> table {
				width: 100%;
				border-collapse: collapse;

				tr {
					text-align: center;
					border-top: 1px solid ${({ theme }) => theme.colors.accent100};

					td {
						padding: 1rem 0;
					}

					td:first-child {
						display: flex;
						align-items: center;
						justify-content: left;
						gap: 0.5rem;

						p {
							font-size: 14px;
							line-height: 16.8px;
						}
					}

					td:last-child {
						text-align: right;

						> div {
							display: flex;
							flex-direction: column;
							align-items: right;
							justify-content: right;
							gap: 0.5rem;

							p {
								font-size: 12px;
								line-height: 14.4px;
								font-weight: 400;
							}

							span {
								font-size: 12px;
								line-height: 14.4px;
								color: ${({ theme }) => theme.colors.accent200};
							}
						}
					}
				}
			}
		}

		.recently {
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 5px;
			padding: 1rem 1rem 0 1rem;

			> div {
				display: flex;
				justify-content: space-between;
				align-items: center;

				p {
					font-size: 14px;
					line-height: 18.48px;
					font-weight: 500;
					margin-bottom: 0.5rem;
				}
			}

			> table {
				width: 100%;
				border-collapse: collapse;

				tr {
					text-align: center;
					border-top: 1px solid ${({ theme }) => theme.colors.accent100};

					> th {
						font-size: 12px;
						line-height: 14.4px;
						color: ${({ theme }) => theme.colors.accent200};
						padding: 0.75rem 0;
					}
					th:first-child {
						text-align: left;
					}

					td {
						padding: 1rem 0;
					}

					td {
						> .teamate {
							display: flex;
							align-items: center;
							gap: 0.5rem;

							> div {
								display: flex;
								flex-direction: column;
								justify-content: start;
								text-align: left;
								gap: 0.2rem;
							}
						}

						p {
							font-size: 14px;
							line-height: 16.8px;
						}

						span {
							font-size: 12px;
							line-height: 14.4px;
							color: ${({ theme }) => theme.colors.accent200};
						}
					}
				}
			}
		}
	}

	.table-cons-wrapper {
		/* grid-column: span 3; */
	}

	.table-con-1 {
		> div {
			background-color: ${({ theme }) => theme.colors.accent500};
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
			border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				p {
					font-size: 16px;
					line-height: 21.5px;
					font-weight: 500;
				}
				span {
					font-size: 14px;
					line-height: 18.48px;
					color: ${({ theme }) => theme.colors.accent200};
				}
			}

			> div:last-child {
				button {
					color: white !important;
				}
			}
		}

		.player {
			display: flex;
			align-items: center;
			gap: 0.8rem;

			${maxQuery('md')} {
				gap: 0.5rem;
			}

			img {
				border-radius: 100%;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 0rem;

				span {
					color: ${({ theme }) => theme.colors.accent200};
				}
			}
		}
	}
`;
