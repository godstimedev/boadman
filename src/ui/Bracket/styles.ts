import styled, { css } from 'styled-components';
import { StyledBracketProps } from './Bracket.types';

export const StyledBracket = styled.div<StyledBracketProps>`
	overflow-x: auto;
	padding: 0 0 2rem;

	.wrapper {
		display: flex;
		flex-direction: row;
		gap: 6rem;

		${({ $roundsAmount }) =>
			$roundsAmount === 6
				? css`
						height: 96.9rem;
				  `
				: $roundsAmount === 5
				? css`
						height: 47.7rem;
				  `
				: $roundsAmount === 4
				? css`
						height: 23.1rem;
				  `
				: $roundsAmount === 3
				? css`
						height: 10.8rem;
				  `
				: $roundsAmount === 2
				? css`
						height: 4.65rem;
				  `
				: css``}
	}

	.round {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: max-content;
		gap: 1.5rem;
	}

	.match {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.65rem;
		position: relative;
	}

	.second-round {
		justify-content: space-between;

		.match {
			gap: 4.2rem;
			justify-content: space-between;
		}
	}

	.third-round {
		justify-content: space-between;

		.match {
			gap: 10.35rem;
			justify-content: space-between;
		}
	}

	.fourth-round {
		justify-content: space-between;

		.match {
			/* height: 100%; */
			justify-content: space-between;
			/* 75.7 */
			gap: 22.7rem;
		}
	}

	.final {
		.match {
			height: 100%;
			justify-content: space-between;
		}
	}

	.winner {
		.match {
			height: 100%;
			justify-content: center;
		}
	}

	.team {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		height: 2rem;
		width: 142px;
		padding: 0 0.5rem;
		background-color: ${({ theme }) => theme.colors.accent100};
		color: #fff;
		border-radius: 5px;

		p {
			font-size: 14px;
			font-weight: 400;
			line-height: 16.8px;
		}
	}

	.team-logo {
		width: 14px;
		height: 14px;
		border-radius: 50%;
	}
`;
