import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 5rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
	width: 560px;
	overflow-y: auto;
	overflow-x: hidden;

	${maxQuery('md')} {
		padding: 2.5rem 2rem;
		width: 100%;
	}

	> div {
		> h6 {
			font-size: 20px;
			line-height: 26.4px;
		}

		> span {
			font-size: 14px;
			line-height: 18.48px;
			color: ${({ theme }) => theme.colors.accent200};
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 1rem;

			> button {
				background-color: ${({ theme }) => theme.colors.accent100};

				flex: 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1rem;
				border-radius: 5px;
				font-size: 14px;
				font-weight: 500;
				line-height: 18.48px;

				> span {
					flex: 1;
				}
			}
		}

		> div:last-child {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 1rem;
		}
	}
	> div:last-child {
		width: 100%;
		margin-top: 1rem;

		> button {
			width: 100%;
		}
	}
`;

export const SuccessCon = styled.div`
	padding: 7rem 5rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
	width: 560px;

	${maxQuery('lg')} {
		width: 466px;
	}
	${maxQuery('sm')} {
		width: 100%;
	}

	${maxQuery('md')} {
		padding: 6rem 2rem 2rem;
	}

	> .img-con,
	div:first-child {
		position: fixed;
		top: -60px;
		img {
		}
	}

	h6 {
		font-size: 20px;
		line-height: 26.4px;
	}

	span {
		font-size: 14px;
		line-height: 18.48px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	p {
		font-size: 14px;
		line-height: 18.48px;
	}

	div:last-child {
		width: 100%;
		margin-bottom: 1rem;
		> button {
			width: 100%;
		}
	}
`;
