import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 1rem;
		}

		.dropdowns {
			display: flex;
			align-items: center;
			gap: 1rem;

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
			}

			${maxQuery('md')} {
				display: flex;
				justify-content: space-between;
			}
		}

		.action {
			display: flex;
			align-items: center;
			gap: 2rem;
		}
	}

	.table-con {
		overflow-x: auto;
	}
	table {
		width: 100%;
		min-width: max-content;
		table-layout: fixed;
		/* border-collapse: collapse; */

		${minQuery('300px')} {
			> * > tr > *:first-child {
				left: 0;
				position: sticky;
			}
		}
		${maxQuery('md')} {
			> * > tr > *:first-child {
				left: 0;
				position: sticky;
				background-color: ${({ theme }) => theme.colors.accent500};
			}
		}

		tbody tr {
			margin-bottom: 1rem;
			display: flex;
			justify-content: space-between;
		}
		td {
			/* display: block; */
		}

		tr {
			background-color: ${({ theme }) => theme.colors.accent500};

			td:first-child {
				border-radius: 5px 0 0 5px;
				border-right: 1px solid ${({ theme }) => theme.colors.accent700};
			}
			td:last-child {
				border-radius: 0 5px 5px 0;
			}

			td {
				padding: 1rem;
				width: 5rem;
			}
		}
	}
`;
