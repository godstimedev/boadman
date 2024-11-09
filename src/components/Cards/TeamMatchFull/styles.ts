import styled from 'styled-components';

export const Container = styled.div`
	min-width: max-content;
	width: 100%;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	white-space: nowrap;
	background-color: ${({ theme }) => theme.colors.accent500};
	border-radius: 5px;

	span {
		font-size: 10px;
		font-weight: 400;
		line-height: 13.2px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	> div:first-child {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		.icon-con {
			background-color: ${({ theme }) => theme.colors.accent100};
			padding: 0.5rem;
			border-radius: 50%;
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
		}
	}

	.mode,
	.prize {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;

		p {
			font-size: 12px;
			font-weight: 500;
			line-height: 14.4px;
		}
	}

	> .team {
		display: flex;
		align-items: center;
		gap: 1rem;

		&:last-child {
			flex-direction: row-reverse;
		}

		.img-con {
			width: 32px;
			height: 32px;

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

			gap: 0.5rem;

			p {
				font-size: 14px;
				font-weight: 500;
				line-height: 16.8px;
			}

			> div {
				display: flex;
				align-items: center;

				img {
					width: 16px;
					height: 16px;
					border-radius: 50%;
					object-fit: cover;
					border: 1px solid #22252c;
				}

				img:not(:first-child) {
					margin-left: -0.3rem;
				}
			}
		}
	}

	.versus {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;

		h6 {
			font-size: 16px;
			font-weight: 500;
			line-height: 19.2px;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> span {
				color: ${({ theme }) => theme.colors.accent200};
				font-size: 16px;
				font-weight: 500;
				line-height: 19.2px;
			}

			h6 {
				font-size: 16px;
				font-weight: 500;
				line-height: 19.2px;
				color: ${({ theme }) => theme.colors.accent200};

				&.active {
					color: white;
				}
			}
		}
	}
`;
