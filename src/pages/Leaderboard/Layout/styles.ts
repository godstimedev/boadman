import { StyledInputContainer } from '@/ui/InputGroup/styles';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		margin-bottom: 0.5rem;

		${maxQuery('sm')} {
			flex-direction: column;
			align-items: normal;
			gap: 1rem;
		}

		h6 {
			padding: 0.5rem 0;
		}

		> .input {
			width: max-content;

			${maxQuery('sm')} {
				align-self: flex-end;
			}

			${StyledInputContainer} {
				width: 16rem;
				/* height: 56px; */
				input {
					padding: 0.45rem 1rem;
				}
			}
		}
	}

	.leaderboards {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.page-nav {
		display: flex;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.accent500};
		color: ${({ theme }) => theme.colors.white};
		overflow-x: auto;

		.menu {
			/* background-color: ${({ theme }) => theme.colors.accent500}; */
			padding: 0.7rem 1.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		a {
			flex: 1;
			border: 4px solid ${({ theme }) => theme.colors.accent500};
		}

		a li {
			padding: 1rem 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			font-size: 14px;
			line-height: 18.48px;
			font-weight: 500;
			white-space: nowrap;
		}

		.active {
			background-color: ${({ theme }) => theme.colors.primary500};
			border-radius: 8px;
			/* border-right: 6px solid ${({ theme }) => theme.colors.secondary500};
			border-left: 6px solid ${({ theme }) => theme.colors.secondary500}; */
			border: 4px solid #171a23;

			svg {
				transform: scale(1.35);
				transition: transform 0.3s ease-out;
			}
		}
	}
`;
