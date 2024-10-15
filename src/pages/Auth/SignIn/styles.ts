import { AuthBackground } from '@/assets/images';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 0rem 1rem;
	background-image: url(${AuthBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top;

	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	.wrapper {
		background-color: ${({ theme }) => theme.colors.secondary500};
		border-radius: 10px;
		width: 546px;

		${maxQuery('md')} {
			width: 100%;
			max-width: 546px;
		}

		.content {
			padding: 4rem;
			text-align: center;

			${maxQuery('md')} {
				padding: 1.5rem;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				h3 {
					font-weight: 700;
				}
			}

			form {
				margin: 3rem 0;

				display: flex;
				flex-direction: column;
				gap: 2rem;

				.button {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					button {
						width: 100%;
					}

					p {
						color: ${({ theme }) => theme.colors.accent200};

						a {
							color: ${({ theme }) => theme.colors.white};

							text-decoration: underline;

							&:hover {
								color: ${({ theme }) => theme.colors.primary400};
							}
						}
					}
				}
			}
		}
	}
`;
