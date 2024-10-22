import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.accent500};
	/* width: 246px; */
	width: 100%;
	border-radius: 5px;

	/* ${maxQuery('sm')} {
		width: 100%;
	} */

	h6 {
		font-size: 14px;
		font-weight: 500;
		line-height: 16.8px;
	}

	span {
		font-size: 10px;
		font-weight: 400;
		line-height: 12px;
		color: ${({ theme }) => theme.colors.accent200};
	}

	hr {
		border: 1px solid ${({ theme }) => theme.colors.accent100};
	}

	> div:first-child {
		display: flex;
		justify-content: space-between;
		align-items: start;
		padding: 0.75rem;

		> div {
			display: flex;
			align-items: center;
			gap: 0.45rem;

			.img-con {
				width: 1rem;
				height: 1rem;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
			}
		}

		> .badge {
			background-color: ${({ theme }) => theme.colors.secondary500};
			padding: 0.35rem 0.65rem;
			color: white;
			font-size: 8px;
			font-weight: 400;
			line-height: 10.56px;
			border-radius: 17px;
		}
	}

	> div:last-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem;

		p {
			font-size: 12px;
			font-weight: 500;
			line-height: 14.4px;
		}

		svg {
			width: 10px;
			height: 10px;
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
