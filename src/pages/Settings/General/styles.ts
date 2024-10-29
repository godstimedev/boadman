import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	form {
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

			h5 {
				font-size: 20px;
				font-weight: 500;
				line-height: 26.4px;
			}

			> div {
				display: flex;
				gap: 4rem;

				${maxQuery('lg')} {
					gap: 3rem;
				}
				${maxQuery('md')} {
					flex-direction: column;
					gap: 2rem;
				}

				.input-con {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					flex: 1.1;

					.dob {
						display: flex;
						align-items: end;
						gap: 1rem;

						${maxQuery('md')} {
							gap: 0.5rem;
						}
					}
				}

				.avatar-con {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					justify-content: space-between;
					flex: 0.9;

					h6 {
						font-size: 16px;
						font-weight: 500;
						line-height: 21.12px;
					}

					> div:first-child {
						display: flex;
						flex-direction: column;
						gap: 1.5rem;

						> div {
							display: flex;
							align-items: end;
							gap: 2rem;
							justify-content: space-between;

							.img-con {
								width: 94px;
								height: 94px;

								img {
									width: 100%;
									height: 100%;
									border-radius: 50%;
									object-fit: cover;
								}

								.no-img {
									width: 100%;
									height: 100%;
									border-radius: 50%;
									background-color: #d9d9d9;
								}
							}

							> div:last-child {
								display: flex;
								flex-direction: column;
								gap: 1rem;

								p {
									font-size: 12px;
									font-weight: 400;
									line-height: 15.84px;
								}

								.avatar-upload {
									background-color: ${({ theme }) => theme.colors.accent100};
									padding: 0.75rem 0rem;
									border-radius: 4px;
									width: 170px;

									font-size: 14px;
									font-weight: 500;
									line-height: 18.48px;
								}

								.upload-info {
									display: flex;
									flex-direction: column;
									gap: 0.5rem;
								}
							}
						}
					}

					> div:last-child {
						display: flex;
						flex-direction: column;
						gap: 1rem;
						background-color: ${({ theme }) => theme.colors.secondary500};
						border-radius: 5px;
						padding: 1.45rem 1.75rem 1.85rem;

						> div:first-child {
							display: flex;
							flex-direction: column;
							gap: 1rem;

							span {
								font-size: 12px;
								font-weight: 400;
								line-height: 15.84px;
								color: ${({ theme }) => theme.colors.accent200};
							}
						}

						.avatar-collection {
							display: flex;
							align-items: center;
							justify-content: space-between;
							gap: 1rem;
							flex-wrap: wrap;

							> button {
								width: 30px;
								height: 30px;
								> img {
									width: 100%;
									height: 100%;
									border-radius: 50%;
									object-fit: cover;
								}
							}
						}
					}
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
