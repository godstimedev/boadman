import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	> form {
		border: 1px solid ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;

		> div:first-child {
			background-color: ${({ theme }) => theme.colors.accent500};
			padding: 1rem 1.45rem 2rem;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			${maxQuery('md')} {
				padding: 1rem 1rem 2rem;
			}

			h5 {
				font-size: 20px;
				font-weight: 500;
				line-height: 26.4px;
			}

			> div {
				display: flex;
				gap: 4rem;

				${maxQuery('lg')} {
					gap: 3rem;
				}
				${maxQuery('md')} {
					flex-direction: column;
					gap: 2rem;
				}

				.input-con {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					flex: 1.2;
				}

				> div:last-child {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					justify-content: space-between;
					flex: 0.8;
				}
			}
		}

		> div:last-child {
			padding: 1rem;

			> button {
				margin-left: auto;
			}
		}
	}
`;
