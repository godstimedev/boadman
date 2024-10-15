import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.header`
	position: fixed;
	inset: 0;
	background: ${({ theme }) => theme.colors.secondary500};
	height: 90px;
	padding: 0 4rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3000;

	/* border-bottom: 1px solid ${({ theme }) => theme.colors.secondary400}; */

	${maxQuery('lg')} {
		padding: 0 1.5rem;
	}

	nav {
		max-width: 1440px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.mobile-nav {
			background-color: ${({ theme }) => theme.colors.secondary500};
			top: 99px;
			padding: 4rem 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: start;
			z-index: 1000;
		}

		.show {
			z-index: 1000;

			position: fixed;
			right: 0;
			transition: all 0.3s ease-in-out;
		}

		.close {
			position: fixed;
			right: -100vw;
			transition: right 0.3s ease-in-out;
			z-index: 20;
		}
	}
	li > a {
		position: relative;
	}
	li > a:after {
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
	li > a:hover:after {
		width: 100%;
	}
`;
