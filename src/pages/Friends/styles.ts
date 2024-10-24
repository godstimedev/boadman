import { maxQuery, minQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h6 {
			padding: 0.5rem 0;
		}
	}

	.friends {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;

		${minQuery('1720px')} {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		${maxQuery('xl')} {
			grid-template-columns: 1fr 1fr;
		}
		${maxQuery('md')} {
			grid-template-columns: 1fr;
			width: 100%;
		}

		> a {
			width: 100%;
		}
	}
`;
