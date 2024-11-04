// import { BracketProps } from "./Bracket.types";
// import Round from "./Round";
// import { StyledBracket } from "./styles";

// const Bracket = (props:BracketProps) => {
//     const{rounds} = props

// 	return <StyledBracket>
//          {rounds.map((round, index) => (
//         <Round key={index} matches={round.matches} />
//       ))}
//     </StyledBracket>;
// };

// export default Bracket;

import React from 'react';
import { StyledBracket } from './styles';
import { GamerAvatar } from '@/assets/images';
// import './Bracket.css';

type Team = {
	name: string;
	logoUrl?: string;
};

type Match = {
	teams: [Team, Team?];
	score?: [number, number];
};

type Round = Match[];

const bracketData: Round[] = [
	// Example structure for the rounds and matches
	[
		{
			teams: [
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
		{
			teams: [
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
		{
			teams: [
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
		{
			teams: [
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
				{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	],
	[
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] },
	],
	[
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] },
	],
	[{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }] }],
	[{ teams: [{ name: 'Rabbit Rush' }] }],
	// More rounds as needed
];

const Bracket = () => {
	return (
		<StyledBracket>
			<div className="wrapper">
				{bracketData.map((round, roundIndex) => {
					return (
						<div
							key={roundIndex}
							className={`round ${
								roundIndex === 4
									? 'last-round'
									: roundIndex === 3
									? 'fourth-round'
									: roundIndex === 2
									? 'third-round'
									: roundIndex === 1
									? 'second-round'
									: ''
							}`}
							style={{
								paddingTop: `${calculateMargin(roundIndex)}rem`,
								paddingBottom: `${calculateMargin(roundIndex)}rem`,
							}}
						>
							{round.map((match, matchIndex) => {
								return (
									<div key={matchIndex} className="match">
										{match.teams.map((team, teamIndex) => {
											return (
												<div
													key={teamIndex}
													className={`team connecting-lines ${teamIndex % 2 === 0 ? 'even' : 'odd'}`}
												>
													<img src={GamerAvatar} alt={`${team?.name} logo`} className="team-logo" />
													<p>{team?.name}</p>
												</div>
											);
										})}
										{match.teams.length === 2 && <SVGLine roundIndex={roundIndex} matchIndex={matchIndex} />}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</StyledBracket>
	);
};

export default Bracket;

// Dynamically calculates spacing between matches
function calculateMargin(roundIndex: number) {
	return roundIndex === 0
		? 0
		: roundIndex === 1
		? 1.325
		: roundIndex === 2
		? 4.425
		: roundIndex === 3
		? 10.6
		: 0; // Increase spacing exponentially for each round
	// return roundIndex === 0 ? 0 : 18 * Math.pow(3, roundIndex - 1); // Increase spacing exponentially for each round
}

// SVGLine Component for rendering connector lines
const SVGLine: React.FC<{ roundIndex: number; matchIndex: number }> = ({
	roundIndex,
	// matchIndex,
}) => {
	const lineHeights = [42.4, 99.3, 197.6, 393.32];
	const lineHeight = lineHeights[roundIndex] || 0;

	return (
		<svg
			className="svg-connector"
			width="96"
			height={lineHeight}
			// -${yOffset}px
			style={{ position: 'absolute', right: '-96px', top: `16px` }}
		>
			<line x1="0" y1="0" x2="48" y2="0" stroke="#313337" strokeWidth="4" />
			<line x1="48" y1="0" x2="48" y2={lineHeight / 2} stroke="#313337" strokeWidth="2" />
			<line x1="48" y1={lineHeight / 2} x2="48" y2={lineHeight} stroke="#FF5733" strokeWidth="2" />
			<line x1="0" y1={lineHeight} x2="48" y2={lineHeight} stroke="#FF5733" strokeWidth="4" />

			<line x1="47" y1={lineHeight / 2} x2="96" y2={lineHeight / 2} stroke="#FF5733" strokeWidth="2" />
		</svg>
	);
};
