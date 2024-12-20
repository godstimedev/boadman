import styled, { css } from 'styled-components';
import { StyledDropdownProps } from './Dropdown.types';

export const StyledDropdown = styled.div<StyledDropdownProps>`
	position: relative;

	&:focus-within,
	&:focus {
		> div {
			opacity: 1;
			transform: translateY(0);
			z-index: 100;
			pointer-events: all;
		}
	}

	&:focus-within,
	&:focus {
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
		height: max-content;
		max-height: 190px;
		display: flex;
		flex-direction: column;
		/* gap: 0.5rem; */
		pointer-events: none;
		background-color: ${({ theme }) => theme.colors.accent500};
		border: 1px solid ${({ theme }) => theme.colors.accent100};
		border-radius: 5px;
		overflow-y: auto;

		&:first-child {
			padding-top: 0.5rem;
		}
		&:last-child {
			padding-bottom: 0.5rem;
		}
		button {
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

		${({ $position }) =>
			$position === 'bottom' &&
			css`
				top: calc(100% + 0.5rem);
				left: 0;
				opacity: 0;
				transform: translateY(-1rem);
				transition: transform 0.3s ease;
			`}

		${({ $position }) =>
			$position === 'top' &&
			css`
				bottom: calc(100% + 0.5rem);
				left: 0;
				opacity: 0;
				transform: translateY(1rem);
				transition: transform 0.3s ease;
			`}

		${({ $position }) =>
			$position === 'bottomRight' &&
			css`
				top: calc(100% + 0.5rem);
				right: 0;
				opacity: 0;
				transform: translateY(-1rem);
				transition: transform 0.3s ease;
			`}
		${({ $position }) =>
			$position === 'topRight' &&
			css`
				bottom: calc(100% + 0.5rem);
				right: 0;
				opacity: 0;
				transform: translateY(1rem);
				transition: transform 0.3s ease;
			`}

		

	

		/* WebKit browsers (Chrome, Safari, Edge) */
		::-webkit-scrollbar {
			width: 1px; /* Make the scrollbar slimmer */
		}

		::-webkit-scrollbar-track {
			background: transparent; /* The background of the scrollbar track */
		}

		::-webkit-scrollbar-thumb {
			background-color: #22252c; /* The color of the scrollbar thumb */
			border-radius: 5px; /* Rounded corners */
			border: 2px solid #e3e5e9; /* Adds space around the thumb */
		}

		::-webkit-scrollbar-thumb:hover {
			background-color: #22252c; /* Color when hovering over the thumb */
		}

		/* Firefox */
		scrollbar-width: thin; /* Makes the scrollbar slimmer */
		/* /* scrollbar-color: #22252c #e3e5e9;  */
		scrollbar-color: ${({ theme }) => theme.colors.accent100} transparent; /* Thumb color and track color */
		scrollbar-arrow-color: #22252c; /* Arrow color */
	}
`;
