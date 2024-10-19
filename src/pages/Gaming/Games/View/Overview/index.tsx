import { Button, Pallet } from '@/ui';
import { Container } from './styles';
import { CyberPunk } from '@/assets/images';
import { FeaturedTournament } from '@/components';
import { Crown } from '@/assets/svgs';
import { APP_ROUTES } from '@/constants';
import { Link, useParams } from 'react-router-dom';

const GameOverview = () => {
	const param = useParams();

	return (
		<Container>
			<div className="banner" />

			<div>
				<div className="details">
					<div>
						<Pallet title="Game created" value="234" />
						<Pallet title="Tournaments" value="73" />
						<Pallet title="Prize won" value="34598900" />
					</div>
					<div>
						<h6>About game</h6>

						<p>
							Apex legends is the award-winning, free to play Hero shooter from Respawn entertainment.
							Master an ever growing roster of legendary characters with powerful abilities and experience
							strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle
							royale,
						</p>

						<div>
							<span>Action</span>
							<span>Shooter</span>
							<span>Battle royale</span>
						</div>
					</div>
				</div>

				<div className="aside">
					<div>
						<h6>Leaderboards</h6>

						<div className="leaderboard">
							<div>
								<div>
									<span className="rank">
										<Crown /> 1
									</span>
									<h6>Flunk_god</h6>
								</div>

								<div>
									<span>Rank Score</span>
									<p>233455</p>
								</div>
							</div>
							<div>
								<div>
									<span className="rank silver">
										<Crown /> 2
									</span>
									<h6>Flunk_god</h6>
								</div>

								<div>
									<span>Rank Score</span>
									<p>233455</p>
								</div>
							</div>
							<div>
								<div>
									<span className="rank bronze">
										<Crown /> 3
									</span>
									<h6>Flunk_god</h6>
								</div>

								<div>
									<span>Rank Score</span>
									<p>233455</p>
								</div>
							</div>

							<Link to={APP_ROUTES.gaming.use_leaderboard(param.gameId ?? '')}>
								<Button variant="outline" size="large">
									See more
								</Button>
							</Link>
						</div>
					</div>

					<div>
						<h6>Featured tournament</h6>

						<div>
							{tournamentList.map((tournament, index) => (
								<FeaturedTournament
									key={index}
									image={tournament.image}
									categories={tournament.categories}
									status={tournament.status}
									period={tournament.period}
									title={tournament.title}
									description={tournament.description}
									prize={tournament.prize}
									game_mode={tournament.game_mode}
									game_slot={tournament.game_slot}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default GameOverview;

const tournamentList = [
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
];
