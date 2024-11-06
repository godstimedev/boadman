import { StyledButton } from '@/ui/Button/styles';
import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.head {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	h4 {
		padding: 0.5rem 0;
		font-size: 24px;
		font-weight: 500;
		line-height: 31.68px;
	}

	h5 {
		font-size: 20px;
		font-weight: 500;
		line-height: 26.4px;
	}

	h6 {
		font-size: 18px;
		font-weight: 500;
		line-height: 23.76px;
	}

	.details {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1rem;

		${maxQuery('xl')} {
			grid-template-columns: 1fr;
		}

		> div {
			width: 100%;
			background-color: ${({ theme }) => theme.colors.accent500};
			padding: 1.5rem 1rem;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			gap: 1.2rem;

			> div {
				display: flex;
				flex-direction: column;
				gap: 1.45rem;

				.balance {
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: ${({ theme }) => theme.colors.secondary500};
					border-radius: 5px;
					padding: 0.75rem;

					${maxQuery('md')} {
						flex-direction: column;
					}

					svg {
						width: 19px;
						height: 19px;

						margin-bottom: 1.75rem;

						> path {
							fill: ${({ theme }) => theme.colors.primary500};
						}
					}

					p {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
					}

					span {
						font-size: 12px;
						font-style: italic;
						font-weight: 400;
						line-height: 15.84px;
						color: ${({ theme }) => theme.colors.accent200};
					}

					> div:first-child {
						display: flex;
						align-items: center;
						gap: 1.3rem;
						padding: 1rem 0.75rem;
						width: 100%;

						> div {
							display: flex;
							flex-direction: column;

							> div {
								display: flex;
								align-items: center;
								gap: 0.5rem;

								> span {
									margin-top: 0.5rem;
								}
							}

							${StyledButton} {
								width: max-content;
								text-decoration: underline;
							}
						}
					}

					> .win-lose {
						display: flex;
						gap: 0.75rem;
						height: 100%;
						width: max-content;
						white-space: nowrap;

						${maxQuery('md')} {
							width: 100%;
						}
						${maxQuery('sm')} {
							flex-direction: column;
							width: 100%;
						}

						> div {
							background-color: ${({ theme }) => theme.colors.accent500};
							border-radius: 5px;
							display: flex;
							align-items: center;
							gap: 1rem;
							height: 100%;
							padding: 1rem 0.75rem;

							${maxQuery('md')} {
								width: 100%;
							}

							> div {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								height: 100%;

								${maxQuery('md')} {
									gap: 1rem;
								}
							}
						}
					}
				}

				.charts {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
					gap: 1rem;

					> div {
						background-color: ${({ theme }) => theme.colors.secondary500};
						border-radius: 5px;
						padding: 0.75rem 0.65rem 0;
						width: 100%;

						> div:first-child {
							display: flex;
							align-items: center;
							gap: 0.25rem;

							.stat {
								padding: 0.35rem 0.15rem;
								background-color: #008080;
								border-radius: 50%;
								font-size: 10px;
								font-weight: 400;
								line-height: 13.2px;
							}
						}
					}
				}
			}
		}

		> aside {
			max-width: 480px;
			background-color: ${({ theme }) => theme.colors.accent500};
			padding: 1.5rem 1rem 1rem;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			gap: 0.75rem;

			${maxQuery('xl')} {
				max-width: 100%;
			}

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				p {
					font-size: 12px;
					font-weight: 400;
					line-height: 15.84px;
					color: ${({ theme }) => theme.colors.accent200};
				}
			}

			.action-con {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				> ul {
					display: flex;
					align-items: center;
					gap: 2rem;

					border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};

					${maxQuery('sm')} {
						gap: 1rem;
					}

					a {
						padding: 0.65rem 0.5rem;
						border-bottom: 2px solid transparent;
						color: ${({ theme }) => theme.colors.accent200};
						font-size: 14px;
						line-height: 18.48px;
						font-weight: 500;

						/* ${maxQuery('sm')} {
					font-size: 10px;
					line-height: 13.2px;
				} */

						&.active {
							border-bottom: 2px solid ${({ theme }) => theme.colors.primary500};
							color: ${({ theme }) => theme.colors.primary500};
						}
					}
				}
			}
		}
	}

	> div:last-child {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		> div:first-child {
			display: flex;
			align-items: center;
			justify-content: space-between;

			${maxQuery('md')} {
				flex-direction: column;
				gap: 1.5rem;
			}

			> div:last-child {
				display: flex;
				align-items: center;
				gap: 2rem;

				${maxQuery('md')} {
					margin-left: auto;
					flex-direction: row-reverse;
				}
				${maxQuery('sm')} {
					width: 100%;
					gap: 6rem;
					justify-content: space-between;
					flex-direction: row-reverse;
				}

				input {
					height: 2.5rem;
				}
			}
		}

		.table-con {
			overflow-x: auto;

			> table {
				width: 100%;
				min-width: max-content;
				/* table-layout: fixed; */
				border-collapse: separate; /* Allows border-radius on rows */
				border-spacing: 0 0.75rem;

				${minQuery('300px')} {
					tbody > tr > *:first-child {
						left: 0;
						position: sticky;
					}
				}
				${maxQuery('md')} {
					tbody > tr > *:first-child {
						left: 0;
						position: sticky;
						background-color: ${({ theme }) => theme.colors.accent500};
					}
				}

				thead tr {
					> th {
						font-size: 12px;
						font-weight: 400;
						line-height: 15.84px;
						color: ${({ theme }) => theme.colors.accent200};
						text-align: left;
						padding: 0rem 1rem;
					}
				}

				> tbody tr {
					background-color: ${({ theme }) => theme.colors.accent500};
					cursor: pointer;

					td {
						text-align: left;
						white-space: nowrap;
						padding: 1rem;

						> div {
							display: flex;
							align-items: center;
							gap: 0.5rem;
							justify-content: start;
						}

						.checkbox {
							> input {
								appearance: none;
								border: 1px solid #171a23;
								width: 15px;
								height: 15px;
								border-radius: 3px;
								position: relative;
								cursor: pointer;

								&:checked {
									background-color: ${({ theme }) => theme.colors.primary500} !important;
									border: 1px solid ${({ theme }) => theme.colors.white} !important;

									&::after {
										content: '';
										position: absolute;
										top: 2px;
										left: 5px;
										width: 4px;
										height: 8px;
										border: solid ${({ theme }) => theme.colors.white};
										border-width: 0 2px 2px 0;
										transform: rotate(45deg);
									}
								}
							}
						}

						.badge {
							width: 67px;
							border-radius: 17px;
							background-color: #ffc107;
							padding: 0.5rem 0;

							> span {
								display: flex;
								align-items: center;
								justify-content: center;
								color: ${({ theme }) => theme.colors.secondary500};
								font-size: 10px;
								font-weight: 400;
								line-height: 12px;
							}
						}
					}
					p {
						font-size: 14px;
						font-weight: 500;
						line-height: 16.8px;
					}

					span {
						font-size: 12px;
						font-weight: 400;
						line-height: 14.4px;
						color: ${({ theme }) => theme.colors.accent200};
					}

					td:last-child {
						border-radius: 0 5px 5px 0;
						overflow: hidden;
						div {
							display: flex;
							align-items: center;
							justify-content: end;
							gap: 0.5rem;

							span {
								padding: 0.125rem;
								border: 1px solid ${({ theme }) => theme.colors.primary500};
								border-radius: 50%;
							}
						}
					}

					td:first-child {
						border-radius: 5px 0 0 5px;
						overflow: hidden;
					}
				}
			}
		}
	}
`;
