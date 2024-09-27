import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	.wrapper {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 280px;

		${maxQuery('xl')} {
			flex-direction: column;
			gap: 1rem;
		}

		${maxQuery('md')} {
			display: none;
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			height: 100%;

			${maxQuery('xl')} {
				flex-direction: row;
				gap: 1rem;
			}
		}
	}

	.profile-card {
		background: ${({ theme }) => theme.colors.accent500};
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem 1.5rem 0rem;
		border-radius: 5px;
		height: 100%;
		width: 750px;

		${maxQuery('xl')} {
			width: 100%;
		}

		${maxQuery('md')} {
			padding: 1rem 1rem 1.5rem 0rem;
			gap: 0.5rem;

			height: max-content;
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;

			${maxQuery('md')} {
				gap: 0.5rem;
				font-size: 10px;
				line-height: 12px;
			}

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 1rem;

				> div:first-child {
					span {
						color: ${({ theme }) => theme.colors.accent200};

						font-size: 12px;
						line-height: 14.4px;

						${maxQuery('md')} {
							font-size: 7.16px;
							line-height: 8.59px;
						}
					}
					p {
						display: flex;
						align-items: center;
						gap: 0.5rem;
						font-size: 18px;
						line-height: 21.6px;
						font-weight: 500;
						white-space: nowrap;

						${maxQuery('md')} {
							gap: 0.1rem;
							font-size: 10.74px;
							line-height: 12.89px;
						}
					}
				}

				> div:last-child {
					button {
						white-space: nowrap;
						padding: 0.5rem !important;
					}
				}
			}

			.middle {
				display: flex;
				align-items: start;
				gap: 1rem;

				> div:first-child {
					span {
						color: ${({ theme }) => theme.colors.accent200};
						font-size: 12px;
						line-height: 14.4px;

						${maxQuery('md')} {
							font-size: 10px;
							line-height: 12px;
						}
					}
					div {
						display: flex;
						align-items: center;

						p {
							font-size: 14px;
							line-height: 16.8px;

							${maxQuery('md')} {
								font-size: 10px;
								line-height: 12px;
							}
						}
					}
				}

				> div:last-child {
					padding-left: 1rem;
					border-left: 1px solid ${({ theme }) => theme.colors.accent100};

					${maxQuery('md')} {
						display: none;
					}

					span {
						color: ${({ theme }) => theme.colors.accent200};
						font-size: 12px;
						line-height: 14.4px;

						${maxQuery('md')} {
							font-size: 10px;
							line-height: 12px;
						}
					}
					div {
						margin-top: 0.2rem;
						display: flex;
						align-items: center;
						gap: 0.3rem;
						p {
							font-size: 14px;
							line-height: 16.8px;

							${maxQuery('md')} {
								font-size: 10px;
								line-height: 12px;
							}
						}
					}
				}
			}

			hr {
				border: 1px solid ${({ theme }) => theme.colors.accent100};
			}

			.bottom {
				width: max-content;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
				align-items: center;
				gap: 0.5rem;

				${maxQuery('md')} {
					grid-template-columns: 1fr 1fr;
					width: 100%;
				}

				> div {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					span {
						color: ${({ theme }) => theme.colors.accent200};
						font-size: 12px;
						line-height: 14.4px;

						${maxQuery('md')} {
							font-size: 10px;
							line-height: 12px;
						}
					}

					p {
						font-size: 14px;
						line-height: 16.8px;

						${maxQuery('md')} {
							font-size: 10px;
							line-height: 12px;
						}
					}
				}
			}
		}
	}

	.alert-card {
		background: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;

		padding: 1rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		flex: 1;

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
			font-size: 14px;
			line-height: 18.48px;
		}

		div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> button {
				width: 100%;
			}
		}
	}

	.balance-card {
		background: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;

		padding: 1rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		${maxQuery('xl')} {
			height: max-content;
		}

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 1rem;

			> span {
				width: max-content;
				padding: 0.5rem;
				background: ${({ theme }) => theme.colors.secondary500};
				border-radius: 50%;
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				span {
					font-size: 14px;
					line-height: 18.48px;
				}

				p {
					font-size: 18px;
					line-height: 23.76px;
				}
			}
		}
	}

	.swiper-con {
		${minQuery('md')} {
			display: none;
		}

		.swiper-wrapper {
			margin-bottom: 2.5rem;

			display: flex;
			align-items: center;
		}
		.swiper-pagination {
			position: absolute;
			bottom: 0;
			width: 100%;
			text-align: center;
		}
		.swiper-pagination-bullet {
			background: ${({ theme }) => theme.colors.white} !important;
			opacity: 1;
			width: 8px;
			height: 8px;
			border-radius: 100px;
		}
		.swiper-pagination-bullet-active {
			background: ${({ theme }) => theme.colors.primary500} !important;
			width: 16px;
			height: 8px;
			border-radius: 100px;
		}
	}
`;
