import { StyledButton } from '@/ui/Button/styles';
import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.filter-box {
		display: flex;
		align-items: center;
		gap: 3rem;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 1rem;
		}

		.filter-buttons {
			display: flex;
			align-items: center;
			gap: 1rem;

			${maxQuery('md')} {
				justify-content: start;
				flex-wrap: wrap;
			}

			> button {
				padding: 0.75rem 0;
				background-color: ${({ theme }) => theme.colors.accent500};
				font-size: 14px;
				font-weight: 400;
				line-height: 18.48px;
				border-radius: 5px;
				width: 135px;
				white-space: nowrap;

				&.active {
					background-color: ${({ theme }) => theme.colors.primary500};
				}
			}
		}

		.dropdowns {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.dropdown {
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 5px;
				padding: 0.75rem 1rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 1rem;
				white-space: nowrap;
				font-size: 14px;
				line-height: 18.48px;
				margin-right: auto;
			}

			.filter {
				margin-left: auto;
			}
		}
	}
	.table-con {
		overflow-x: auto;
	}
	table {
		width: 100%;
		min-width: max-content;
		table-layout: fixed;
		/* border-collapse: collapse; */

		${minQuery('300px')} {
			> * > tr > *:first-child {
				left: 0;
				position: sticky;
			}
		}
		${maxQuery('md')} {
			> * > tr > *:first-child {
				left: 0;
				position: sticky;
				background-color: ${({ theme }) => theme.colors.accent500};
			}
		}

		tbody tr {
			margin-bottom: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 5px;
			cursor: pointer;

			td {
				width: max-content;
				white-space: nowrap;
				padding: 1rem;

				span {
					font-size: 10px;
					line-height: 13.2px;
					color: ${({ theme }) => theme.colors.accent200};
				}

				/* &.badge-con {
					width: max-content;
				} */

				.badge {
					width: 100%;
					border-radius: 17px;
					border: 1px solid #3498db;
					font-size: 10px;
					font-weight: 400;
					line-height: 13.2px;
					padding: 0.5rem 1rem;

					> span {
						/* width: 4rem; */
						padding: auto;
					}

					&.Finished {
						border: 1px solid #008080;
					}
					&.Pending {
						border: 1px solid #ffc107;
					}
					&.Rejected {
						border: 1px solid #e01e37;
					}
					&.In {
						border: 1px solid #673ab7;
					}
				}

				p {
					font-size: 12px;
					line-height: 14.4px;
					font-weight: 500;
				}
			}
		}

		tr {
			background-color: ${({ theme }) => theme.colors.accent500};

			td:first-child {
				/* border-right: 1px solid ${({ theme }) => theme.colors.accent700}; */

				> div {
					display: flex;
					align-items: center;
					gap: 0.75rem;

					> span {
						background-color: ${({ theme }) => theme.colors.accent100};
						padding: 0.5rem;
						border-radius: 100%;
					}

					> div {
						> p {
							font-size: 14px;
							line-height: 18.48px;
							font-weight: 500;
						}
					}
				}
			}
			td:last-child {
				div {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					> div:first-child {
						${StyledButton} {
							&:hover {
								color: ${({ theme }) => theme.colors.success500};
								/* color: red; */
							}
							&:focus {
								color: ${({ theme }) => theme.colors.success500};
								box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.success50};
							}
						}
					}
					> div:last-child {
						${StyledButton} {
							color: white;
							&:hover {
								color: ${({ theme }) => theme.colors.error500};
								/* color: red; */
							}
							&:focus {
								color: ${({ theme }) => theme.colors.error500};
								box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.error500};
							}
						}
					}
				}
			}

			td:nth-child(3),
			td:nth-child(4),
			td:nth-child(5) {
				> div {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.5rem;

					> div {
						display: flex;
						align-items: center;
						gap: 0.5rem;

						> div {
							width: 12px;
							height: 12px;
							img {
								width: 100%;
								height: 100%;
								border-radius: 100%;
							}
						}
					}
				}
			}
		}
	}
`;
