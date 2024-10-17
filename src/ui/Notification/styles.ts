import styled, { css } from 'styled-components';
import { maxQuery } from '../../utilities';

type MajorContainerProps = {
	$status: string;
};

export const MajorContainer = styled.div<MajorContainerProps>`
	background-color: #ff573321;

	${({ $status, theme }) =>
		$status === 'success' &&
		css`
			background-color: ${theme.colors.success500};
		`}
	${({ $status, theme }) =>
		$status === 'error' &&
		css`
			background-color: ${theme.colors.error500};
		`}

	width: max-content;
	padding: 1.25rem 4rem 1.25rem 3rem;
	max-width: 80vw;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 8px;

	${maxQuery('md')} {
		padding: 1rem 3rem 1rem 2rem;
	}
	${maxQuery('xs')} {
		padding: 1rem 1.5rem 1rem 1rem;
	}
	svg {
		flex-shrink: 0;

		${maxQuery('md')} {
			width: 1rem;
			height: 1rem;
		}
	}

	p {
		color: ${({ theme }) => theme.colors.white};

		font-weight: 600;
		line-height: 140%;

		${maxQuery('md')} {
			font-size: 0.875rem;
			line-height: 140%;
		}
	}
`;
export const MinorContainer = styled.p`
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black};

	padding: 0.75rem 2rem;
`;

export const TextContainer = styled.div`
	background-color: #ff573321;
	width: 100%;
	padding: 0.85rem 1rem;

	display: flex;
	align-items: center;
	gap: 0.75rem;
	border-radius: 8px;

	${maxQuery('lg')} {
		align-items: start;
	}

	svg {
		flex-shrink: 0;

		${maxQuery('md')} {
			width: 1rem;
			height: 1rem;
			margin-top: 0.15rem;
		}
	}

	p {
		color: ${({ theme }) => theme.colors.accent200};
		font-size: 14px;
		line-height: 18.48px;
		font-weight: 400;

		${maxQuery('md')} {
			font-size: 12px;
			font-weight: 400;
			line-height: 18px;
		}
	}
`;
