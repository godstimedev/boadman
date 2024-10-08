import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.dropdowns {
		display: flex;
		align-items: center;
		gap: 1rem;

		${maxQuery('md')} {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
		}

		.dropdown {
			background-color: ${({ theme }) => theme.colors.accent500};
			border-radius: 5px;
			padding: 0.65rem 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
			width: 170px;
			white-space: nowrap;
			font-size: 14px;
			line-height: 18.48px;

			${maxQuery('md')} {
				width: max-content;
				padding: 0.65rem 0.65rem;
			}
		}

		${maxQuery('md')} {
			display: flex;
			justify-content: space-between;
		}

		.filter {
			margin-left: auto;

			${maxQuery('md')} {
				display: none;
			}
		}

		.filter-mobile {
			display: none;

			${maxQuery('md')} {
				margin-left: auto;
				display: inline-block;
				/* width: max-content; */
			}
		}
	}

	.matches {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;

		${maxQuery('xl')} {
			grid-template-columns: 1fr 1fr 1fr;
		}
		${maxQuery('lg')} {
			grid-template-columns: 1fr 1fr;
			place-items: center;
		}
		${maxQuery('sm')} {
			grid-template-columns: 1fr;
			place-items: center;
		}
	}
`;
