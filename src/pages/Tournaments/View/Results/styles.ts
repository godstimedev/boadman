import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 3rem;

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
			text-align: left;
			align-self: flex-start;
		}

		button {
			${maxQuery('md')} {
				display: none;
			}
		}
	}
`;
