import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.accent500};
	height: 138px;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	border-radius: 4px;
	width: 100%;

	${maxQuery('lg')} {
		height: max-content;
	}

	> div:first-child {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 1rem 1rem 0rem 1rem;

		p {
			font-size: 14px;
			line-height: 18.48px;
			font-weight: 500;
		}

		span {
			font-size: 12px;
			line-height: 15.84px;
			color: ${({ theme }) => theme.colors.accent200};
		}

		> div:first-child {
			width: 40px;
			height: 40px;

			img {
				width: 100%;
				height: 100%;
				border-radius: 5px !important;
				object-fit: cover;
				/* height: 40px; */
			}
		}

		> div:nth-child(2) {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			> div {
				display: flex;
				align-items: center;

				> img:not(:first-child) {
					margin-left: -0.25rem;
				}

				img {
					width: 12px;
					height: 12px;
					border-radius: 100%;
					object-fit: cover;
				}

				/* > svg {
					width: 18px;
					height: 18px;

					rect {
						width: 18px;
						height: 18px;
					}
				} */
				span {
					margin-left: 0.5rem;
				}
			}
		}

		> span {
			margin-left: auto;
			align-self: flex-start;
		}
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	> div:last-child {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		padding: 0rem 1rem 1rem 1rem;

		p {
			font-size: 12px;
			line-height: 14.4px;
			font-weight: 500;
		}

		span {
			font-size: 12px;
			line-height: 14.4px;
			color: ${({ theme }) => theme.colors.accent200};
		}

		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
`;
