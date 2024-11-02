// Types for each team in a match
export type Team = {
	name: string;
	logo: string;
	score: number;
};

// Type for a match, which consists of two teams
export type Match = {
	teams: Team[];
};

// Type for a round, which consists of multiple matches
export type Round = {
	matches: Match[];
};

export type BracketProps = {
	rounds: Round[];
};

export type RoundProps = {
	matches: Match[];
};

export type MatchProps = {
	teams: Team[];
};
