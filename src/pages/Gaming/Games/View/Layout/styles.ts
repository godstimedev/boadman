import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;

		${maxQuery('md')} {
			flex-direction: column;
			align-items: start;
			gap: 1rem;
		}

		h6 {
			padding: 0.5rem 0;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			/* ${maxQuery('md')} {
				margin-left: auto;
			} */
		}
	}

	.game-con {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		ul {
			display: flex;
			align-items: center;
			gap: 2rem;

			border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};

			${maxQuery('sm')} {
				gap: 1rem;
			}

			a {
				padding: 0.75rem 0.5rem;
				border-bottom: 2px solid transparent;
				color: ${({ theme }) => theme.colors.accent200};
				font-size: 14px;
				line-height: 18.48px;
				font-weight: 500;
				white-space: nowrap;

				${maxQuery('sm')} {
					font-size: 10px;
					line-height: 13.2px;
				}

				&.active {
					border-bottom: 2px solid ${({ theme }) => theme.colors.primary500};
					color: ${({ theme }) => theme.colors.white};
				}
			}
		}
	}
`;
