import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	${maxQuery('md')} {
		gap: 2rem;
	}

	> div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		${maxQuery('xl')} {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		${maxQuery('md')} {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
		${maxQuery('sm')} {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	> div:nth-child(2) {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		width: 100%;
		gap: 1.5rem;

		${maxQuery('md')} {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			flex: 1;

			h6 {
				font-size: 20px;
				font-weight: 500;
				line-height: 26.4px;
			}

			p {
				font-size: 14px;
				font-weight: 400;
				line-height: 18.48px;
				color: ${({ theme }) => theme.colors.accent200};
			}

			> div {
				display: flex;
				align-items: center;
				gap: 0.75rem;

				> span {
					padding: 0.75rem 0.65rem;
					border-radius: 4px;
					background-color: ${({ theme }) => theme.colors.accent500};
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;

			.header {
				display: flex;
				align-items: center;
				justify-content: space-between;

				h6 {
					font-size: 20px;
					font-weight: 500;
					line-height: 26.4px;
				}
			}

			> div:last-child {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 0.5rem;

				${maxQuery('xl')} {
					grid-template-columns: 1fr 1fr;
					gap: 0.8rem;
				}
				${maxQuery('md')} {
					grid-template-columns: 1fr 1fr;
				}
				${maxQuery('sm')} {
					grid-template-columns: 1fr;
				}
			}
		}
	}

	> div:last-child {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
`;
