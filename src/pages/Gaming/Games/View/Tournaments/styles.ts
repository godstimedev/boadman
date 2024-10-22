import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.filter-box {
		display: flex;
		align-items: center;
		justify-content: space-between;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 1rem;
		}

		.filter-buttons {
			display: flex;
			align-items: center;
			gap: 1rem;

			${maxQuery('md')} {
				justify-content: start;
				flex-wrap: wrap;
			}

			button {
				padding: 0.75rem 1rem;
				background-color: ${({ theme }) => theme.colors.accent500};
				font-size: 14px;
				font-weight: 400;
				line-height: 18.48px;
				border-radius: 5px;
				width: 135px;

				&.active {
					background-color: ${({ theme }) => theme.colors.primary500};
				}
			}
		}

		.filter {
			margin-left: auto;
		}
	}

	.tournaments {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;

		${minQuery('1520px')} {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
		${maxQuery('xl')} {
			grid-template-columns: 1fr 1fr 1fr;
		}
		${maxQuery('900px')} {
			grid-template-columns: 1fr 1fr;
		}
		${maxQuery('sm')} {
			grid-template-columns: 1fr;
		}
	}
`;