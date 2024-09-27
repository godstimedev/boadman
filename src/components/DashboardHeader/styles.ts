import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.header`
	padding: 0.5rem 0 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	/* border-bottom: 1px solid #313337; */

	> div {
		> .search-con {
			width: 448px;

			${maxQuery('lg')} {
				display: none;
			}
		}

		> .logo {
			display: none;
			${maxQuery('lg')} {
				display: block;
			}
		}
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		border-left: 1px solid ${({ theme }) => theme.colors.white};

		${maxQuery('lg')} {
			display: none;
		}

		> ul {
			display: flex;
			gap: 1.2rem;
			padding-left: 1.5rem;

			li {
				position: relative;
				background-color: ${({ theme }) => theme.colors.accent500};
				padding: 0.625rem;
				border-radius: 5px;
				display: flex;
				align-items: center;
				cursor: pointer;

				> span {
					position: absolute;
					top: 7px;
					right: 7px;

					padding: 0.25rem;
					background-color: ${({ theme }) => theme.colors.error500};
					border-radius: 50%;
				}
			}
		}
	}

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

	.mobile-nav-con {
		display: none;
		${maxQuery('lg')} {
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}

		button {
			> svg rect {
			}
		}
	}
`;
