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

	${maxQuery('md')} {
		padding: 2.5rem 2rem;
		width: 100%;
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

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}
	> div:last-child {
		width: 100%;
		margin-top: 1rem;

		> button {
			width: 100%;
		}
	}
`;
