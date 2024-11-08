import { ApexLegendsBanner } from '@/assets/images';
import { StyledButton } from '@/ui/Button/styles';
import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.banner {
		background-image: url(${ApexLegendsBanner});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px 5px 0 0;
		height: 386px;
		width: 100%;

		/* ${maxQuery('lg')} {
			background-image: url(${ApexLegendsBanner});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		} */
	}

	> div:last-child {
		display: flex;
		gap: 2rem;

		${maxQuery('lg')} {
			flex-direction: column;
			gap: 2rem;
		}

		> div {
			flex: 1;
		}
		h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
		}

		span {
			font-size: 14px;
			font-weight: 400;
			line-height: 18.48px;
			color: ${({ theme }) => theme.colors.accent200};
		}

		.details {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> div:first-child {
				display: flex;
				gap: 1rem;

				${maxQuery('md')} {
					flex-direction: column;
					gap: 1rem;
				}
			}

			> div:last-child {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				padding: 1rem;
				background-color: ${({ theme }) => theme.colors.accent500};

				p {
					font-size: 14px;
					font-weight: 400;
					line-height: 18.48px;
					color: ${({ theme }) => theme.colors.accent200};
				}

				> div {
					display: flex;
					gap: 1rem;

					span {
						font-size: 10px;
						font-weight: 400;
						line-height: 13.2px;
						background-color: ${({ theme }) => theme.colors.secondary500};
						border-radius: 17px;
						padding: 0.75rem 1rem;
					}
				}
			}
		}

		.aside {
			display: flex;
			justify-content: space-between;
			gap: 1rem;

			${minQuery('1520px')} {
				gap: 2.5rem;
			}

			${maxQuery('md')} {
				flex-direction: column;
				gap: 2rem;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				${maxQuery('md')} {
					gap: 1rem;
				}
			}
			> div:first-child {
				flex: 0.52;

				${maxQuery('md')} {
					flex: 1;
				}
			}
			> div:last-child {
				flex: 0.48;
				${maxQuery('lg')} {
					/* flex: 1; */
					width: 276px;
				}
			}

			.leaderboard {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				> div {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background-color: ${({ theme }) => theme.colors.accent500};
					border-radius: 5px;
					padding-right: 1rem;
					/* flex: 1; */

					> div:first-child {
						display: flex;
						align-items: center;
						justify-content: space-between;
						gap: 0.5rem;

						h6 {
							font-size: 14px;
							font-weight: 500;
							line-height: 16.8px;
						}

						.rank {
							display: flex;
							align-items: center;
							justify-content: center;
							gap: 0.5rem;
							padding: 1.2rem 1rem;
							font-size: 12px;
							font-weight: 500;
							line-height: 15.84px;
							color: white;
							border-radius: 5px 0 0 5px;
							background-color: #c28c30;

							&.silver {
								background-color: #9b9b9b;
							}
							&.bronze {
								background-color: #482c0c;
							}
						}
					}

					> div:last-child {
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
						justify-content: center;
						align-items: end;

						p {
							font-size: 12px;
							font-weight: 500;
							line-height: 14.4px;
						}

						span {
							font-size: 12px;
							font-weight: 400;
							line-height: 14.4px;
						}
					}
				}

				${StyledButton} {
					width: 100%;
					background-color: ${({ theme }) => theme.colors.accent500};
				}
			}
		}
	}
`;
