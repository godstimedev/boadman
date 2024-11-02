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
				{ name: 'Team A', logoUrl: 'url_to_logo_A' },
				{ name: 'Team B', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Team C' }, { name: 'Team D' }], score: [30, 50] },
		{
			teams: [
				{ name: 'Team A', logoUrl: 'url_to_logo_A' },
				{ name: 'Team B', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Team C' }, { name: 'Team D' }], score: [30, 50] },
		{
			teams: [
				{ name: 'Team A', logoUrl: 'url_to_logo_A' },
				{ name: 'Team B', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Team C' }, { name: 'Team D' }], score: [30, 50] },
		{
			teams: [
				{ name: 'Team A', logoUrl: 'url_to_logo_A' },
				{ name: 'Team B', logoUrl: 'url_to_logo_B' },
			],
			score: [72, 17],
		},
		{ teams: [{ name: 'Team C' }, { name: 'Team D' }], score: [30, 50] },
	],
	[
		{ teams: [{ name: 'Team A' }, { name: 'Team C' }] },
		{ teams: [{ name: 'Team A' }, { name: 'Team C' }] },
		{ teams: [{ name: 'Team A' }, { name: 'Team C' }] },
		{ teams: [{ name: 'Team A' }, { name: 'Team C' }] },
	],
	[
		{ teams: [{ name: 'Team A' }, { name: 'Team C' }] },
		{ teams: [{ name: 'Team A' }, { name: 'Team C' }] },
	],
	[{ teams: [{ name: 'Team A' }, { name: 'Team C' }] }],
	[{ teams: [{ name: 'Team A' }] }],
	// More rounds as needed
];

const Bracket: React.FC = () => {
	return (
		<StyledBracket>
			{bracketData.map((round, roundIndex) => {
				console.log(roundIndex);
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
					>
						{round.map((match, matchIndex) => {
							return (
								<div
									key={matchIndex}
									className="match"
									style={{
										marginTop: `${calculateMargin(roundIndex)}rem`,
										marginBottom: `${calculateMargin(roundIndex)}rem`,
									}}
								>
									{match.teams.map((team, teamIndex) => {
										return (
											<div
												key={teamIndex}
												className={`team connecting-lines ${teamIndex % 2 === 0 ? 'even' : 'odd'}`}
											>
												<img src={GamerAvatar} alt={`${team?.name} logo`} className="team-logo" />
												<p>{team?.name}</p>
												{/* {match.score && <span className="score">{match.score[teamIndex]}</span>} */}
												{/* {teamIndex === 0 ? (
													<div className="line top-line"></div>
												) : (
													<div className="line bottom-line"></div>
												)} */}
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
				);
			})}
		</StyledBracket>
	);
};

// Dynamically calculates spacing between matches
function calculateMargin(roundIndex: number) {
	return roundIndex === 0
		? 0
		: roundIndex === 1
		? 1.5
		: roundIndex === 2
		? 4.5
		: roundIndex === 3
		? 9.5
		: roundIndex === 4
		? 8
		: 0; // Increase spacing exponentially for each round
	// return roundIndex === 0 ? 0 : 18 * Math.pow(3, roundIndex - 1); // Increase spacing exponentially for each round
}

export default Bracket;
