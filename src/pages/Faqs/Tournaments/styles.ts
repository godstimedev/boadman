import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	> div:first-child {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		> h6 {
			font-size: 20px;
			font-weight: 500;
			line-height: 26.4px;
		}

		p {
			font-size: 12px;
			font-weight: 400;
			line-height: 15.84px;
			color: ${({ theme }) => theme.colors.accent200};
			width: 553px;

			${maxQuery('md')} {
				width: 100%;
			}
		}
	}
`;
