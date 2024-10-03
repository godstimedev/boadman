import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100vh;

	> * {
		overflow: auto;
	}
	main {
		flex: 1;
		padding: 1rem 1.5rem;

		${maxQuery('md')} {
			padding: 1rem 1rem;
		}
	}
`;