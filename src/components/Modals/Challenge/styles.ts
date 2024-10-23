import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 5rem 3rem;
	width: 100%;
	flex: 1;
	text-align: center;
	overflow-y: auto;
	overflow-x: hidden;

	${maxQuery('md')} {
		padding: 2rem 2rem;
	}

	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
		flex-grow: 1;
		width: 390px;

		${maxQuery('lg')} {
			width: 100%;
		}
		${maxQuery('md')} {
			width: 100%;
		}

		h6 {
			font-size: 20px;
			line-height: 26.4px;
			width: 100%;
		}

		hr {
			border: 1px solid #313337;
			margin: 0.5rem 0;
		}

		span {
			font-size: 14px;
			line-height: 18.48px;
			color: ${({ theme }) => theme.colors.accent200};
			width: 100%;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			flex: 1;
			width: 100%;
		}

		> div:last-child {
			width: 100%;
			button {
				width: 100%;
			}
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
