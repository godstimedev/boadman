import styled from 'styled-components';

export const Container = styled.div`
	.span {
		font-size: 12px;
		font-weight: 400;
		line-height: 15.84px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	.info {
		color: ${({ theme }) => theme.colors.accent200};
		font-size: 12px;
		font-weight: 400;
		line-height: 14.4px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		> div:last-child {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
			background-color: ${({ theme }) => theme.colors.secondary500};
			border-radius: 5px;

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 0.35rem;
				flex: 1;

				span:first-child {
					font-size: 12px;
					font-weight: 400;
					line-height: 14.4px;
					color: ${({ theme }) => theme.colors.accent200};
				}
				span:last-child {
					font-size: 10px;
					font-weight: 400;
					line-height: 12px;
					color: ${({ theme }) => theme.colors.accent200};
				}

				p {
					font-size: 14px;
					font-weight: 500;
					line-height: 18.48px;
					flex-wrap: wrap;
				}
			}

			button {
				margin-left: auto;
			}
		}
	}
`;
