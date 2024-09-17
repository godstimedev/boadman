import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	padding: 11rem 1.5rem 0rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	overflow-x: hidden;

	h1 {
	}
	h1 > span {
		${({ theme }) => theme.fonts.secondaryFont};

		color: ${({ theme }) => theme.colors.primary500};
	}

	.gamer-card {
		background: ${({ theme }) => theme.colors.accent500};

		position: relative;
		z-index: -10;
		display: flex;
		gap: 1rem;
		align-items: center;
		border-radius: 9.34px;
		border: 7px solid;
		border-image-source: linear-gradient(180deg, #ff5733 -45.22%, rgba(239, 202, 188, 0.1) 27.78%);
		border-image-slice: 1; /* This tells the browser to use the entire gradient */

		/* .avatar {
			> svg {
				max-width: 220px;

				${maxQuery('md')} {
					width: 120px;
				}
			}
		} */

		.gamer-info {
			/* flex: 1; */

			h6 {
				${maxQuery('sm')} {
					font-size: 11.96px;
				}
			}

			hr {
				border: 1.17px solid #313337;
			}

			svg {
				height: 2rem;
				width: 2rem;

				${maxQuery('md')} {
					height: 1rem;
					width: 1rem;
				}
			}

			.stacked-avatar {
				/* position: relative; */

				> svg {
					width: 25px;
					height: 25px;
					margin-right: -0.9rem;
				}
			}
		}

		.cursor {
			position: absolute;
			bottom: -38%;
			right: -8%;

			${maxQuery('xl')} {
				position: absolute;
				bottom: -18%;
				right: -6%;
			}
			${maxQuery('lg')} {
				position: absolute;
				bottom: -10%;
				right: -2%;
			}

			${maxQuery('md')} {
				position: absolute;
				bottom: -15%;
				right: -4%;
			}
			${maxQuery('sm')} {
				position: absolute;
				bottom: -25%;
				right: -8%;
			}
		}
	}
`;
