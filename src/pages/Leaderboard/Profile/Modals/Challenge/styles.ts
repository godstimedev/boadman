import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 5rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
	/* overflow-y: auto; */

	${maxQuery('md')} {
		padding: 2rem 2rem;
	}

	h6 {
		font-size: 20px;
		line-height: 26.4px;
	}

	hr {
		border: 1px solid #313337;
		margin: 0.5rem 0;
	}

	span {
		font-size: 14px;
		line-height: 18.48px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	form {
		width: 390px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	> div:last-child {
		width: 100%;
		button {
			width: 100%;
		}
	}
`;
