import styled from 'styled-components';

export const Container = styled.div`
	width: 265px;
	display: flex;
	flex-direction: column;
	gap: 0.65rem;

	> div:first-child {
		height: 150px;
		img {
			width: 100%;
			height: 100%;
			border-radius: 6.28px;
			object-fit: cover;
		}
	}

	> div:last-child {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		img {
			width: 24px;
			height: 24px;
			border-radius: 100%;
		}
		> div {
			display: flex;
			flex-direction: column;
			gap: 0rem;

			span {
				font-size: 12px;
				line-height: 15.84px;
				color: ${({ theme }) => theme.colors.accent200};
			}

			p {
				font-size: 12px;
				line-height: 15.84px;
				font-weight: 500;
			}
		}
	}
`;
