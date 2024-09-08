import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	padding: 4rem 6rem;

	${maxQuery('xl')} {
		padding: 4rem 2rem;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 2rem;

			svg {
				width: 8rem;
			}
		}

		.content {
			display: flex;
			align-items: center;
			gap: 5rem;

			${maxQuery('lg')} {
				gap: 2rem;
			}

			${maxQuery('md')} {
				flex-direction: column;
				gap: 3rem;
			}
		}

		h3 {
			display: flex;
			align-items: center;
			font-weight: 700;

			> span {
				color: ${({ theme }) => theme.colors.primary500};
				margin-left: 0.5rem;
			}
		}
	}

	> p {
		max-width: 40rem;
		text-align: center;
		margin: 2rem auto;
		background: linear-gradient(180deg, #ffffff -50.58%, rgba(153, 153, 153, 0) 115.2%);
		-webkit-background-clip: text; /* Clip the background to the text */
		-webkit-text-fill-color: transparent; /* Make the actual text color transparent */
		background-clip: text; /* For non-WebKit browsers */
		text-fill-color: transparent; /* Ensures the text gets the gradient */
	}
`;
