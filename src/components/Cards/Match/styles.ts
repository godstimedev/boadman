import styled from 'styled-components';

export const StyledMatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.accent500};
	width: 100%;
	height: max-content;
	border-radius: 4px;

	span {
		font-size: 10px;
		line-height: 13.2px;
		color: ${({ theme }) => theme.colors.accent200};
	}
	p {
		font-size: 12px;
		line-height: 14.48px;
	}

	> div:first-child {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.85rem 1rem;

		.icon-con {
			padding: 0.5rem;
			background-color: ${({ theme }) => theme.colors.accent100};
			border-radius: 100%;

			svg {
				width: 14px;
				height: 14px;
			}
		}

		.status {
			text-transform: uppercase;
		}

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 0.7rem;

			> div:last-child {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				gap: 0.5rem;
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.4rem;
		}
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	.middle,
	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.85rem 1rem;

		> div:first-child {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.65rem;

			> div {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				.img-con {
					width: 12px;
					height: 12px;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				p {
					color: white;

					&.active {
						color: ${({ theme }) => theme.colors.white};
					}

					&.inactive {
						color: ${({ theme }) => theme.colors.accent200};
					}
				}
			}
		}

		.scores {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.25rem;

			> span {
				font-size: 1rem;
				line-height: 21.12px;
				font-weight: 500;
				color: ${({ theme }) => theme.colors.accent200};

				&.active {
					color: ${({ theme }) => theme.colors.white};
				}
			}
		}

		.winner {
			display: flex;
			align-items: center;
			gap: 0.4rem;
			background-color: ${({ theme }) => theme.colors.secondary500};
			padding: 0.5rem 0.65rem;
			border-radius: 17px;

			> span {
				color: white;
				font-size: 8px;
				line-height: 10.56px;
			}
		}

		/* > div:last-child {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		} */
	}
`;
