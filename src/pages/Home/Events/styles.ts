import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 4rem 0rem;

	.heading {
		text-align: center;
		margin: 2rem 0;
		padding: 0 1.5rem;
	}

	.event-card-wrapper {
		width: 677px;
		height: 427px;
		padding: 0.8rem;
		border-radius: 1rem;
		border: 1.23px solid;
		border-image-source: linear-gradient(180deg, #ff5733 -45.22%, rgba(239, 202, 188, 0.1) 27.78%);
		border-image-slice: 1; /* This tells the browser to use the entire gradient */
		background-clip: padding-box;
		scale: 0.85;
		transition: scale 0.3s ease-in-out;

		${minQuery('xl')} {
			margin-left: 23rem;
			/* gives center effect on mobile*/
		}

		${maxQuery('md')} {
			width: 285px;
			height: 195px;
			padding: 0.4rem;
			/* margin: 0 8rem; */
			scale: 1;
			margin-left: 4.15rem;
			/* gives center effect on mobile*/
		}
		${maxQuery('360px')} {
			width: 285px;
			height: 195px;
			padding: 0.4rem;
			/* margin: 0 8rem; */
			scale: 1;
			margin-left: 2rem;
			/* gives center effect on mobile*/
		}
	}

	.event-card-wrapper:hover {
		scale: 1;
		transition: scale 0.3s ease-in-out;
		cursor: grab;
	}

	.event-card {
		position: relative;
		width: 100%;
		height: 100%;
		background: linear-gradient(0.77deg, rgba(0, 0, 0, 0.4) 13.87%, rgba(102, 102, 102, 0) 94.38%);
		padding: 1rem;

		${maxQuery('md')} {
			padding: 0.4rem;
		}

		img {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			object-fit: cover;
			z-index: -10;
			width: 100%;
			height: 100%;
			border-radius: 0.5rem;
		}

		.event-card-content {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text-align: left;

			.badge {
				> span {
					background-color: ${({ theme }) => theme.colors.secondary500};

					padding: 0.5rem 0.8rem;
					border-radius: 1rem;
					font-size: 12px;

					${maxQuery('md')} {
						padding: 0.3rem 0.5rem;
						border-radius: 1rem;
						font-size: 5.66px;
					}
				}
			}

			.about {
				position: relative;
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				padding-bottom: 1rem;

				h5 {
					${maxQuery('md')} {
						font-size: 18.1px;
						line-height: 23.89px;
					}
				}

				${maxQuery('md')} {
					gap: 0.2rem;
					padding-bottom: 0.2rem;
				}

				> div {
					display: flex;
					align-items: center;
					gap: 2rem;

					${maxQuery('md')} {
						gap: 1.5rem;
					}

					div {
						display: flex;
						flex-direction: column;
						gap: 0.3rem;

						> span:first-child {
							font-size: 12.33px;
							line-height: 16.27px;

							${maxQuery('md')} {
								font-size: 5.66px;
								line-height: 7.47px;
							}
						}
						> span:last-child {
							font-size: 14.79px;
							line-height: 19.53px;
							font-weight: 500;

							${maxQuery('md')} {
								font-size: 6.79px;
								line-height: 8.96px;
							}
						}
					}
				}
			}

			.about::before {
				content: '';
				position: absolute;
				top: -0.5rem;
				left: -1rem;
				width: 50%;
				border-top: 1.23px solid #313337;

				${maxQuery('md')} {
					top: -0.3rem;
					left: -0.5rem;
				}
			}
		}
	}
`;
