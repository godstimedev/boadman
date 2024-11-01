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

			> .switch-wrapper {
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}

			.switch-con {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				width: 65%;
				background-color: ${({ theme }) => theme.colors.secondary500};

				padding: 1rem;
				border-radius: 5px;

				${maxQuery('md')} {
					width: 100%;
				}

				> div {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 250px;

					${maxQuery('sm')} {
						width: 100%;
					}

					span {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
					}
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
