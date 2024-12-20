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
			gap: 0.5rem;

			background-color: ${({ theme }) => theme.colors.accent100};
			padding: 0.75rem 0.65rem;
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
				width: 100%;
			}
		}
	}

	.tournaments {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
		gap: 1rem;

		${maxQuery('sm')} {
			width: 276px;
		}
	}
`;
