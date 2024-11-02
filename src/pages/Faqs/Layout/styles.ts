import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	> h6 {
		padding: 0.5rem 0;
	}

	.faqs {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background-color: ${({ theme }) => theme.colors.accent500};
		padding: 1.5rem 1.5rem 4rem;
		border-radius: 5px;

		${maxQuery('md')} {
			padding: 1.5rem 0.75rem 4rem;
		}

		> h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
		}
	}

	.page-nav {
		display: flex;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.accent500};
		color: ${({ theme }) => theme.colors.white};
		overflow-x: auto;

		.menu {
			/* background-color: ${({ theme }) => theme.colors.accent500}; */
			padding: 0.7rem 1.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		a {
			flex: 1;
			/* border: 4px solid ${({ theme }) => theme.colors.accent500}; */
		}

		a li {
			padding: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			font-size: 14px;
			line-height: 18.48px;
			font-weight: 500;
			white-space: nowrap;
		}

		.active {
			background-color: ${({ theme }) => theme.colors.primary500};
			border-radius: 5px;

			svg {
				transform: scale(1.35);
				transition: transform 0.3s ease-out;
			}
		}
	}
`;
