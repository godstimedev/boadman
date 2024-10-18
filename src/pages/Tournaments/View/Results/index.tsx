import { GamerAvatar, Spectre } from '@/assets/images';
import { Container } from './styles';
import { GameplaySummary } from '@/components';

const Results = () => {
	return (
		<Container>
			<div className="head">
				<h6>Gameplay summary</h6>
			</div>

			<GameplaySummary
				game_time={gameSummaryData.game_time}
				rounds={gameSummaryData.rounds}
				prize={gameSummaryData.prize}
				streams={gameSummaryData.streams}
				player_a={gameSummaryData.player_a}
				player_b={gameSummaryData.player_b}
			/>
		</Container>
	);
};

export default Results;

const gameSummaryData = {
	game_time: '32 mins 35 secs',
	rounds: '2 round',
	prize: '300 coins',
	streams: '6',
	player_a: {
		name: 'Rabbit Rush',
		image: GamerAvatar,
		score: '3',
		combat_score: '201',
		damage: '120',
		kda: '1/11/1',
		headshots: '2 hits',
		bodyshots: '1 hits',
		kill: '10',
		death: '12',
		assist: '2',
		legshots: '0 hits',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: 'SMGs',
			kill: '10',
			damage: '120',
			headshots: '2 hits',
		},
	},
	player_b: {
		name: 'Rabbit Rush',
		image: GamerAvatar,
		score: '0',
		combat_score: '201',
		damage: '120',
		kda: '1/11/1',
		headshots: '2 hits',
		bodyshots: '1 hits',
		kill: '10',
		death: '12',
		assist: '2',
		legshots: '0 hits',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: 'SMGs',
			kill: '10',
			damage: '120',
			headshots: '2 hits',
		},
	},
};
