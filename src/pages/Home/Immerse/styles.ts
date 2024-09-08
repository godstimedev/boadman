import styled from 'styled-components';
import { maxQuery } from '../../../utilities';
import { ApexLegends } from '../../../assets/images';
import { CallOfDuty } from '../../../assets/images';

export const Container = styled.section`
	padding: 4rem 6rem;

	${maxQuery('md')} {
		padding: 4rem 1.5rem;
	}
	.head {
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: start;
		gap: 1rem;

		.title {
			position: relative;
			z-index: -1;
			max-width: fit-content;
			svg {
				position: absolute;
				top: 65%;
				right: -20%;
				z-index: -1;

				${maxQuery('md')} {
					top: 65%;
					right: -4%;
					width: 4rem;
				}
			}
		}
	}

	.grid-container {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 4fr 3fr;
		gap: 1rem;
		min-height: 700px;

		${maxQuery('lg')} {
			grid-template-columns: 1fr;
		}

		.grid-item {
			position: relative;
			background-color: ${({ theme }) => theme.colors.accent500};
			background-image: url(${ApexLegends}) !important;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 1rem;
			padding: 0rem 6rem;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			${maxQuery('lg')} {
				padding: 0rem 5rem;
			}
			${maxQuery('md')} {
				padding: 0rem 4rem;
			}
			${maxQuery('sm')} {
				padding: 0rem 1.5rem;
			}

			> svg {
				margin: 2rem auto;

				${maxQuery('md')} {
					height: 4rem;
				}
			}
		}

		.flex-container {
			display: flex;
			flex-direction: column;
			gap: 1rem !important;

			> div {
				flex: 1;

				${maxQuery('lg')} {
					min-height: 250px;
				}

				.badge {
					padding: 0.2rem 0.5rem;
					border-radius: 1rem;
					border: 1px solid white;
					background: transparent;
				}
			}

			> .flex-item1 {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> div:nth-child(1) {
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: ${({ theme }) => theme.colors.primary500};
					padding: 1rem 2rem;
					border-radius: 1rem 1rem 0 0;

					${maxQuery('xl')} {
						padding: 1rem 1rem;
					}
				}

				> div:nth-child(2) {
					background-color: #22252cb3;
					background-image: url(${CallOfDuty});
					background-size: cover;
					background-position: center;
					background-blend-mode: overlay;
					border-radius: 0 0 1rem 1rem;
					text-align: left;
					flex: 1;
					padding: 3rem 2rem;

					${maxQuery('xl')} {
						padding: 2rem 1rem;
					}
				}
			}

			> .flex-item2 {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> div:nth-child(1) {
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #008080;
					padding: 1rem 2rem;
					border-radius: 1rem 1rem 0 0;

					${maxQuery('xl')} {
						padding: 1rem 1rem;
					}
				}

				> div:nth-child(2) {
					background-color: #008080;
					border-radius: 0 0 1rem 1rem;
					text-align: left;
					flex: 1;
					padding: 3rem 2rem;

					${maxQuery('xl')} {
						padding: 2rem 1rem;
					}
				}
			}
		}
	}

	.grid-container-2 {
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: 3fr 4fr;
		gap: 1rem;
		min-height: 700px;

		${maxQuery('lg')} {
			grid-template-columns: 1fr;
		}

		.flex-container {
			display: flex;
			flex-direction: column-reverse;
			gap: 1rem !important;

			> div {
				flex: 1;

				${maxQuery('lg')} {
					min-height: 250px;
				}

				.badge {
					padding: 0.2rem 0.5rem;
					border-radius: 1rem;
					border: 1px solid white;
					background: transparent;
				}
			}

			> .flex-item1 {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> div:nth-child(1) {
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: ${({ theme }) => theme.colors.accent500};
					padding: 1rem 2rem;
					border-radius: 1rem 1rem 0 0;

					${maxQuery('xl')} {
						padding: 1rem 1rem;
					}
				}

				> div:nth-child(2) {
					flex: 1;
					background-color: #22252cb3;
					background-image: url(${CallOfDuty});
					background-size: cover;
					background-position: center;
					background-blend-mode: overlay;
					border-radius: 0 0 1rem 1rem;

					padding: 3rem 2rem;

					h4 {
						display: flex;
						align-items: end;
						height: 100%;
					}
					${maxQuery('xl')} {
						padding: 2rem 1rem;
					}
				}
			}

			> .flex-item2 {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> div:nth-child(1) {
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #3498db;
					padding: 1rem 2rem;
					border-radius: 1rem 1rem 0 0;

					${maxQuery('xl')} {
						padding: 1rem 1rem;
					}
				}

				> div:nth-child(2) {
					background-color: #3498db;
					border-radius: 0 0 1rem 1rem;
					text-align: left;
					flex: 1;
					padding: 3rem 2rem;

					${maxQuery('xl')} {
						padding: 2rem 1rem;
					}
				}
			}
		}

		.grid-item {
			position: relative;
			background-color: ${({ theme }) => theme.colors.accent500};
			background-image: url(${ApexLegends}) !important;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 1rem;
			padding: 0rem 6rem;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			${maxQuery('lg')} {
				padding: 0rem 5rem;
			}
			${maxQuery('md')} {
				padding: 0rem 4rem;
			}
			${maxQuery('sm')} {
				padding: 0rem 1.5rem;
			}

			> svg {
				margin: 2rem auto;

				${maxQuery('md')} {
					height: 4rem;
				}
			}
		}
	}
`;
