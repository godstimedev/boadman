import styled from 'styled-components';

type PropsType = {
	rounds: number;
	roundIndex: number;
	matchIndex: number;
	scores: number[] | undefined;
};

const BracketLine = (props: PropsType) => {
	const { roundIndex, scores, rounds } = props;
	let lineHeights;

	if (rounds === 6) {
		lineHeights = [42.4, 99.3, 197.6, 395.2, 784];
	} else if (rounds === 5) {
		lineHeights = [42.4, 99.3, 197.6, 393.32];
	} else {
		lineHeights = [42.4, 99.3, 197.6, 393.32];
	}

	const lineHeight = lineHeights[roundIndex] || 0;

	return (
		<StyledSvgLine
			width="96"
			height={lineHeight}
			style={{ position: 'absolute', right: '-96px', top: `16px` }}
		>
			{/* Team 1 lines  */}
			<line
				x1="0"
				y1="0"
				x2="48"
				y2="0"
				stroke={scores && scores[0] > scores[1] ? '#FF5733' : '#313337'}
				strokeWidth="4"
			/>
			<line
				x1="48"
				y1="0"
				x2="48"
				y2={lineHeight / 2}
				stroke={scores && scores[0] > scores[1] ? '#FF5733' : '#313337'}
				strokeWidth="2"
			/>

			{/* Team 2 lines */}
			<line
				x1="48"
				y1={lineHeight / 2}
				x2="48"
				y2={lineHeight}
				stroke={scores && scores[0] < scores[1] ? '#FF5733' : '#313337'}
				strokeWidth="2"
			/>
			<line
				x1="0"
				y1={lineHeight}
				x2="48"
				y2={lineHeight}
				stroke={scores && scores[0] < scores[1] ? '#FF5733' : '#313337'}
				strokeWidth="4"
			/>

			{/* Round connector line */}
			<line x1="47" y1={lineHeight / 2} x2="96" y2={lineHeight / 2} stroke="#FF5733" strokeWidth="2" />
		</StyledSvgLine>
	);
};

export default BracketLine;

const StyledSvgLine = styled.svg`
	line {
		stroke-dasharray: 500;
		stroke-dashoffset: 500;
		animation: draw 2s ease forwards;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
`;
