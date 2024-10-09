import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 7rem 5rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;

	${maxQuery('md')} {
		padding: 6rem 2rem 2rem;
	}

	.img-con {
		position: absolute;
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
