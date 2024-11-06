import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 3rem;

	.stats {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		${maxQuery('xl')} {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
			gap: 1rem;
		}
	}

	h6 {
		font-size: 20px;
		font-weight: 500;
		line-height: 26.4px;
	}

	.details {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 1.5rem;

		${maxQuery('md')} {
			grid-template-columns: 1fr;
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			p {
				font-size: 14px;
				font-weight: 400;
				line-height: 18.48px;
				color: ${({ theme }) => theme.colors.accent200};
			}

			> div {
				display: flex;
				align-items: center;
				gap: 1rem;
				flex-wrap: wrap;

				> div {
					display: flex;
					align-items: center;
					gap: 0.5rem;

					span {
						font-size: 12px;
						font-weight: 400;
						line-height: 15.84px;
					}
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				div {
					display: flex;
					justify-content: space-between;
					gap: 1rem;
					background-color: ${({ theme }) => theme.colors.accent500};
					border-radius: 5px;
					padding: 1rem;

					span {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
					}
				}
			}
		}
	}

	.rules {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
		}

		> div {
			display: grid;
			grid-template-columns: 1.3fr 1.7fr;
			align-items: start;
			justify-content: space-between;
			gap: 2rem;

			${maxQuery('md')} {
				display: none;
			}
		}

		.trigger {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			button {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 1rem;
				font-size: 14px;
				font-weight: 500;
				line-height: 18.48px;
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 4px;

				&.active {
					background-color: ${({ theme }) => theme.colors.primary500};
					transition: all 0.2s ease-in-out;
				}
			}
		}

		.display {
		}

		.accordion-con {
			display: none;

			${maxQuery('md')} {
				display: block;
			}
		}
	}
`;
