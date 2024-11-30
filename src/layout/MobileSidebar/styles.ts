import { minQuery } from '@/utilities';
import styled from 'styled-components';

export const Aside = styled.aside`
	${minQuery('lg')} {
		display: none;
	}

	.show {
		position: fixed;
		top: 0;
		left: 0;
		background: #000000b2;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: grid;
		place-items: left;
		transition: left 0.3s ease-in-out;
	}

	.close {
		position: fixed;
		top: 0;
		left: -120vw;
		width: 100%;
		height: 100%;
		z-index: 20;
		transition: left 0.3s ease-in-out;
	}

	> div {
		.menu-con {
			position: relative;
			background-color: ${({ theme }) => theme.colors.accent500};
			max-width: 350px;
			width: 100%;
			height: 100%;
			padding: 2rem 0 1rem 0;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.logo-con {
				margin-bottom: 1.5rem;
				padding: 0 1rem 1rem 1rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				border-bottom: 1px solid #313337;

				/* > svg {
					width: 140px;

					rect {
						fill: ${({ theme }) => theme.colors.white};
					}
				} */

				img {
					height: 40px;
					width: 100%;
					object-fit: cover;
				}
			}

			a.active li {
				background-color: ${({ theme }) => theme.colors.secondary500};

				> span {
					svg {
						path {
							fill: ${({ theme }) => theme.colors.primary500} !important;
						}
					}
				}
			}
			a:hover li {
				background-color: ${({ theme }) => theme.colors.secondary500};
			}

			li {
				font-size: 14px;
				line-height: 16.8px;
				font-weight: 500;
				padding: 1rem 2rem 1rem 1.25rem;
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}

			/* span.active {
				display: none;
			} */
		}

		.bottom {
			margin: 2rem 0;
			padding: 0 1rem;
			display: flex;
			align-items: center;
			gap: 1rem;

			.dropdown-con {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				cursor: pointer;

				> div {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
			}

			> ul {
				display: flex;
				align-items: center;
				gap: 1rem;

				li {
					position: relative;
					display: flex;
					align-items: center;
					cursor: pointer;
					padding: 0;

					.dot {
						position: absolute;
						z-index: 10;
						top: 0px;
						right: 0px;
						padding: 0.2rem;
						background-color: ${({ theme }) => theme.colors.error500};
						border-radius: 50%;
					}
				}
			}
		}
	}
`;
