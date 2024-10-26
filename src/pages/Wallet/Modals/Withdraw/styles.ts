import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 2rem 5rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
	width: 560px;

	${maxQuery('md')} {
		padding: 2.5rem 2rem;
		width: 100%;
	}

	> div:first-child {
		> h6 {
			font-size: 20px;
			line-height: 26.4px;
		}

		> span {
			font-size: 14px;
			line-height: 18.48px;
			color: ${({ theme }) => theme.colors.accent200};
		}
	}

	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;

		> div {
			background-color: ${({ theme }) => theme.colors.secondary500};
			padding: 1.2rem 0.75rem;
			width: 100%;
			border-radius: 5px;

			&:first-child {
				display: flex;
				flex-direction: column;
				text-align: left;
				gap: 0.5rem;
				flex: 1;

				> span:first-child {
					font-size: 14px;
					font-weight: 400;
					line-height: 18.48px;

					color: ${({ theme }) => theme.colors.accent200};
				}
				> span:last-child {
					font-size: 14px;
					font-weight: 400;
					line-height: 18.48px;

					color: ${({ theme }) => theme.colors.accent200};
				}

				p {
					font-size: 20px;
					font-weight: 500;
					line-height: 26.4px;
					display: flex;
					align-items: center;
					gap: 0.3rem;

					> span {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
						margin-top: 0.2rem;
					}
				}
			}

			&:last-child {
				display: flex;
				flex-direction: column;
				text-align: left;
				gap: 0.5rem;

				p {
					font-size: 14px;
					font-weight: 500;
					line-height: 18.48px;
				}

				> div {
					display: flex;
					align-items: center;
					justify-content: space-between;

					> span {
						font-size: 14px;
						font-weight: 400;
						line-height: 18.48px;
						color: ${({ theme }) => theme.colors.accent200};
					}
				}
			}
		}
	}

	> div:last-child {
		width: 100%;
		margin-top: 1rem;

		> button {
			width: 100%;
		}
	}
`;

export const SuccessCon = styled.div`
	padding: 7rem 5rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
	width: 560px;

	${maxQuery('lg')} {
		width: 466px;
	}
	${maxQuery('sm')} {
		width: 100%;
	}

	${maxQuery('md')} {
		padding: 6rem 2rem 2rem;
	}

	> .img-con,
	div:first-child {
		position: fixed;
		top: -60px;
		img {
		}
	}

	h6 {
		font-size: 20px;
		line-height: 26.4px;
	}

	span {
		font-size: 14px;
		line-height: 18.48px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	p {
		font-size: 14px;
		line-height: 18.48px;
	}

	div:last-child {
		width: 100%;
		margin-bottom: 1rem;
		> button {
			width: 100%;
		}
	}
`;
