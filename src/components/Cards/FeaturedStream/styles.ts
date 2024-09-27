import styled from 'styled-components';

export const Container = styled.div`
	width: 240px;
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;

	> div {
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
