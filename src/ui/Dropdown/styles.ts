import styled, { css } from 'styled-components';
import { StyledDropdownProps } from './Dropdown.types';

export const StyledDropdown = styled.div<StyledDropdownProps>`
	position: relative;

	&:focus-within > div {
		opacity: 1;
		transform: translateY(0);
		z-index: 100;
		pointer-events: all;
	}

	&:focus-within {
		.caret {
			transform: rotate(180deg);
		}
	}

	> button {
		.caret {
			transform: rotate(0);
			transition: transform 0.3s ease-in;
		}
	}

	> div {
		position: absolute;
		width: 100%;
		min-width: max-content;
		display: flex;
		gap: 0.5rem;
		pointer-events: none;
		background-color: ${({ theme }) => theme.colors.accent500};
		border: 1px solid ${({ theme }) => theme.colors.accent100};
		border-radius: 5px;

		${({ $position }) =>
			$position === 'bottom' &&
			css`
				top: calc(100% + 0.5rem);
				left: 0;
				opacity: 0;
				transform: translateY(-1rem);
				transition: opacity 0.3s ease, transform 0.3s ease;
			`}

		${({ $position }) =>
			$position === 'top' &&
			css`
				bottom: calc(100% + 0.5rem);
				left: 0;
				opacity: 0;
				transform: translateY(1rem);
				transition: opacity 0.3s ease, transform 0.3s ease;
			`}

		${({ $position }) =>
			$position === 'bottomRight' &&
			css`
				top: calc(100% + 0.5rem);
				right: 0;
				opacity: 0;
				transform: translateY(-1rem);
				transition: opacity 0.3s ease, transform 0.3s ease;
			`}
		${({ $position }) =>
			$position === 'topRight' &&
			css`
				bottom: calc(100% + 0.5rem);
				right: 0;
				opacity: 0;
				transform: translateY(1rem);
				transition: opacity 0.3s ease, transform 0.3s ease;
			`}

		> div {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;

			&:first-child {
				padding-top: 0.5rem;
			}
			&:last-child {
				padding-bottom: 0.5rem;
			}
			> button {
				font-size: 14px;
				line-height: 18.48px;
				padding: 0.5rem 0.75rem;
				width: 100%;
				text-align: left;
				color: ${({ theme }) => theme.colors.white};
				transition: color 0.2s ease-in;

				&:hover {
					color: ${({ theme }) => theme.colors.primary500};
				}
			}
		}
	}
`;
