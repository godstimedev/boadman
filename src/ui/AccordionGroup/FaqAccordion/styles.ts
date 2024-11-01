import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	> div:first-child {
		border-top: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	> div {
		border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	.accordion-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
		background-color: ${({ theme }) => theme.colors.accent500};
		font-size: 14px;
		font-weight: 500;
		line-height: 18.48px;

		svg {
			transform: rotate(0deg);
			transition: transform 0.3s ease-in-out;
		}

		.active {
			svg {
				transform: rotate(45deg);
				transition: transform 0.3s ease-in-out;

				path {
					fill: ${({ theme }) => theme.colors.primary500};
				}
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
		padding: 0 0 1rem;
		font-size: 12px;
		font-weight: 400;
		line-height: 15.84px;
		color: ${({ theme }) => theme.colors.accent200};
		/* max-width: 98%; */
	}
`;
