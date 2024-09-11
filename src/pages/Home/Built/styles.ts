import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	padding: 4rem 6rem;

	${maxQuery('xl')} {
		padding: 4rem 1.5rem;
	}

	h2 {
		text-align: center;

		span {
			${({ theme }) => theme.fonts.secondaryFont};
			color: ${({ theme }) => theme.colors.primary500};
		}
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-top: 4rem;

		${maxQuery('lg')} {
			grid-template-columns: 1fr;
			max-width: 100%;
		}
	}

	.card-1,
	.card-2,
	.card-3,
	.card-4 {
		background: ${({ theme }) => theme.colors.accent500};

		padding: 2rem 3rem;
		border-radius: 1rem;

		${maxQuery('lg')} {
			padding: 0.8rem;
		}
	}

	.card-head {
		margin-bottom: 2rem;

		${maxQuery('md')} {
			margin-bottom: 1rem;
		}

		span {
			color: ${({ theme }) => theme.colors.primary500};
			text-transform: uppercase;

			${maxQuery('md')} {
				font-size: 10px;
				line-height: 10px;
			}
		}

		p {
			font-weight: 700 !important;
		}
	}

	.image-container {
		position: relative;
		margin-bottom: 2rem;

		.badges {
			position: absolute;
			left: 4%;
			top: 90%;
			display: flex;
			align-items: center;
			gap: 0.5rem;

			> span {
				padding: 0.1rem 1rem;
				background-color: ${({ theme }) => theme.colors.secondary500};
				border-radius: 1.5rem;
				font-size: 14px;
				border: 2px solid #313337;

				${maxQuery('md')} {
					padding: 0rem 0.8rem;
					font-size: 10px;
				}
			}
		}

		> img {
			width: 100%;
			object-fit: cover;
		}
	}

	.card-1-dets {
		${maxQuery('md')} {
			margin-bottom: 1rem;
		}

		h6 {
			${maxQuery('md')} {
				font-size: 1rem;
			}
		}
		p {
			color: ${({ theme }) => theme.colors.accent200};

			${maxQuery('md')} {
				font-size: 14px;
				line-height: 16px;
			}
		}
	}

	.card-2 {
		img {
			width: 100%;
			object-fit: cover;
		}
	}

	.card-title {
		> .progress {
			color: ${({ theme }) => theme.colors.primary500};
		}
	}

	.details {
		display: flex;
		align-items: start;
		gap: 1rem;
		margin: 1rem 0;

		${maxQuery('md')} {
			gap: 0.5rem;
		}

		.card-title span {
			font-size: 1.25rem;

			${maxQuery('md')} {
				font-size: 0.8rem;
			}
		}

		> div:last-child {
			p {
				color: ${({ theme }) => theme.colors.accent200};

				${maxQuery('md')} {
					font-size: 14px;
					line-height: 16px;
				}
			}
		}

		> div {
			${maxQuery('md')} {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> p {
					margin-top: 0.5rem;
				}
			}
		}

		h6 {
			${maxQuery('md')} {
				font-size: 1rem;
			}
		}
	}

	/* card 3  */
	.dropdown-container {
		background-color: ${({ theme }) => theme.colors.accent400};
		padding: 1rem;
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* flex-wrap: wrap; */

		${maxQuery('md')} {
			padding: 0.8rem 1rem;
		}

		> div {
			background-color: ${({ theme }) => theme.colors.secondary500};
			display: flex;
			align-items: center;
			gap: 1.2rem;
			padding: 0.5rem 1rem;
			font-size: 14.64px;

			${maxQuery('md')} {
				font-size: 10px;
				gap: 0.5rem;
				padding: 0.1rem 0.7rem;

				> svg {
					width: 10px;
				}
			}
		}
	}

	table {
		border-collapse: collapse;
		width: 100%;
		margin-bottom: 1rem;
		overflow-x: auto;
	}

	table > thead tr th,
	td {
		padding: 0.5rem;
		height: 4.5rem;

		${maxQuery('md')} {
			padding: 0.2rem;
		}
	}

	tbody td {
		border-top: 1px solid #313337;
		border-bottom: 1px solid #313337;
	}

	table > thead tr th {
		font-weight: 500;
		text-align: left;

		${maxQuery('md')} {
			font-size: 10px;
		}

		/* white-space: nowrap; */
	}

	tbody tr > td:nth-child(1) {
		padding: 0rem;
	}
	tbody tr > td:nth-child(3) {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		padding: 1rem 0rem;

		${maxQuery('md')} {
			gap: 0.5rem;
		}

		img {
			border-radius: 100%;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0rem;

			span {
				color: ${({ theme }) => theme.colors.accent200};
			}
		}
	}

	.stats-card {
		display: flex;
		gap: 1rem;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 1rem;
		}

		> div {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
			background-color: ${({ theme }) => theme.colors.secondary500};
			flex: 1;
			padding: 1rem;
			border-radius: 4px;

			> div:nth-child(1) {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				h6 {
					font-size: 20px;
					margin-top: auto;
					padding-top: 0.6rem;
				}

				span {
					font-size: 13px;
					line-height: 13px;
					padding-top: 0.4rem;
					color: ${({ theme }) => theme.colors.accent200};
					white-space: nowrap;
				}
			}
			> div:nth-child(2) {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				margin-top: auto;

				span {
					font-size: 12px;
					line-height: 12px;
					color: ${({ theme }) => theme.colors.accent200};
					white-space: nowrap;
				}

				p {
					font-size: 14px;
					line-height: 14px;
					align-self: flex-end;
				}
			}
		}
	}

	.most-played-card {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.secondary500};
		border-radius: 4px;
		padding: 1rem;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> span {
				padding: 0.5rem;
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 100%;
			}

			> div {
				display: flex;
				justify-content: center;
				flex-direction: column;
				gap: 0.7rem;

				span {
					font-size: 11px;
					line-height: 11px;
					color: ${({ theme }) => theme.colors.accent200};
					/* white-space: nowrap; */
				}

				p {
					font-size: 15px;
					line-height: 15px;
					font-weight: 500;
				}
			}
		}
	}

	.card-4 > div:last-child {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		${maxQuery('md')} {
			margin-bottom: 1rem;
		}

		p {
			color: ${({ theme }) => theme.colors.accent200};

			${maxQuery('md')} {
				font-size: 14px;
				line-height: 16px;
			}
		}
	}
`;
