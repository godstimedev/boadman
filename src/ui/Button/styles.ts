import styled, { css, keyframes } from 'styled-components';
import { StyledButtonProps } from './Button.types';

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`;

export const StyledButton = styled.button<StyledButtonProps>`
	font-size: 1rem;
	line-height: 120%;
	border-radius: 4px;
	min-height: 52px; // $size === large
	padding: 0.625rem 1.25rem; //$variant === primary
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	transition: all 0.2s ease-in-out;

	&:disabled {
		opacity: 0.3;
	}

	${({ $shadow }) =>
		$shadow &&
		css`
			box-shadow: 0px 8px 10px -6px #73e5bf33, 0px 1px 1px 0px #c5ffe7 inset,
				0px 8px 25px -5px #73e5bf33;
		`}

	/* Variant start */
	${({ $variant }) =>
		$variant === 'primary' &&
		css`
			background: ${({ theme }) => theme.colors.primary500};
			color: ${({ theme }) => theme.colors.primary50};

			&:hover {
				background: ${({ theme }) => theme.colors.primary700};
			}
			&:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
				background: ${({ theme }) => theme.colors.primary500};
			}
		`};
	${({ $variant }) =>
		$variant === 'secondary' &&
		css`
			color: ${({ theme }) => theme.colors.white};
			border: 1px solid ${({ theme }) => theme.colors.accent500};
			background: ${({ theme }) => theme.colors.accent500};

			&:hover {
				/* color: ${({ theme }) => theme.colors.primary800}; */
				border-color: ${({ theme }) => theme.colors.primary700};
				background: ${({ theme }) => theme.colors.primary700};
			}
			&:focus {
				color: ${({ theme }) => theme.colors.primary100};
				border-color: transparent;
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ $variant, $outline }) =>
		$variant === 'outline' &&
		$outline === 'secondary' &&
		css`
			color: ${({ theme }) => theme.colors.white};
			background: ${({ theme }) => theme.colors.accent500};
			border: 1px solid ${({ theme }) => theme.colors.white};

			&:hover {
				color: ${({ theme }) => theme.colors.primary500};
				border-color: ${({ theme }) => theme.colors.primary500};
				/* background: ${({ theme }) => theme.colors.primary700}; */
			}
			&:focus {
				color: ${({ theme }) => theme.colors.primary100};
				border-color: transparent;
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`}
	${({ $variant, $outline }) =>
		$variant === 'outline' &&
		$outline === 'primary' &&
		css`
			color: ${({ theme }) => theme.colors.primary500};
			background: ${({ theme }) => theme.colors.accent500};
			border: 1px solid ${({ theme }) => theme.colors.primary500};

			&:hover {
				color: ${({ theme }) => theme.colors.white};
				border-color: ${({ theme }) => theme.colors.white};
				background: ${({ theme }) => theme.colors.primary700};
			}
			&:focus {
				color: ${({ theme }) => theme.colors.primary100};
				border-color: transparent;
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ $variant }) =>
		$variant === 'subtle' &&
		css`
			background: ${({ theme }) => theme.colors.primary200};
			color: ${({ theme }) => theme.colors.primary700};

			&:hover {
				background: ${({ theme }) => theme.colors.primary300};
			}
			&:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
				background: ${({ theme }) => theme.colors.primary100};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ $variant }) =>
		$variant === 'text' &&
		css`
			color: ${({ theme }) => theme.colors.primary500};
			background: transparent;

			&:hover {
				color: ${({ theme }) => theme.colors.primary700};
			}
			&:focus {
				color: ${({ theme }) => theme.colors.primary300};
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}
		`};
	/* Variant end */

	/* Size start */
	${({ $size }) =>
		$size === 'medium' &&
		css`
			font-size: 0.875rem;
			line-height: 120%;
			min-height: 44px;
			padding: 0.5rem 1rem;
		`};
	${({ $size }) =>
		$size === 'small' &&
		css`
			font-size: 0.875rem;
			line-height: 120%;
			min-height: 36px;
			padding: 0.25rem 1rem;
		`};
	/* Size end */

	.spinner {
		animation: ${rotate} 1s infinite linear;

		${({ $variant }) =>
			$variant !== 'primary' &&
			css`
				path {
					stroke: ${({ theme }) => theme.colors.primary700};
				}
			`};

		${({ $size }) =>
			$size === 'medium' &&
			css`
				width: 17px;
			`};
		${({ $size }) =>
			$size === 'small' &&
			css`
				width: 14px;
			`};
	}
`;
