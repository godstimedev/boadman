import { Banner1 } from '../../../assets/images';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.banner {
		background-image: url(${Banner1});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px 5px 0 0;
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		div:first-child {
			display: flex;
			align-items: center;
			/* gap: 1rem; */

			> div {
				display: flex;
				flex-direction: column;
				align-items: start;
				gap: 1rem;

				h5 {
					font-size: 28px;
					line-height: 26.96px;
					font-weight: 700;
				}

				span {
					font-size: 19.6px;
					line-height: 25.87px;
					font-weight: 400;
					color: ${({ theme }) => theme.colors.accent200};
				}
			}
		}

		div:last-child {
			display: flex;
			gap: 1rem;
			align-items: center;
		}
	}

	.profile {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		.page-nav {
			display: flex;
			align-items: center;
			background-color: ${({ theme }) => theme.colors.accent500};
			color: ${({ theme }) => theme.colors.white};
			margin-top: 1rem;
			overflow-x: auto;

			.menu {
				/* background-color: ${({ theme }) => theme.colors.accent500}; */
				padding: 0.7rem 1.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			a {
				/* flex: 1; */
				border: 4px solid ${({ theme }) => theme.colors.accent500};
			}

			a li {
				padding: 1rem 3rem;
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
			}
		}

		.filter-con {
			display: flex;
			align-items: center;
			gap: 1rem;

			div {
				cursor: pointer;
				background-color: ${({ theme }) => theme.colors.accent500};
				border-radius: 5px;
				padding: 0.65rem 1rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.5rem;
				width: 170px;
			}
		}
	}
`;
