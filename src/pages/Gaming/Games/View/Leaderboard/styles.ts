import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	.leaderboard-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 1rem;
		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px 5px 0 0;

		${maxQuery('sm')} {
			flex-direction: column;
			align-items: normal;
			gap: 1rem;
		}

		h6 {
			font-size: 20px;
			line-height: 26.4px;
			font-weight: 400;
			text-align: left;
		}

		button {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			${maxQuery('sm')} {
				text-align: right;
				align-self: flex-end;
			}

			span {
				font-size: 14px;
				line-height: 18.48px;
				font-weight: 400;
			}
		}
	}

	.action-bar {
		background-color: ${({ theme }) => theme.colors.accent400};
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 2rem;
		/* justify-content: space-between; */
		/* flex-wrap: wrap; */

		${maxQuery('md')} {
			padding: 0.8rem 0.5rem;
			gap: 0.5rem;
			justify-content: space-between;
		}

		.dropdown {
			background-color: ${({ theme }) => theme.colors.secondary500};
			display: flex;
			align-items: center;
			gap: 1.2rem;
			padding: 0.85rem 1rem;
			border-radius: 5px;
			white-space: nowrap;
			font-size: 14px;
			font-weight: 400;
			line-height: 18.48px;

			${maxQuery('md')} {
				font-size: 10px;
				gap: 0.5rem;
				padding: 0.65rem 0.75rem;

				> svg {
					width: 10px;
				}
			}
		}
	}

	.rank {
		/* background-color: #c28c30; */
		> .gold,
		.silver,
		.bronze {
			width: 3.75rem;
			height: 2.5rem;
			display: flex;
			align-items: center;
			gap: 0.3rem;
			padding: 0 0 0 0.75rem;
			justify-content: start;
			border-radius: 0 5px 5px 0;
			${maxQuery('md')} {
				width: 3rem;
				padding: 0 0 0 0.5rem;
			}
		}

		.gold {
			background-color: #c28c30;
		}

		.silver {
			background-color: #9b9b9b;
		}

		.bronze {
			background-color: #482c0c;
		}

		span {
			display: none;

			${maxQuery('md')} {
				display: block;
				font-weight: bold;
			}
		}
	}

	.rank-number {
		${maxQuery('md')} {
			display: none;
			font-weight: bold;
		}
	}

	.rank-head-1 {
		${minQuery('md')} {
			display: none;
		}
	}
	.rank-head-2 {
		${maxQuery('md')} {
			display: none;
		}
	}

	.player {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		${maxQuery('md')} {
			gap: 0.5rem;
		}

		img {
			border-radius: 100%;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0rem;

			span {
				color: ${({ theme }) => theme.colors.accent200};
			}
		}
	}
	.win-ratio {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		> div {
			span:first-child {
				background-color: #008080;
				padding: 0.2rem 0.5rem;
			}
			span:last-child {
				background-color: #171a23;
				padding: 0.2rem 0.5rem;
			}
		}
	}

	.most-agent {
		display: flex;
		align-items: center;
		gap: -5rem;
		img {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 100%;
			border: 1px solid ${({ theme }) => theme.colors.accent500};

			&:not(:first-child) {
				margin-left: -0.5rem;
			}
		}
	}
`;
