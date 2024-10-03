import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	.player {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		${maxQuery('md')} {
			gap: 0.5rem;
		}

		img {
			border-radius: 100%;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0rem;

			span {
				color: ${({ theme }) => theme.colors.accent200};
			}
		}
	}
`;
