import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.65rem;
	background-color: ${({ theme }) => theme.colors.accent500};
	width: 100%;
	height: 138px;

	${maxQuery('lg')} {
		height: max-content;
	}

	span {
		font-size: 10px;
		line-height: 13.2px;
		color: ${({ theme }) => theme.colors.accent200};
	}
	p {
		font-size: 12px;
		line-height: 14.8px;
	}

	.badge {
		background-color: ${({ theme }) => theme.colors.secondary500};
		padding: 0.3rem 0.5rem;
		border-radius: 17px;
		height: max-content;
	}

	.icon-con {
		padding: 0.5rem;
		background-color: ${({ theme }) => theme.colors.accent100};
		border-radius: 100%;
	}

	> div:first-child {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1rem 0rem 1rem;

		> div {
			display: flex;
			align-items: center;
			gap: 0.7rem;

			p {
				font-size: 14px;
				line-height: 18.48px;
				font-weight: 500;
			}
		}
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	> div:last-child {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 0rem 1rem 1rem 1rem;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}

			.player {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}

			.img-con {
				width: 12px;
				height: 12px;

				img {
					width: 100%;
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
`;
