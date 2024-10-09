import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 1rem;
	background-color: ${({ theme }) => theme.colors.accent500};
	display: flex;
	justify-content: space-between;
	/* gap: 1rem; */
	border-radius: 5px;

	${maxQuery('md')} {
		gap: 1rem;
	}

	p {
		font-size: 14px;
		line-height: 18.48px;
		font-weight: 500;
		white-space: nowrap;
	}

	span {
		font-size: 12px;
		line-height: 15.84px;
		color: ${({ theme }) => theme.colors.accent200};
		white-space: nowrap;
	}

	> div:first-child {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		${maxQuery('md')} {
			gap: 1rem;
		}

		svg {
			width: 25px;
			height: 25px;

			rect {
				width: 25px;
				height: 25px;
			}
		}

		> div {
			display: flex;
			flex-direction: column;

			gap: 0.5rem;

			> div {
				display: flex;
				gap: 0.5rem;
			}
		}
	}

	> div:last-child {
		display: flex;
		align-items: center;
		gap: 1rem;

		${maxQuery('md')} {
			gap: 1rem;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
`;
