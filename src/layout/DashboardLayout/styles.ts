import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100vh;

	scrollbar-width: thin; /* Makes the scrollbar slimmer */
	scrollbar-color: ${({ theme }) => theme.colors.accent100} transparent; /*Thumb color and track color*/
	scrollbar-arrow-color: #22252c; /* Arrow color */

	> * {
		overflow: auto;
	}
	main {
		flex: 1;
		padding: 1rem 2rem 3rem 2rem;
		min-width: 350px !important;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		${maxQuery('md')} {
			padding: 1rem 1rem 3rem 1rem;
		}
	}
`;
