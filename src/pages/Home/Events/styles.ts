import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 2rem 0rem 4rem 0rem;

	${maxQuery('md')} {
		padding: 1rem 0rem 2rem 0rem;
	}

	.heading {
		text-align: center;
		margin: 2rem 0;
		padding: 0 1.5rem;
	}

	.event-card-wrapper {
		max-width: 677px;
		width: 100%;
		height: 427px;
		padding: 0.8rem;
		border-radius: 1rem;
		border: 1.23px solid;
		border-image-source: linear-gradient(180deg, #ff5733 -45.22%, rgba(239, 202, 188, 0.1) 27.78%);
		border-image-slice: 1; /* This tells the browser to use the entire gradient */
		background-clip: padding-box;

		${maxQuery('xl')} {
			height: 355px;
			padding: 0.4rem;
		}
		${maxQuery('lg')} {
			height: 255px;
			padding: 0.4rem;
		}
		${maxQuery('md')} {
			height: 195px;
			padding: 0.4rem;
		}
	}

	.swiper-slide-active {
		transform: scale(1) !important;
		transition: transform 0.3s ease !important;
	}

	.swiper-slide {
		cursor: grab;
		transform: scale(0.8);
		transition: transform 0.3s ease;
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
					font-size: 12.33px;
					font-weight: 400;
					line-height: 14.79px;

					${maxQuery('md')} {
						padding: 0.3rem 0.5rem;
						border-radius: 1rem;
						font-size: 5.66px;
						line-height: 6.79px;
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
					${maxQuery('lg')} {
						font-size: 18.1px;
						line-height: 23.89px;
					}
				}

				${maxQuery('lg')} {
					gap: 0.2rem;
					padding-bottom: 0.2rem;
				}

				> div {
					display: flex;
					align-items: center;
					gap: 2rem;

					${maxQuery('lg')} {
						gap: 1.5rem;
					}

					div {
						display: flex;
						flex-direction: column;
						gap: 0.3rem;

						> span:first-child {
							font-size: 12.33px;
							line-height: 16.27px;

							${maxQuery('lg')} {
								font-size: 5.66px;
								line-height: 7.47px;
							}
						}
						> span:last-child {
							font-size: 14.79px;
							line-height: 19.53px;
							font-weight: 500;

							${maxQuery('lg')} {
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
