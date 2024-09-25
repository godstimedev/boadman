import styled, { keyframes } from 'styled-components';
import { maxQuery, minQuery } from '../../utilities';

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
const grow = keyframes`
	0%{
		width: 3rem;
		height: 3rem;
	}
	50% {
		width: 2rem;
		height: 2rem;
	}
    100% {
		width: 3rem;
		height: 3rem;
    }
`;

export const StyledTable = styled.section`
	border: 1px solid ${({ theme }) => theme.colors.neutral100};

	overflow: hidden;
	border-radius: 0.75rem;
	position: relative;

	.table-container {
		overflow: auto;
		min-height: 300px;
	}

	table {
		font-size: 0.875rem;
		line-height: 120%;
		width: 100%;
		min-width: max-content;
		border-collapse: collapse;

		${minQuery('300px')} {
			> * > tr > *:first-child {
				left: 0;
				position: sticky;
			}
		}

		thead {
			color: ${({ theme }) => theme.colors.neutral500};

			font-size: 0.85rem;
			line-height: 120%;

			th {
				background-color: ${({ theme }) => theme.colors.neutral50};

				font-weight: 600;
				text-align: inherit;
				padding: 0.875rem 1rem;
			}
		}

		tbody {
			tr:nth-child(even) td {
				background-color: ${({ theme }) => theme.colors.neutral50};
			}

			td {
				background-color: ${({ theme }) => theme.colors.secondary500};

				font-weight: 500;
				padding: 0.75rem 1rem;
			}
		}
	}
	.loading-container {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 10;
		background: rgba(255, 255, 255, 0.7);

		div {
			--size: 3.5rem;

			width: 3rem;
			height: 3rem;
			animation: ${rotate} 0.6s infinite linear, ${grow} 1.2s infinite linear;
			position: relative;

			span {
				--size: 0.7rem;
				background-color: ${({ theme }) => theme.colors.white};

				position: absolute;
				display: block;
				border-radius: 50%;
				width: var(--size);
				height: var(--size);
				box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

				&:nth-child(1) {
					background-color: ${({ theme }) => theme.colors.primary500};

					top: 0;
					left: 50%;
					transform: translateX(-50%);
				}
				&:nth-child(2) {
					top: 50%;
					right: 0;
					transform: translateY(-50%);
				}
				&:nth-child(3) {
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
				}
				&:nth-child(4) {
					top: 50%;
					left: 0;
					transform: translateY(-50%);
				}
			}
		}
	}

	.table-footer {
		font-size: 0.875rem;
		line-height: 120%;
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		flex-wrap: wrap;
		gap: 1em;

		> div {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			${maxQuery('sm')} {
				:last-child {
					display: none;
				}
			}
		}

		.input-container {
			border: 1px solid ${({ theme }) => theme.colors.neutral100};

			font-size: 0.875rem;
			line-height: 120%;
			border-radius: 0.25rem;
			position: relative;
			padding: 0.125rem 0.75rem;
			min-width: 2rem;
			height: 2rem;
			margin: 0;

			span {
				visibility: hidden;
			}
			input {
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				width: 100%;
				outline: none;
				font-weight: 600;
				padding-left: 0.75rem;
				border: none;
				background: transparent;
				min-width: 2rem;

				&::-webkit-outer-spin-button,
				&::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
				}

				&[type='number'] {
					-moz-appearance: textfield;
					appearance: textfield;
				}
			}
		}
		.action-container button {
			border: 1px solid ${({ theme }) => theme.colors.neutral100};
			color: ${({ theme }) => theme.colors.neutral600};

			font-size: 0.875rem;
			line-height: 120%;
			font-weight: 600;
			background-color: #fff;
			border-radius: 0.25rem;

			&:hover,
			&:focus {
				border: 1px solid ${({ theme }) => theme.colors.neutral500};
			}
			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}

			a,
			span {
				color: inherit;
				text-decoration: none;
				padding: 0.125rem 1rem;
			}
		}
		.select-container {
			border: 1px solid ${({ theme }) => theme.colors.neutral100};

			font-size: 0.875rem;
			line-height: 120%;
			position: relative;
			font-weight: 600;
			border-radius: 0.25rem;
			padding: 0.125rem 0.75rem;
			min-width: 3.5rem;
			height: 2rem;
			margin: 0;
			display: flex;
			align-items: center;
			cursor: pointer;

			&:focus,
			&:focus-within {
				ul {
					display: block;
				}
			}

			svg {
				position: absolute;
				top: 50%;
				right: 0.5rem;
				transform: translateY(-50%);
				width: 1rem;
				height: 1rem;
			}
			ul {
				background: ${({ theme }) => theme.colors.white};
				box-shadow: 0 0 8px ${({ theme }) => theme.colors.neutral200};

				display: none;
				overflow: auto;
				border-radius: 0.25rem;
				position: absolute;
				left: 50%;
				min-width: 100%;
				z-index: 3;
				max-height: 300px;
				bottom: calc(100% + 0.5rem);
				transform: translateX(-50%);

				li {
					cursor: pointer;
					outline: none;
					font-size: inherit;
					padding: 0.125rem 1rem;

					&:hover,
					&:focus {
						background: ${({ theme }) => theme.colors.neutral50};
					}
				}
			}
		}
	}
`;
