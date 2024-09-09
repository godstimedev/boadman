import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	padding: 4rem 2rem;
	text-align: center;

	.heading {
		display: flex;
		flex-direction: column;
		align-items: center;

		span {
			${({ theme }) => theme.fonts.secondaryFont};
			color: ${({ theme }) => theme.colors.primary500};
		}

		svg {
			${maxQuery('sm')} {
				height: 6rem;
			}
		}
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		gap: 2rem;

		${maxQuery('sm')} {
			flex-direction: column;
		}

		.list {
			/* flex: 1; */
			ol {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				text-align: left;
				list-style-type: decimal;

				${maxQuery('sm')} {
					align-items: center;
				}
			}

			button {
				margin-top: 3rem;

				${maxQuery('sm')} {
					margin-left: auto;
					margin-right: auto;
				}
			}
		}

		.card {
			background: linear-gradient(
				180deg,
				rgba(34, 37, 44, 0.2) -12.34%,
				rgba(113, 123, 146, 0.1) 100%
			);
			/* border-radius: 3rem; */
			border: 2px solid;
			border-image-source: linear-gradient(180deg, #ff5733 -45.22%, rgba(239, 202, 188, 0.1) 27.78%);
			border-image-slice: 1; /* This tells the browser to use the entire gradient */
			padding: 4rem 3rem;
			text-align: center;
			max-width: 420px;

			${maxQuery('sm')} {
				padding: 2rem 1.5rem;
			}

			span {
				color: ${({ theme }) => theme.colors.primary500};
				text-transform: uppercase;
			}

			h6 {
				margin-top: 0.5rem;
			}

			p {
				margin-top: 1rem;
			}

			${maxQuery('sm')} {
				margin-top: 2rem;
			}
		}
	}
`;
