import styled from 'styled-components';
import { maxQuery, minQuery } from '../../../utilities';

export const Container = styled.section`
	padding: 0rem 1.5rem 0rem 1.5rem;
	min-height: calc(90vh);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	overflow-x: hidden;

	h1 > span {
		${({ theme }) => theme.fonts.secondaryFont};

		color: ${({ theme }) => theme.colors.primary500};
	}

	.gamer-card {
		background: ${({ theme }) => theme.colors.accent500};
		position: relative;
		z-index: 10;
		display: flex;
		gap: 1rem;
		align-items: center;
		border-radius: 9.34px;
		border: 7px solid;
		border-image-source: linear-gradient(180deg, #ff5733 -45.22%, rgba(239, 202, 188, 0.1) 27.78%);
		border-image-slice: 1; /* This tells the browser to use the entire gradient */

		padding: 1.2rem 8rem 1.2rem 1rem;

		${minQuery('lg')} {
			width: 940px;
			/* height: 290px; */
		}

		${maxQuery('md')} {
			padding: 1.5rem 1rem 1.5rem 0rem;
		}

		${maxQuery('sm')} {
			gap: 0rem;
		}

		.avatar {
			> svg {
				width: 220px;
				height: 200px;

				${maxQuery('md')} {
					width: 120px;
					height: 100px;
				}
			}
		}

		.gamer-info {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
			width: 100%;

			${maxQuery('md')} {
				gap: 0.35rem;
			}

			span {
				font-size: 14.01px;
				line-height: 14.13px;
				font-weight: 400;
				color: ${({ theme }) => theme.colors.accent200};

				${maxQuery('sm')} {
					font-size: 6.64px;
					font-weight: 400;
					line-height: 7.97px;
				}
			}

			p {
				font-size: 16.34px;
				font-weight: 500;
				line-height: 22.32px;

				${maxQuery('sm')} {
					font-size: 9.27px;
					font-weight: 500;
					line-height: 11.13px;
				}
			}

			hr {
				border: 1.17px solid #313337;
			}

			> div:first-child {
				/* className="flex justify-between items-center" */
				display: flex;
				justify-content: space-between;
				align-items: center;

				> div {
					/* className="flex flex-col items-start max-md:gap-1" */
					display: flex;
					flex-direction: column;
					align-items: flex-start;

					${maxQuery('md')} {
						gap: 0.25rem;
					}

					> div {
						/* className="flex items-center md:gap-1" */
						display: flex;
						align-items: center;
						gap: 0.25rem;

						h6 {
							font-size: 21.01px;
							line-height: 28.7px;
							white-space: nowrap;

							${maxQuery('sm')} {
								font-size: 9.96px;
								font-weight: 500;
								line-height: 11.95px;
							}
						}
					}
				}
			}

			> div:nth-child(2) {
				/* className="flex max-lg:flex-col gap-3 lg:gap-8" */
				display: flex;
				flex-direction: row;
				gap: 2rem;

				${maxQuery('lg')} {
					flex-direction: column;
					gap: 1rem;
				}

				svg {
					height: 2rem;
					width: 2rem;

					${maxQuery('md')} {
						height: 1rem;
						width: 1rem;
					}
				}

				.stacked-avatar {
					/* position: relative; */
					/* flex items-center  */
					display: flex;
					align-items: center;

					> svg {
						width: 25px;
						height: 25px;
						margin-right: -0.75rem;
					}
				}
			}
		}

		.bottom-dets {
			display: flex;
			align-items: center;
			gap: 2rem;
			margin-top: 0.5rem;

			${maxQuery('lg')} {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 0.5rem;
			}
		}

		.cursor {
			position: absolute;
			bottom: -38%;
			right: -8%;

			${maxQuery('xl')} {
				position: absolute;
				bottom: -38%;
				right: -6%;
			}
			${maxQuery('lg')} {
				position: absolute;
				bottom: -10%;
				right: -2%;
				width: 80px;
			}

			${maxQuery('md')} {
				position: absolute;
				bottom: -18%;
				right: -4%;
			}
			${maxQuery('sm')} {
				position: absolute;
				bottom: -22%;
				right: -8%;
			}
		}
	}
`;
