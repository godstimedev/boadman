import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	> form {
		border: 1px solid ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;

		> div:first-child {
			background-color: ${({ theme }) => theme.colors.accent500};
			padding: 1rem 1.45rem 2rem;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			${maxQuery('md')} {
				padding: 1rem 1rem 2rem;
			}

			> div:first-child {
				display: flex;
				align-items: start;
				justify-content: space-between;

				${maxQuery('sm')} {
					flex-direction: column-reverse;
					gap: 1rem;
				}

				> div:first-child {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;

					span {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
					}
				}
				> div:last-child {
					display: flex;
					align-items: center;
					padding: 0.5rem 1rem;
					gap: 0.5rem;
					background-color: ${({ theme }) => theme.colors.accent100};
					border-radius: 5px;

					${maxQuery('md')} {
						padding: 0.5rem 0.5rem;
						margin-left: auto;
					}

					> span {
						font-size: 14px;
						font-weight: 500;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
					}
				}
			}

			h5 {
				font-size: 20px;
				font-weight: 500;
				line-height: 26.4px;
			}

			.input-con {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				width: 45%;

				${maxQuery('md')} {
					width: 100%;
				}
			}

			.verification-upload-con {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;

				h6 {
					font-size: 18px;
					font-weight: 500;
					line-height: 23.76px;
				}

				.samples {
					display: flex;
					align-items: center;
					gap: 1.5rem;

					${maxQuery('md')} {
						flex-wrap: wrap;
					}

					${maxQuery('sm')} {
						flex-direction: column;
						gap: 1rem;
					}

					div {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 0.35rem;

						P {
							font-size: 14px;
							font-weight: 500;
							line-height: 18.48px;
						}
					}
				}

				> ul {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					li {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
					}
				}

				.verification-upload {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					> div {
						${maxQuery('sm')} {
							flex-direction: column;
							gap: 1rem;
						}
					}

					h6 {
						font-size: 14px;
						font-weight: 500;
						line-height: 18.48px;
					}

					> div {
						display: flex;
						align-items: center;
						gap: 1rem;
					}
				}
			}

			.img-con {
				width: 313px;
				height: 202px;
				background-color: ${({ theme }) => theme.colors.secondary500};
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 5px;
				border: 1px dashed ${({ theme }) => theme.colors.primary500};

				.no-img {
					/* position: absolute;
					inset: 0;
					z-index: 100; */
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				> img {
					width: 100%;
					height: max-content;
					max-height: 100%;
					object-fit: cover;
				}
			}
		}

		> div:last-child {
			padding: 1rem;

			> button {
				margin-left: auto;
			}
		}
	}
`;
