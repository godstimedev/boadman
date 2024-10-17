export type MatchProps = {
	key: number;
	title: string;
	date: string;
	time?: string;
	svg: React.ReactNode;
	status: string;
	winner?: number;
	mode: string;
	player1?: {
		id?: number | string;
		name?: string;
		avatar?: string;
	};
	player2?: {
		id?: number | string;
		name?: string;
		avatar?: string;
	};
	scores?: {
		player1?: number;
		player2?: number;
	};
};
