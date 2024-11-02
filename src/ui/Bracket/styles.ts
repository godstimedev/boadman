import styled from 'styled-components';

export const StyledBracket = styled.div`
	display: flex;
	flex-direction: row;
	gap: 6rem;
	height: 43rem;
	overflow-x: auto;

	.round {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: max-content;
		/* gap: 0.75rem; */
	}

	.match {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.last-round {
		.match {
			height: 100%;
			justify-content: center;
		}

		.connecting-lines::before {
			content: '';
			position: absolute;
			top: 50%;
			left: -30px;
			/* height: 50%; */
			transform: translateY(-50%);
			width: 30px;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.primary500};
		}
	}

	.second-round {
		.match {
			/* justify-content: space-between; */
			gap: 3.5rem;
		}
	}

	.third-round {
		.match {
			height: 100%;
			justify-content: space-between;
			/* gap: 8rem; */
		}
	}
	.fourth-round {
		.match {
			height: 100%;
			justify-content: space-between;
		}
	}

	.team {
		position: relative;
		display: flex;
		align-items: center;
		/* justify-content: center; */
		gap: 0.75rem;
		/* padding: 5px 10px; */
		height: 2rem;
		width: 142px;
		padding: 0 0.5rem;
		/* width: 100%; */
		background-color: ${({ theme }) => theme.colors.accent100};
		color: #fff;
		border-radius: 5px;

		p {
			font-size: 14px;
			font-weight: 400;
			line-height: 16.8px;
		}

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 100%;
			/* height: 50%; */
			transform: translateY(-50%);
			width: 30px;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.primary500};
		}

		&.even::after {
			content: '';
			position: absolute;
			top: 50%;
			right: -30px;
			/* height: 50%; */
			/* transform: translateY(-50%); */
			/* width: 30px; */
			width: 1px;
			height: 16px;
			background-color: ${({ theme }) => theme.colors.primary500};
		}
		&.odd::after {
			content: '';
			position: absolute;
			top: 0%;
			right: -30px;
			/* height: 50%; */
			/* transform: translateY(-50%); */
			/* width: 30px; */
			width: 1px;
			height: 16px;
			background-color: ${({ theme }) => theme.colors.primary500};
		}
	}

	.team-logo {
		width: 14px;
		height: 14px;
		border-radius: 50%;
	}

	.score {
		margin-left: auto;
		font-weight: bold;
		color: #72d4ff;
	}

	/* Styles for the lines */
	.line {
		position: absolute;
		width: 20px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.primary500};
	}

	/* Top line for the upper team */
	.top-line {
		top: 50%;
		left: 100%;
		/* height: 50%; */
		transform: translateY(-50%);
	}

	/* Bottom line for the lower team */
	.bottom-line {
		bottom: 50%;
		left: 100%;
		/* height: 50%; */
		transform: translateY(50%);
	}
`;
