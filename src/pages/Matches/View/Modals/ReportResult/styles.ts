import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 5rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
	overflow-y: auto;

	${maxQuery('md')} {
		padding: 2rem 2rem;
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

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;

		> button {
			background-color: ${({ theme }) => theme.colors.accent100};
			padding: 1rem;
			border-radius: 5px;
			font-size: 14px;
			font-weight: 500;
			line-height: 18.48px;
		}

		> button:last-child {
			border: 1px dashed ${({ theme }) => theme.colors.primary500};
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			color: ${({ theme }) => theme.colors.accent200};
		}
	}

	hr {
		border: 1px solid #313337;
		width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		> div:nth-child(3) {
			margin-top: -0.75rem;
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
		> a {
			width: 100%;
			button {
				width: 100%;
			}
		}
	}
`;
