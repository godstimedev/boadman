import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.accordion-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background-color: ${({ theme }) => theme.colors.accent500};

		svg {
			transform: rotate(0deg);
			transition: transform 0.3s ease-in-out;
		}

		.active {
			svg {
				transform: rotate(90deg);
				transition: transform 0.3s ease-in-out;
			}
		}
	}

	.accordion-content {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;
	}

	.accordion-content.open {
		max-height: max-content; /* You can adjust this value depending on the content size */
	}
	.accordion-content p {
		padding: 1rem;
	}
`;
