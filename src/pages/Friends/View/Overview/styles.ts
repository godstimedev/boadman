import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	${maxQuery('md')} {
		gap: 2rem;
	}

	> div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		${maxQuery('xl')} {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
			gap: 1rem;
		}
	}

	h6 {
		font-size: 20px;
		font-weight: 500;
		line-height: 26.4px;
	}

	.about {
		background-color: ${({ theme }) => theme.colors.accent500};
		padding: 1.2rem 1rem;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		p {
			color: ${({ theme }) => theme.colors.accent200};
			font-size: 14px;
			font-weight: 400;
			line-height: 18.48px;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			${maxQuery('md')} {
				flex-direction: column;
				gap: 1rem;
				align-items: start;
			}

			> div:first-child {
				display: flex;
				align-items: center;
				gap: 1rem;

				> div {
					display: flex;
					align-items: center;
					gap: 0.45rem;

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
							color: white;
						}
					}
				}
			}

			> .socials {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				> span {
					padding: 0.5rem 0.5rem;
					border-radius: 4px;
					background-color: ${({ theme }) => theme.colors.secondary500};
					cursor: pointer;
				}
			}
		}
	}

	> div:last-child {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
			gap: 1rem;

			.games-card {
				display: flex;
				flex-direction: column;
				background-color: ${({ theme }) => theme.colors.accent500};
				width: 100%;
				border-radius: 5px;

				h6 {
					font-size: 16px;
					font-weight: 500;
					line-height: 19.2px;
				}

				span {
					font-size: 12px;
					font-weight: 400;
					line-height: 14.4px;

					color: ${({ theme }) => theme.colors.accent200};
				}

				hr {
					border: 1px solid ${({ theme }) => theme.colors.accent100};
				}

				> div:first-child {
					display: flex;
					justify-content: space-between;
					align-items: start;
					padding: 1rem;

					> div {
						display: flex;
						align-items: center;
						gap: 1rem;

						.img-con {
							width: 48px;
							height: 48px;
							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
								border-radius: 5px;
							}
						}

						> div {
							display: flex;
							flex-direction: column;
							gap: 0.5rem;
						}
					}
				}

				> div:last-child {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 1rem;

					p {
						font-size: 14px;
						font-weight: 500;
						line-height: 16.8px;
					}

					svg {
						width: 18px;
						height: 18px;
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
