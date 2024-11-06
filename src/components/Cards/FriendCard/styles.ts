import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.accent500};
	width: 100%;
	border-radius: 5px;

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h6 {
		font-size: 1rem;
		font-weight: 500;
		line-height: 19.2px;
	}

	span {
		font-size: 12px;
		font-weight: 400;
		line-height: 14.4px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	> div:first-child {
		padding: 0.75rem 1rem;

		.img-con {
			width: 40px;
			height: 40px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 50%;
			}
		}

		p {
			font-size: 12px;
			font-weight: 500;
			line-height: 14.4px;
		}

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			> div {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 0.5rem;
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 0.5rem;
			align-items: end;
		}
	}

	> div:last-child {
		padding: 0.75rem 1rem;

		p {
			font-size: 14px;
			font-weight: 500;
			line-height: 16.8px;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}
`;
