import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	.player {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex: 1;

		${maxQuery('md')} {
			gap: 0.5rem;
		}
	}
`;
