import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.footer`
	padding: 6rem 4rem 2rem 4rem;
	max-width: 1440px;
	margin: 0 auto;

	${maxQuery('xl')} {
		padding: 6rem 1.5rem;
	}
	${maxQuery('md')} {
		padding: 6rem 1.5rem;
	}

	.top {
		padding: 4rem 0;

		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 1rem;

		${maxQuery('md')} {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		/* svg {
			fill: ${({ theme }) => theme.colors.primary500} !important;
			rect {
				fill: ${({ theme }) => theme.colors.primary500} !important;
			}
		} */

		.socials {
			svg {
				&:hover {
					path {
						fill: ${({ theme }) => theme.colors.primary500} !important;
						color: white;
					}
					scale: 1.2;
				}
			}
		}

		li > a {
			position: relative;
		}
		li > a:after {
			content: '';
			position: absolute;
			width: 0;
			height: 2px;
			background-color: ${({ theme }) => theme.colors.primary500}; /* Underline color */
			bottom: 0;
			left: 0;
			transition: width 0.3s ease-out; /* Animation duration */
		}
		li > a:hover:after {
			width: 100%;
		}
	}

	.bottom {
		border-top: 0.5px solid rgba(255, 255, 255, 0.4);
		padding: 2rem 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		${maxQuery('xl')} {
			flex-direction: column;
		}

		p > a {
			position: relative;
		}
		p > a:after {
			content: '';
			position: absolute;
			position: absolute;
			width: 0;
			height: 2px;
			background-color: ${({ theme }) => theme.colors.primary500}; /* Underline color */
			bottom: 0;
			left: 0;
			transition: width 0.3s ease-out; /* Animation duration */
		}
		p > a:hover:after {
			width: 100%;
		}
	}
`;
