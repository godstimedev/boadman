import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
	gap: 1rem;

	.team-card {
		display: flex;
		flex-direction: column;
		background-color: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;
		width: 100%;
		cursor: pointer;

		hr {
			border: 1px solid #313337;
		}
		span {
			font-size: 12px;
			font-weight: 400;
			line-height: 14.4px;
			color: ${({ theme }) => theme.colors.accent200};
		}

		> div:first-child {
			display: flex;
			justify-content: space-between;
			padding: 1rem;
			> div:first-child {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				.img-con {
					width: 28px;
					height: 28px;

					img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
						object-fit: cover;
					}
				}

				> div:last-child {
					display: flex;
					flex-direction: column;
					gap: 0.65rem;

					p {
						font-size: 16px;
						font-weight: 500;
						line-height: 19.2px;
					}
				}
			}
		}

		> div:last-child {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> div {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 0.5rem;

					.img-con {
						width: 11px;
						height: 11px;

						img {
							width: 100%;
							height: 100%;
							border-radius: 50%;
							object-fit: cover;
						}
					}

					p {
						font-size: 12px;
						font-weight: 500;
						line-height: 14.4px;
					}
				}
			}

			> div:last-child {
				display: flex;
				align-items: center;

				> img {
					width: 22px;
					height: 22px;
					border-radius: 50%;
					object-fit: cover;
					border: 1px solid #22252c;
				}

				> img:not(:first-child) {
					margin-left: -8px;
				}

				p {
					font-size: 14px;
					font-weight: 400;
					line-height: 16.8px;
					margin-left: 0.5rem;
				}
			}
		}
	}
`;
