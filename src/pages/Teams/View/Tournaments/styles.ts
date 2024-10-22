import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	.tournaments {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;

		${minQuery('1520px')} {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
		${maxQuery('xl')} {
			grid-template-columns: 1fr 1fr 1fr;
		}
		${maxQuery('900px')} {
			grid-template-columns: 1fr 1fr;
		}
		${maxQuery('sm')} {
			grid-template-columns: 1fr;
		}
	}
`;
