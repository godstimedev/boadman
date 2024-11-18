import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	/* padding: 1rem; */

	> .search-header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
		gap: 1rem;

		.search-bar {
			width: 720px;
			display: none;

			${maxQuery('md')} {
				width: 100%;
				display: block;
			}
		}
	}
`;
