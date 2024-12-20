import { StyledInputContainer } from '@/ui/InputGroup/styles';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.head {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h6 {
			padding: 0.5rem 0;
		}

		> div:first-child {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.filter-box {
			padding: 0.75rem;
			background-color: ${({ theme }) => theme.colors.accent500};
			display: flex;
			align-items: center;
			gap: 1.5rem;
			border-radius: 5px;

			${maxQuery('xl')} {
				flex-direction: column;
			}

			> div:first-child {
				padding-right: 1.5rem;
				border-right: 1px solid ${({ theme }) => theme.colors.accent100};

				${maxQuery('xl')} {
					padding-right: 0;
					border-right: none;
				}

				.dropdown {
					background-color: ${({ theme }) => theme.colors.secondary500};
					border-radius: 5px;
					padding: 0.75rem 1rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 0.5rem;
					width: 170px;
					white-space: nowrap;
					font-size: 14px;
					line-height: 18.48px;
				}
			}

			.filter-buttons {
				display: flex;
				align-items: center;
				gap: 1rem;

				${maxQuery('md')} {
					justify-content: center;
					flex-wrap: wrap;
				}

				button {
					padding: 0.75rem 1rem;
					background-color: ${({ theme }) => theme.colors.secondary500};
					font-size: 14px;
					font-weight: 400;
					line-height: 18.48px;
					border-radius: 5px;
					width: 100px;

					&.active {
						background-color: ${({ theme }) => theme.colors.primary500};
					}
				}
			}

			> div:last-child {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				padding-left: 1.5rem;
				border-left: 1px solid ${({ theme }) => theme.colors.accent100};

				${maxQuery('xl')} {
					padding-left: 0;
					border-left: none;
				}

				${StyledInputContainer} {
					width: 150px;
					input {
						background-color: ${({ theme }) => theme.colors.secondary500};
						padding: 0.75rem 1rem;
						height: 2.5rem;
					}
				}

				.filter {
					margin-left: auto;
				}
			}
		}
	}

	.matches {
		display: grid;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
		gap: 1rem;
	}
`;
