import { RosterProfileBg } from '@/assets/images';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 0.65rem 0.75rem 1.5rem;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	gap: 1.5rem;
	width: 722px;
	overflow-y: auto;

	${maxQuery('lg')} {
		width: 100%;
	}

	> div:first-child {
		background-image: url(${RosterProfileBg});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px;
		min-height: 254px;
		height: max-content;
		width: 100%;

		display: flex;
		align-items: start;
		padding: 0.65rem 0.75rem 1.5rem;

		${maxQuery('lg')} {
			flex-direction: column;
			align-items: center;
		}

		> .socials {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			> span {
				padding: 0.55rem 0.5rem;
				border-radius: 4px;
				background-color: ${({ theme }) => theme.colors.accent500};
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			height: 100%;
			padding-top: 1rem;

			${maxQuery('md')} {
				/* padding-bottom: 1rem; */
			}

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 0.65rem;
				align-items: center;

				> img {
					border: 1px solid #22252c;
					width: 70px;
					height: 70px;
					object-fit: cover;
					border-radius: 50%;
				}

				h6 {
					font-size: 16px;
					font-weight: 500;
					line-height: 21.12px;
				}

				span {
					color: ${({ theme }) => theme.colors.accent200};
					font-size: 12px;
					font-weight: 400;
					line-height: 15.84px;
				}
			}

			> div:last-child {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
		}
	}

	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.65rem;
		> h6 {
			font-size: 16px;
			font-weight: 500;
			line-height: 21.12px;
		}

		> p {
			font-size: 12px;
			font-weight: 400;
			line-height: 15.84px;
			color: ${({ theme }) => theme.colors.accent200};
			text-align: left;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;
			flex-wrap: wrap;

			${maxQuery('md')} {
				gap: 0.5rem;
			}

			> div {
				display: flex;
				align-items: center;
				gap: 0.35rem;
				padding: 0.35rem 1rem;
				border-radius: 24px;
				background-color: ${({ theme }) => theme.colors.secondary500};
				margin-top: 0.5rem;

				${maxQuery('md')} {
					margin-top: 0;
				}

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
					}
				}
			}
		}

		/* span {
					color: ${({ theme }) => theme.colors.accent200};
					font-size: 12px;
					font-weight: 400;
					line-height: 15.84px;
				} */
	}

	> div:last-child {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
		width: 100%;

		> h6 {
			font-size: 16px;
			font-weight: 500;
			line-height: 21.12px;
			text-align: left;
		}

		> div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.75rem;
			width: 100%;

			${maxQuery('md')} {
				grid-template-columns: 1fr;
			}

			.player-stats {
				display: flex;
				flex-direction: column;
				background-color: ${({ theme }) => theme.colors.secondary500};
				/* width: 246px; */
				width: 100%;
				border-radius: 4px;

				/* ${maxQuery('sm')} {
		        width: 100%;
	            } */

				h6 {
					font-size: 14px;
					font-weight: 500;
					line-height: 16.8px;
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
					padding: 0.75rem;

					> div {
						display: flex;
						align-items: center;
						gap: 0.65rem;

						.img-con {
							width: 1rem;
							height: 1rem;
							/* img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						} */
						}

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.25rem;
						}
					}

					> .badge {
						background-color: ${({ theme }) => theme.colors.secondary500};
						padding: 0.35rem 0.65rem;
						color: white;
						font-size: 8px;
						font-weight: 400;
						line-height: 10.56px;
						border-radius: 17px;
					}
				}

				> div:last-child {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 0.5rem;
					padding: 0.75rem;

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
`;
