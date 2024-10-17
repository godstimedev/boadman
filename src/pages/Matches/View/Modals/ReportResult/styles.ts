import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 5rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;

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
	}

	div:last-child {
		width: 100%;

		> button {
			width: 100%;
		}
	}
`;
