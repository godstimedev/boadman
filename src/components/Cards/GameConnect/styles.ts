import styled from 'styled-components';

export const Container = styled.div`
	> div:last-child {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.65rem;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.colors.secondary500};
		height: 193px;
		width: 218px;

		> div:first-child {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			> img {
				width: 100%;
				height: 45px;
				border-radius: 5px;
				object-fit: cover;
			}

			h6 {
				font-size: 14px;
				font-weight: 500;
				line-height: 18.48px;
			}

			p {
				font-size: 10px;
				font-weight: 400;
				line-height: 12px;
				color: ${({ theme }) => theme.colors.accent200};
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.35rem;
			}
		}
	}
`;
