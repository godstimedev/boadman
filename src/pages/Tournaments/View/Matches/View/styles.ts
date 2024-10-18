import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 3rem;

	> div:first-child {
		text-align: center;
		h5 {
			font-size: 24px;
			font-weight: 500;
			line-height: 28.8px;
		}

		span {
			font-size: 16px;
			font-weight: 500;
			line-height: 19.2px;
			color: ${({ theme }) => theme.colors.accent200};
		}
	}

	> div:last-child {
		display: flex;
		justify-content: space-between;
		gap: 4rem;

		> div:not(:nth-child(2)) {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		.team-a,
		.team-b {
			> div {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				img {
					border-radius: 50%;
					width: 32px;
					height: 32px;
					object-fit: cover;
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					h6 {
						font-size: 20px;
						font-weight: 500;
						line-height: 24px;
					}

					span {
						font-size: 12px;
						font-weight: 400;
						line-height: 14.4px;
						color: ${({ theme }) => theme.colors.accent200};
					}
				}
			}
		}

		.team-a {
			display: flex;
			justify-content: right;
		}

		.team-b {
			display: flex;
			justify-content: left;

			> div {
				display: flex;
				flex-direction: row-reverse;
			}
		}

		.team-members {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> div {
				background-color: ${({ theme }) => theme.colors.accent100};
				padding: 0.75rem 1rem;
				border-radius: 5px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 5rem;

				> div {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					img {
						width: 28px;
						height: 28px;
						border-radius: 50%;
						object-fit: cover;
					}

					> div {
						display: flex;
						flex-direction: column;
						gap: 0.35rem;

						p {
							font-size: 14px;
							font-weight: 500;
							line-height: 16.8px;
						}

						span {
							font-size: 12px;
							font-weight: 400;
							line-height: 14.4px;
							color: ${({ theme }) => theme.colors.accent200};
						}
					}
				}
			}
		}

		> div:nth-child(2) {
			display: flex;
			flex-direction: column;
			align-items: center;

			> span {
				font-size: 20px;
				font-weight: 500;
				line-height: 24px;
				color: ${({ theme }) => theme.colors.accent200};
				margin: 0.85rem auto;
			}

			h4 {
				font-size: 48px;
				font-weight: 500;
				line-height: 57.61px;
				margin: 1rem auto;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				align-items: center;
				margin-top: 2rem;

				span {
					font-size: 16px;
					font-weight: 500;
					line-height: 19.2px;
					color: ${({ theme }) => theme.colors.accent200};
				}

				p {
					font-size: 16px;
					font-weight: 500;
					line-height: 19.2px;
				}

				button {
					margin-top: 0.5rem;
				}
			}
		}
	}
`;
