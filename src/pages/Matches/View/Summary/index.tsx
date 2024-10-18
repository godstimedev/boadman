import { HeroAvatar, Spectre } from '@/assets/images';
import { Container } from './styles';
import { GameplaySummary } from '@/components';

const MatchSummary = () => {
	return (
		<Container>
			<div className="head">
				<h6>Gameplay summary</h6>

				<button>See comment</button>
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

export default MatchSummary;

const gameSummaryData = {
	game_time: '',
	rounds: '2 round',
	prize: '300 coins',
	streams: '',
	player_a: {
		name: 'Flunk_god',
		image: HeroAvatar,
		score: '',
		combat_score: '',
		damage: '',
		kda: '',
		headshots: '',
		bodyshots: '',
		kill: '',
		death: '',
		assist: '',
		legshots: '',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: '',
			kill: '',
			damage: '',
			headshots: '',
		},
	},
	player_b: {
		name: 'Rabbit Rush',
		image: HeroAvatar,
		score: '',
		combat_score: '',
		damage: '',
		kda: '',
		headshots: '',
		bodyshots: '',
		kill: '',
		death: '',
		assist: '',
		legshots: '',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: '',
			kill: '',
			damage: '',
			headshots: '',
		},
	},
};
