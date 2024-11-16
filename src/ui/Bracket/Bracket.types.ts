// Styled bracket props type
export type StyledBracketProps = {
	$roundsAmount: number;
};

// Bracket component types
type Team = {
	name: string;
	logoUrl?: string;
};

type Match = {
	teams: [Team, Team?];
	score?: [number, number];
};

export type Round = Match[];
