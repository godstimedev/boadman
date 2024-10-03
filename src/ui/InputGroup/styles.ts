import styled, { css } from 'styled-components';
import { StyledInputContainerPropType } from './types';

export const StyledInputContainer = styled.div<StyledInputContainerPropType>`
	width: 100%;

	&.success {
		.info-con {
			color: ${({ theme }) => theme.colors.success500};

			display: none !important;

			svg rect {
				fill: ${({ theme }) => theme.colors.success500};
			}
		}
		.input-group {
			svg.checkmark {
				display: block;
			}
			svg {
				display: none;
			}
		}
	}
	&.error {
		input {
			outline: 2px solid ${({ theme }) => theme.colors.error500};
		}

		.info-con {
			color: ${({ theme }) => theme.colors.error500};

			svg rect {
				fill: ${({ theme }) => theme.colors.error500};
			}
		}
	}

	label {
		color: ${({ theme }) => theme.colors.white};

		font-size: 0.75rem;
		line-height: 120%;
		display: block;
		font-weight: 600;
		letter-spacing: 0.02em;
		margin-bottom: 0.5rem;

		span {
			color: ${({ theme }) => theme.colors.error500};
		}
	}

	.input-group {
		position: relative;

		&.phone-group {
			.input-icon > svg {
				right: unset;
				left: 93px;
			}
			.country-code {
				font-size: 0.875rem;
				line-height: 120%;
				position: absolute;
				left: 50px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		&.checkbox-container {
			--size: 0.75rem;

			display: flex;
			align-items: center;
			gap: 1rem;
			position: relative;
			width: fit-content;

			&:focus-within .custom-checkbox {
				box-shadow: 0 0 0 1.5px #fff, 0 0 0 3px ${({ theme }) => theme.colors.primary600};
			}
			&.error .custom-checkbox {
				border-color: ${({ theme }) => theme.colors.error500};
			}
			.custom-checkbox {
				background: ${({ theme }) => theme.colors.neutral50};
				/* background: transparent; */
				border: 1.66667px solid ${({ theme }) => theme.colors.neutral400};

				flex-shrink: 0;
				width: var(--size);
				height: var(--size);
				cursor: pointer;
				border-radius: 0.125rem;
				position: relative;

				&.checked {
					border-color: ${({ theme }) => theme.colors.primary500};

					div {
						background: ${({ theme }) => theme.colors.primary500};

						position: absolute;
						border-radius: 1px;
						border: 1px solid #fff;
						inset: 0;
					}
				}
			}
			input {
				width: var(--size);
				height: var(--size);
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				opacity: 0;
				pointer-events: none;
				padding: 0;
			}
			label {
				font-size: 0.875rem;
				line-height: 120%;
				margin-bottom: 0;
				cursor: pointer;
			}
		}
		&.code-group {
			display: flex;
			gap: 0.5rem;

			input {
				font-size: 1.5rem;
				width: 2.875rem;
				flex: 1;
				text-align: center;
				font-family: inherit;
			}

			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
			input[type='number'] {
				-moz-appearance: textfield;
				appearance: textfield;
			}
		}
		&.advanced-group {
			background: ${({ theme }) => theme.colors.neutral50};

			border-radius: 0.75rem;

			&:focus-within {
				outline: 2px solid ${({ theme }) => theme.colors.primary500};
			}

			input {
				outline: none;
			}
		}
		&:focus-within {
			.dropdown {
				display: block;
			}
		}
		.input-icon {
			position: relative;
		}

		.input-icon > svg {
			position: absolute;
			top: 50%;
			right: 1rem;
			transform: translateY(-50%);

			&.password-control {
				cursor: pointer;
			}
		}
		.prop-icon {
			position: absolute;
			top: 50%;
			right: 1rem;
			transform: translateY(-50%);
			display: flex;
			align-items: center;

			${({ $posLeft }) =>
				$posLeft === true &&
				css`
					left: 1rem;
					right: unset;
				`}
		}

		.select-advanced-values {
			background: ${({ theme }) => theme.colors.neutral50};

			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
			border-radius: 0.75rem;
			padding: 0.75rem 1rem 0;

			div {
				background: ${({ theme }) => theme.colors.primary50};

				font-size: 0.875rem;
				line-height: 120%;
				display: flex;
				gap: 0.125rem;
				align-items: center;
				padding: 0 0.375rem;
				border-radius: 0.25rem;

				span {
					display: flex;
					align-items: center;
					width: 1rem;
					height: 1rem;
					background: inherit;
					cursor: pointer;
				}
			}
		}
	}
	svg.checkmark {
		display: none;
	}
	.search-input-group {
		position: relative;

		${({ $posLeft }) =>
			$posLeft === true &&
			css`
				padding-right: 0;
			`}

		${({ $posLeft }) =>
			$posLeft === false &&
			css`
				padding-right: 3rem;
			`}

		input {
			outline: none;

			&:focus {
				outline: none;
			}
		}

		.search-icon {
			position: absolute;
			top: 50%;
			right: 0rem;
			transform: translateY(-50%);
			display: flex;
			align-items: center;

			${({ $posLeft }) =>
				$posLeft === true &&
				css`
					left: 0rem;
					right: unset;
				`}
		}
	}

	input,
	textarea {
		background: ${({ theme }) => theme.colors.neutral50};
		/* background: transparent; */

		caret-color: ${({ theme }) => theme.colors.primary500};

		border: none;
		border-radius: 5px;
		padding: 0.75rem 1rem;
		width: 100%;
		color: ${({ theme }) => theme.colors.white};

		&::placeholder {
			color: ${({ theme }) => theme.colors.white};
		}

		outline: 2px solid ${({ theme }) => theme.colors.neutral100};

		&:focus {
			outline: 2px solid ${({ theme }) => theme.colors.primary500};
		}

		${({ $posLeft }) =>
			$posLeft === true &&
			css`
				padding-left: 2.75rem;
			`}
	}
	textarea {
		resize: vertical;
		padding: 0.75rem 1rem;
	}
	.info-con {
		color: ${({ theme }) => theme.colors.neutral500};

		font-size: 0.75rem;
		line-height: 120%;
		display: none;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;

		&.active {
			display: flex;
		}
	}
	.PhoneInput {
		gap: 1rem;
	}
	.PhoneInputCountry {
		background: ${({ theme }) => theme.colors.neutral50};

		outline: 2px solid ${({ theme }) => theme.colors.neutral100};
		width: 100px;
		padding: 0.75rem 1rem;
		border-radius: 5px;

		color: ${({ theme }) => theme.colors.black};
	}
	.PhoneInputCountrySelectArrow {
		display: none;
	}
	.dropdown {
		background: ${({ theme }) => theme.colors.neutral50};
		box-shadow: 0 0 8px ${({ theme }) => theme.colors.neutral50};

		overflow: auto;
		border-radius: 0.25rem;
		position: absolute;
		left: 0;
		width: 100%;
		z-index: 9;
		display: none;
		max-height: 270px;
		bottom: calc(100% + 0.5rem);

		${({ $dropdownPosBottom }) =>
			$dropdownPosBottom &&
			css`
				top: calc(100% + 0.5rem);
				bottom: unset;
			`}

		&.select-advanced-type {
			border-radius: 0.5rem;
			padding: 0.5rem 0.75rem;

			span {
				color: ${({ theme }) => theme.colors.neutral50};

				font-size: 0.625rem;
				line-height: 120%;
				display: block;
				font-weight: 700;
				letter-spacing: 0.05rem;
				text-transform: uppercase;
				margin-bottom: 0.75rem;
			}

			ul {
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
			}
			li {
				border: 1px solid ${({ theme }) => theme.colors.neutral200};

				font-size: 0.75rem;
				line-height: 120%;
				border-radius: 2em;

				&.active {
					background-color: ${({ theme }) => theme.colors.primary50};
				}
			}
		}

		.other-option-con {
			li {
				border-top: 2px solid ${({ theme }) => theme.colors.neutral100};

				padding: 0.725rem 1rem;
			}
			input {
				outline: 2px solid ${({ theme }) => theme.colors.neutral300};

				display: none;
				background: #fff;

				&:focus {
					outline: 2px solid ${({ theme }) => theme.colors.primary500};
				}
			}
			&.active,
			&:active,
			&:focus,
			&:focus-within {
				input {
					display: block;
					margin: 0.75rem 0.5rem 0;
					border-radius: 0.25rem;
				}
			}
		}

		li {
			font-size: 0.875rem;
			line-height: 120%;
			cursor: pointer;
			outline: none;
			padding: 0.625rem 1rem;

			&:hover,
			&:focus {
				background: ${({ theme }) => theme.colors.neutral50};
			}
		}
	}
`;
