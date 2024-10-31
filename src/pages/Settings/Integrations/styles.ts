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

			h6 {
				font-size: 16px;
				font-weight: 500;
				line-height: 21.12px;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 1.35rem;
			}

			.input-con {
				width: 65%;

				${maxQuery('md')} {
					width: 100%;
				}

				> div {
					display: flex;
					align-items: end;
					gap: 1.5rem;

					> button {
						white-space: nowrap;

						margin-bottom: 0.15rem;
					}
				}
			}

			> div:last-child {
				> div {
					display: flex;
					align-items: center;
					gap: 1rem;
					flex-wrap: wrap;
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
