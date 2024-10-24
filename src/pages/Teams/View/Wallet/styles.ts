import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.header {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		> div:first-child {
			${maxQuery('xl')} {
				flex-direction: column;
				gap: 1.5rem;
			}

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				margin-right: auto;

				> div:first-child {
					display: flex;
					align-items: end;
					gap: 0.2rem;

					/* h1 {
						font-size: 64px;
						font-weight: 500;
						line-height: 84.48px;
					} */

					span {
						font-size: 24px;
						font-weight: 500;
						line-height: 31.68px;
						padding: 0.5rem 0;
					}
				}

				> div:last-child {
					display: flex;
					align-items: center;
					gap: 1rem;

					> button {
						width: 100%;
					}
				}
			}

			> div:last-child {
				display: flex;
				align-items: center;

				gap: 1rem;
				flex-wrap: wrap;

				${maxQuery('xl')} {
					justify-content: center;
				}

				> div {
					background-color: ${({ theme }) => theme.colors.accent500};
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					padding: 0.75rem 0.75rem 0;

					> div {
						> div {
							display: flex;
							align-items: end;
							gap: 0.5rem;

							h4,
							span {
								font-size: 18px;
								font-weight: 500;
								line-height: 23.76px;
							}
							.stat {
								padding: 0.35rem 0.15rem;
								background-color: #008080;
								border-radius: 50%;
								font-size: 10px;
								font-weight: 400;
								line-height: 13.2px;
							}
						}
						p {
							font-size: 12px;
							font-weight: 400;
							line-height: 15.84px;
						}
					}
				}
			}
		}

		> div:last-child {
			${maxQuery('md')} {
				flex-direction: column;
				gap: 1.5rem;
			}

			h6 {
				font-size: 24px;
				font-weight: 500;
				line-height: 31.68px;
				margin-right: auto;
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

			thead {
				> th {
					font-size: 12px;
					font-weight: 400;
					line-height: 15.84px;
					color: ${({ theme }) => theme.colors.accent200};
					text-align: left;
					padding: 0rem 0.5rem;
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
`;
