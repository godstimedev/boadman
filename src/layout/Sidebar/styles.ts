import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Aside = styled.aside`
	background-color: ${({ theme }) => theme.colors.accent500};
	width: 10.5rem;
	padding: 1.5rem 0 1rem 0;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;

	/* ::-webkit-scrollbar {
		width: 1px; 
	}

	::-webkit-scrollbar-track {
		background: #e3e5e9; 
	}

	::-webkit-scrollbar-thumb {
		background-color: #22252c; 
		border-radius: 5px; 
		border: 2px solid #e3e5e9;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #22252c; 
	} */

	scrollbar-width: thin; /* Makes the scrollbar slimmer */
	scrollbar-color: ${({ theme }) => theme.colors.accent100} transparent; /*Thumb color and track color*/
	scrollbar-arrow-color: #22252c; /* Arrow color */

	${maxQuery('lg')} {
		display: none;
	}

	.logo {
		margin-bottom: 2rem;
		padding: 0 1rem;

		svg {
			width: 120px;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-grow: 1;
		gap: 2rem;
	}

	hr {
		border-top: 1px solid ${({ theme }) => theme.colors.accent300};
		margin: 0.5rem 1rem;
	}

	a.active li {
		background-color: ${({ theme }) => theme.colors.secondary500};

		span {
			svg path {
				fill: ${({ theme }) => theme.colors.primary500} !important;
			}
		}
	}
	a:hover li {
		background-color: ${({ theme }) => theme.colors.secondary500};
	}

	li {
		font-size: 14px;
		line-height: 16.8px;
		font-weight: 500;
		padding: 1rem 2rem 1rem 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	span.active {
		display: none;
	}
`;
