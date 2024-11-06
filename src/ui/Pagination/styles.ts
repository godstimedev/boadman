import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	font-size: 14px;
	line-height: 18.4px;
	display: flex;
	align-items: center;
	justify-content: center;
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
		/* border: 1px solid ${({ theme }) => theme.colors.neutral100}; */
		color: ${({ theme }) => theme.colors.white};
		/* padding: 0.125rem 1rem; */

		/* font-size: 0.875rem;
			line-height: 120%;
			font-weight: 600; */
		background-color: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 44px;

		/* &:hover,
			&:focus {
				border: 1px solid ${({ theme }) => theme.colors.neutral500};
			} */
		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		a,
		span {
			color: inherit;
			text-decoration: none;
			padding: 1.1rem 1rem;
		}
	}

	.page-numbers-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		button {
			a {
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 5px;
				/* padding: 1rem; */
				height: 44px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${({ theme }) => theme.colors.white};
				text-decoration: none;
			}

			.active {
				background-color: ${({ theme }) => theme.colors.primary500};
			}
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
`;
