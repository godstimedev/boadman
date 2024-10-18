import { Container } from './styles';
import { EyeIcon, WinnerCheck } from '@/assets/svgs';

type PropType = {
	game_time: string;
	rounds: string;
	prize: string;
	streams: string;
	player_a?: {
		name: string | undefined;
		image: string | undefined;
		score: string | undefined;
		combat_score: string | undefined;
		damage: string | undefined;
		kda: string | undefined;
		headshots: string | undefined;
		bodyshots: string | undefined;
		kill: string | undefined;
		death: string | undefined;
		assist: string | undefined;
		legshots: string | undefined;
		weapons: {
			name: string | undefined;
			image: string | undefined;
			type: string | undefined;
			kill: string | undefined;
			damage: string | undefined;
			headshots: string | undefined;
		};
	};
	player_b?: {
		name: string | undefined;
		image: string | undefined;
		score: string | undefined;
		combat_score: string | undefined;
		damage: string | undefined;
		kda: string | undefined;
		headshots: string | undefined;
		bodyshots: string | undefined;
		kill: string | undefined;
		death: string | undefined;
		assist: string | undefined;
		legshots: string | undefined;
		weapons: {
			name: string | undefined;
			image: string | undefined;
			type: string | undefined;
			kill: string | undefined;
			damage: string | undefined;
			headshots: string | undefined;
		};
	};
};

const GameplaySummary = (props: PropType) => {
	const { game_time, rounds, prize, streams, player_a, player_b } = props;

	return (
		<Container>
			<div className="stats">
				<div>
					<p>Single Elimination</p>
					<span>Bind</span>
				</div>

				<div>
					<div>
						<span>Player A</span>
						<p>{player_a?.score ? player_a?.score : '-'}</p>
					</div>
					<p>:</p>
					<div>
						<span>Player B</span>
						<p>{player_b?.score ? player_b?.score : '-'}</p>
					</div>
				</div>

				<div>
					<span>23/04/2024 8:00PM EST</span>
					<p>{game_time ? game_time : '-'}</p>
				</div>

				<div>
					<span>Rounds</span>
					<p>{rounds ? rounds : '-'} </p>
				</div>
				<div>
					<span>Prize</span>
					<p>{prize ? prize : '-'} </p>
				</div>
				<div>
					<span>Streams</span>
					<p>{streams ? streams : '-'}</p>
				</div>
			</div>

			<div className="stats-mobile">
				<div>
					<div>
						<p>Single Elimination</p>
						<span>Bind</span>
					</div>

					<div>
						<div>
							<span>Player A</span>
							<p>{player_a?.score ? player_a?.score : '-'}</p>
						</div>
						<p>:</p>
						<div>
							<span>Player B</span>
							<p>{player_b?.score ? player_b?.score : '-'}</p>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>23/04/2024 8:00PM EST</span>
						<p>{game_time ? game_time : '-'}</p>
					</div>

					<div>
						<span>Rounds</span>
						<p>{rounds ? rounds : '-'} </p>
					</div>
					<div>
						<span>Prize</span>
						<p>{prize ? prize : '-'} </p>
					</div>
					<div>
						<span>Streams</span>
						<p>{streams ? streams : '-'}</p>
					</div>
				</div>
			</div>

			<div className="players">
				<div className="player-1">
					<div>
						<div>
							<span>
								Player A <span className="quote">(Game creator)</span>
							</span>
							<div>
								<div className="img-con">
									<img src={player_a?.image} alt="/" />
								</div>
								<p>{player_a?.name}</p>
								<EyeIcon />
							</div>
						</div>

						{player_a?.score !== undefined &&
						player_b?.score !== undefined &&
						player_a?.score > player_b?.score ? (
							<span className="winner-badge">
								<WinnerCheck /> Winner
							</span>
						) : null}

						<p>{player_a?.score ? player_a?.score : '-'}</p>
					</div>

					<hr />

					<div className="middle">
						<div>
							<span>Combat score</span>
							<p>{player_a?.combat_score ? player_a?.combat_score : '-'}</p>
						</div>
						<div>
							<span>Damage</span>
							<p>{player_a?.damage ? player_a?.damage : '-'}</p>
						</div>
						<div>
							<span>KDA</span>
							<p>{player_a?.kda ? player_a?.kda : '-'}</p>
						</div>
						<div>
							<span>Headshots</span>
							<p>{player_a?.headshots ? player_a?.headshots : '-'}</p>
						</div>
						<div>
							<span>Bodyshots</span>
							<p>{player_a?.bodyshots ? player_a?.bodyshots : '-'}</p>
						</div>
						<div>
							<span>Kill</span>
							<p>{player_a?.kill ? player_a?.kill : '-'}</p>
						</div>
						<div>
							<span>Death</span>
							<p>{player_a?.death ? player_a?.death : '-'}</p>
						</div>
						<div>
							<span>Assist</span>
							<p>{player_a?.assist ? player_a?.assist : '-'}</p>
						</div>
						<div>
							<span>Legshots</span>
							<p>{player_a?.legshots ? player_a?.legshots : '-'}</p>
						</div>
					</div>

					<hr />

					<div>
						<p>Weapons</p>

						<div>
							<div>
								<img src={player_a?.weapons.image} alt={player_a?.weapons.name} />
								<div>
									<p>{player_a?.weapons.name ? player_a?.weapons.name : '-------'}</p>

									{player_a?.weapons.type ? <span>{player_a?.weapons.type}</span> : <p>{'--'}</p>}
								</div>
							</div>

							<div>
								<span>Kill</span>
								<p>{player_a?.weapons.kill ? player_a?.weapons.kill : '-'}</p>
							</div>
							<div>
								<span>Damage</span>
								<p>{player_a?.weapons.damage ? player_a?.weapons.damage : '-'}</p>
							</div>
							<div>
								<span>Headshots</span>
								<p>{player_a?.weapons.headshots ? player_a?.weapons.kill : '-'}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="player-2">
					<div>
						<div>
							<span>
								Player B <span className="quote">(Challenger)</span>
							</span>
							<div>
								<div className="img-con">
									<img src={player_b?.image} alt="/" />
								</div>
								<p>{player_b?.name}</p>
								<EyeIcon />
							</div>
						</div>

						{player_a?.score !== undefined &&
						player_b?.score !== undefined &&
						player_b?.score > player_a?.score ? (
							<span className="winner-badge">
								<WinnerCheck /> Winner
							</span>
						) : null}

						<p>{player_b?.score ? player_b?.score : '-'}</p>
					</div>

					<hr />

					<div className="middle">
						<div>
							<span>Combat score</span>
							<p>{player_b?.combat_score ? player_b?.combat_score : '-'}</p>
						</div>
						<div>
							<span>Damage</span>
							<p>{player_b?.damage ? player_b?.damage : '-'}</p>
						</div>
						<div>
							<span>KDA</span>
							<p>{player_b?.kda ? player_b?.kda : '-'}</p>
						</div>
						<div>
							<span>Headshots</span>
							<p>{player_b?.headshots ? player_b?.headshots : '-'}</p>
						</div>
						<div>
							<span>Bodyshots</span>
							<p>{player_b?.bodyshots ? player_b?.bodyshots : '-'}</p>
						</div>
						<div>
							<span>Kill</span>
							<p>{player_b?.kill ? player_b?.kill : '-'}</p>
						</div>
						<div>
							<span>Death</span>
							<p>{player_b?.death ? player_b?.death : '-'}</p>
						</div>
						<div>
							<span>Assist</span>
							<p>{player_b?.assist ? player_b?.assist : '-'}</p>
						</div>
						<div>
							<span>Legshots</span>
							<p>{player_b?.legshots ? player_b?.legshots : '-'}</p>
						</div>
					</div>

					<hr />

					<div>
						<p>Weapons</p>

						<div>
							<div>
								<img src={player_b?.weapons.image} alt={player_b?.weapons.name} />
								<div>
									<p>{player_b?.weapons.name ? player_b?.weapons.name : '-------'}</p>
									{player_b?.weapons.type ? <span>{player_b?.weapons.type}</span> : <p>{'--'}</p>}
								</div>
							</div>

							<div>
								<span>Kill</span>
								<p>{player_b?.weapons.kill ? player_b?.weapons.kill : '-'}</p>
							</div>
							<div>
								<span>Damage</span>
								<p>{player_b?.weapons.damage ? player_b?.weapons.damage : '-'}</p>
							</div>
							<div>
								<span>Headshots</span>
								<p>{player_b?.weapons.headshots ? player_b?.weapons.headshots : '-'}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default GameplaySummary;
