import styled from 'styled-components';

export const Container = styled.section`
	padding: 4rem 1.5rem;

	> div:first-child {
		text-align: center;
		margin-bottom: 2rem;
	}

	> div:last-child {
		max-width: 1024px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 4rem;

		> .button {
			/* margin-top: 4rem 0; */

			button {
				width: 100%;
			}
		}
	}
`;
