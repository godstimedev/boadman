import { StyledBracket } from './styles';
import { GamerAvatar } from '@/assets/images';
import { BracketLines } from '@/assets/svgs';
import { Round } from './Bracket.types';

const bracketData: Round[] = [
	// Example structure for the rounds and matches
	// [
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// 	{
	// 		teams: [
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_A' },
	// 			{ name: 'Rabbit Rush', logoUrl: 'url_to_logo_B' },
	// 		],
	// 		score: [72, 17],
	// 	},
	// 	{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [30, 50] },
	// ],
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
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [72, 87] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [72, 87] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [72, 17] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [72, 87] },
	],
	[
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [0, 0] },
		{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [0, 0] },
	],
	[{ teams: [{ name: 'Rabbit Rush' }, { name: 'Rabbit Rush' }], score: [0, 0] }],
	[{ teams: [{ name: 'Rabbit Rush' }] }],
	// More rounds as needed
];

const Bracket = () => {
	return (
		<StyledBracket $roundsAmount={bracketData.length}>
			<div className="wrapper">
				{bracketData.map((round, roundIndex) => {
					const length = bracketData.length;
					return (
						<div
							key={roundIndex}
							className={`round ${
								roundIndex === length - 1
									? 'winner'
									: roundIndex === length - 2
									? 'final'
									: roundIndex === 3
									? 'fourth-round'
									: roundIndex === 2
									? 'third-round'
									: roundIndex === 1
									? 'second-round'
									: 'first-round'
							}`}
							style={{
								paddingTop: `${calculatePadding(roundIndex)}rem`,
								paddingBottom: `${calculatePadding(roundIndex)}rem`,
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
										{match.teams.length === 2 && (
											<BracketLines
												rounds={length}
												scores={match.score}
												roundIndex={roundIndex}
												matchIndex={matchIndex}
											/>
										)}
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

// Padding top and bottom for each rounds in rem
function calculatePadding(roundIndex: number) {
	return roundIndex === 0
		? 0
		: roundIndex === 1
		? 1.325
		: roundIndex === 2
		? 4.425
		: roundIndex === 3
		? 10.6
		: roundIndex === 4
		? 22.95
		: 0;
}
