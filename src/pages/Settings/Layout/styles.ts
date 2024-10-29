import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h6 {
			padding: 0.5rem 0;
		}
	}

	> .settings-con {
		display: flex;
		align-items: start;
		gap: 2rem;

		${maxQuery('xl')} {
			flex-direction: column;
		}

		> ul {
			display: flex;
			flex-direction: column;
			width: 18rem;
			height: max-content;
			border: 1px solid ${({ theme }) => theme.colors.accent100};
			border-radius: 5px;

			${maxQuery('xl')} {
				flex-direction: row;
				max-width: max-content;
				width: 100%;
				overflow-x: auto;
			}

			> a {
				font-size: 14px;
				font-weight: 400;
				line-height: 18.48px;
				padding: 1rem;
				white-space: nowrap;

				/* &:hover {
					background-color: ${({ theme }) => theme.colors.accent500};
				} */

				${maxQuery('sm')} {
					font-size: 10px;
					line-height: 13.2px;
				}

				&.active {
					background-color: ${({ theme }) => theme.colors.accent500};
				}
			}
		}

		> div {
			width: 100%;
			height: max-content;
		}
	}
`;
