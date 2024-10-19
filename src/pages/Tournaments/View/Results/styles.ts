import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h6 {
		font-size: 20px;
		font-weight: 500;
		line-height: 26.4px;
		text-align: left;
		align-self: flex-start;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		button {
			${maxQuery('md')} {
				display: none;
			}
		}
	}

	.bottom {
		display: flex;
		gap: 2rem;

		${maxQuery('lg')} {
			flex-direction: column;
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> div {
				max-width: 418px;
				min-width: 250px;
				width: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 5px;
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> div {
				display: flex;
				align-items: center;
				gap: 1rem;
				flex-wrap: wrap;
			}
		}
	}
`;
