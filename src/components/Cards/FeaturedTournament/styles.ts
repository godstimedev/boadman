import styled from 'styled-components';

export const Container = styled.div`
	background: ${({ theme }) => theme.colors.accent500};
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	width: 266px;
	height: 100%;
	flex: 1;

	> div:nth-child(1) {
		padding: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		/* width: 244px; */
		position: relative;

		img {
			width: 100%;
			height: 100px;
			/* height: 100%; */
			object-fit: cover;
			border-radius: 5px;
		}

		> div {
			position: absolute;
			bottom: 0rem;
			left: 1.2rem;

			> span {
				background: ${({ theme }) => theme.colors.secondary500};
				padding: 0.4rem 0.75rem;
				border-radius: 17px;
				font-size: 8px;
				line-height: 9.6px;
				margin: 0 0.3rem;
			}
		}
	}

	> div:nth-child(2) {
		padding: 0 0.75rem;

		div {
			span {
				font-size: 10px;
				line-height: 13.2px;
				color: ${({ theme }) => theme.colors.accent200};
			}
			span:first-child {
				color: ${({ theme }) => theme.colors.primary500};
			}
		}

		h6 {
			font-size: 1rem;
			line-height: 1.3rem;
			margin-bottom: 0.4rem;
		}

		p {
			font-size: 10px;
			line-height: 12px;
			color: ${({ theme }) => theme.colors.accent200};
		}
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
		margin: 1rem 0 0.75rem 0;
	}

	> div:last-child {
		display: flex;
		justify-content: space-between;
		padding: 0 2rem 0.75rem 0.75rem;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			span {
				font-size: 10px;
				line-height: 13.2px;
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
