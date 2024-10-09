import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.65rem;
	background-color: ${({ theme }) => theme.colors.accent500};
	width: 100%;
	height: 138px;

	${maxQuery('lg')} {
		height: max-content;
	}

	span {
		font-size: 10px;
		line-height: 13.2px;
		color: ${({ theme }) => theme.colors.accent200};
	}
	p {
		font-size: 12px;
		line-height: 14.8px;
	}

	.status {
		display: flex;
		flex-direction: column;
		align-items: center;

		.img-con {
			width: 12px;
			height: 12px;

			img {
				width: 100%;
			}
		}

		.badge {
			background-color: ${({ theme }) => theme.colors.secondary500};
			padding: 0.3rem 0.5rem;
			border-radius: 17px;
			height: max-content;
			text-transform: capitalize;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 0.15rem;
		}

		.winner {
			font-size: 10px;
			line-height: 12px;
			font-weight: 500;
			color: ${({ theme }) => theme.colors.white} !important;
		}
	}

	.icon-con {
		padding: 0.5rem;
		background-color: ${({ theme }) => theme.colors.accent100};
		border-radius: 100%;
	}

	> div:first-child {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 1rem 1rem 0rem 1rem;

		${maxQuery('md')} {
			padding: 0.75rem 0.75rem 0rem 0.75rem;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 0.7rem;

			p {
				font-size: 14px;
				line-height: 18.48px;
				font-weight: 500;
			}
		}
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	> div:last-child {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.75rem;
		padding: 0rem 1rem 1rem 1rem;
		${maxQuery('md')} {
			padding: 0 0.75rem 0.75rem 0.75rem;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 0.65rem;

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}

			.player {
				display: flex;
				align-items: center;
				gap: 0.5rem;

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

			.img-con {
				width: 12px;
				height: 12px;

				img {
					width: 100%;
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

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
`;
