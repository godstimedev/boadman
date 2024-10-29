import { Pallet } from '@/ui';
import { Container } from './styles';
import {
	Achievement1,
	Achievement2,
	Achievement3,
	Achievement4,
	Achievement5,
	Achievement6,
	Assist,
	Death,
	DiscordIcon,
	FacebookTeams,
	GameAmount,
	GamePointEarned,
	GameTime,
	InstagramTeams,
	KdIcon,
	Kills,
	Leaderboard,
	LeagueOfLegends,
	Location,
	TeamsMatches,
	TeamsTournament,
	TeamsWon,
	TwitchIcon,
	YoutubeTeams,
} from '@/assets/svgs';
import { Agent1, CyberPunk, Sniper } from '@/assets/images';

const ProfileOverview = () => {
	return (
		<Container>
			<div>
				{PalletList.map((item, i) => (
					<Pallet key={i} title={item.title} value={item.value} />
				))}
			</div>

			<div className="about">
				<h6>About</h6>
				<p>
					Transitions between paragraphs are crucial for maintaining a smooth and coherent flow of ideas.
					These transitions can be achieved through various techniques, such as using transitional words
					and phrases (e.g., "however," "in contrast"), referring back to previous points, or employing
					thematic connections. Well-executed transitions enable readers to effortlessly follow the
					author's train of thought as they progress through the text.
				</p>

				<div>
					<div>
						<div>
							<Location />

							<div>
								<span>Country</span>
								<p>NIGERIA</p>
							</div>
						</div>
						<div>
							<Location />

							<div>
								<span>Joined</span>
								<p>23-5-2012</p>
							</div>
						</div>
						<div>
							<Location />

							<div>
								<span>Birthday</span>
								<p>APR 23 </p>
							</div>
						</div>
					</div>
					<div className="socials">
						<span>
							<FacebookTeams />
						</span>
						<span>
							<InstagramTeams />
						</span>
						<span>
							<YoutubeTeams />
						</span>
						<span>
							<TwitchIcon />
						</span>
						<span>
							<DiscordIcon />
						</span>
					</div>
				</div>
			</div>

			<div className="games-playing">
				<h6>Games playing</h6>

				<div>
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="games-card">
							<div>
								<div>
									<div className="img-con">
										<img src={CyberPunk} alt="/" />
									</div>
									<div>
										<span>Playing since 02-27-23</span>
										<h6>Apex Legend</h6>
									</div>
								</div>
							</div>
							<hr />
							<div>
								<div>
									<TeamsMatches />
									<div>
										<span>Matches</span>
										<p>324</p>
									</div>
								</div>
								<div>
									<TeamsWon />
									<div>
										<span>Win ratio</span>
										<p>200</p>
									</div>
								</div>
								<div>
									<TeamsTournament />
									<div>
										<span>Tournaments</span>
										<p>35</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="general-stats">
				<h6>General Statistics</h6>

				<div>
					<div>
						<div>
							<GameTime />
							<div>
								<span>Total time played</span>
								<p>360 hours</p>
							</div>
						</div>
						<div>
							<GameAmount />
							<div>
								<span>Total Games</span>
								<p>340</p>
							</div>
						</div>
						<div>
							<GamePointEarned />
							<div>
								<span>Total rounds won</span>
								<p>170</p>
							</div>
						</div>
						<div>
							<GamePointEarned />
							<div>
								<span>Total Earned</span>
								<p>1200 coins</p>
							</div>
						</div>
						<div>
							<Kills />
							<div>
								<span>Kills</span>
								<p>1211</p>
							</div>
						</div>
						<div>
							<Death />
							<div>
								<span>Deaths</span>
								<p>454</p>
							</div>
						</div>
						<div>
							<Assist />
							<div>
								<span>Assist</span>
								<p>1200</p>
							</div>
						</div>
						<div>
							<KdIcon />
							<div>
								<span>K/D Ratio</span>
								<p>1: 20</p>
							</div>
						</div>
					</div>
					<hr />
					<div>
						<div>
							<span>Latest Achievements</span>
							<div>
								<Achievement1 />
								<Achievement2 />
								<Achievement3 />
								<Achievement4 />
								<Achievement5 />
								<Achievement6 />
								<p>+10</p>
							</div>
						</div>
						<div>
							<span>Most used characters</span>
							<div>
								<img src={Agent1} alt="/" />
								<img src={Agent1} alt="/" />
								<img src={Agent1} alt="/" />
								<img src={Agent1} alt="/" />
							</div>
						</div>
						<div>
							<span>Most used weapon</span>
							<img src={Sniper} alt="/" />
						</div>
						<div>
							<span>Most played game</span>
							<p>Valorant</p>
						</div>
					</div>
				</div>
			</div>

			<div className="game-stats">
				<h6> Game Statistics</h6>

				<div>
					<div className="game-stats-card">
						<div>
							<div>
								<LeagueOfLegends />
								<div>
									<span>Playing since 02-27-23</span>
									<h6>League of Legend</h6>
								</div>
							</div>
						</div>
						<hr />
						<div>
							<div>
								<TeamsMatches />
								<div>
									<span>Matches</span>
									<p>324</p>
								</div>
							</div>
							<div>
								<TeamsWon />
								<div>
									<span>Won</span>
									<p>200</p>
								</div>
							</div>
							<div>
								<Leaderboard />
								<div>
									<span>Leaderboard</span>
									<p>35</p>
								</div>
							</div>
						</div>
					</div>
					<div className="game-stats-card">
						<div>
							<div>
								<LeagueOfLegends />
								<div>
									<span>Playing since 02-27-23</span>
									<h6>League of Legend</h6>
								</div>
							</div>
						</div>
						<hr />
						<div>
							<div>
								<TeamsMatches />
								<div>
									<span>Matches</span>
									<p>324</p>
								</div>
							</div>
							<div>
								<TeamsWon />
								<div>
									<span>Won</span>
									<p>200</p>
								</div>
							</div>
							<div>
								<Leaderboard />
								<div>
									<span>Leaderboard</span>
									<p>35</p>
								</div>
							</div>
						</div>
					</div>
					<div className="game-stats-card">
						<div>
							<div>
								<LeagueOfLegends />
								<div>
									<span>Playing since 02-27-23</span>
									<h6>League of Legend</h6>
								</div>
							</div>
						</div>
						<hr />
						<div>
							<div>
								<TeamsMatches />
								<div>
									<span>Matches</span>
									<p>324</p>
								</div>
							</div>
							<div>
								<TeamsWon />
								<div>
									<span>Won</span>
									<p>200</p>
								</div>
							</div>
							<div>
								<Leaderboard />
								<div>
									<span>Leaderboard</span>
									<p>35</p>
								</div>
							</div>
						</div>
					</div>
					<div className="game-stats-card">
						<div>
							<div>
								<LeagueOfLegends />
								<div>
									<span>Playing since 02-27-23</span>
									<h6>League of Legend</h6>
								</div>
							</div>
						</div>
						<hr />
						<div>
							<div>
								<TeamsMatches />
								<div>
									<span>Matches</span>
									<p>324</p>
								</div>
							</div>
							<div>
								<TeamsWon />
								<div>
									<span>Won</span>
									<p>200</p>
								</div>
							</div>
							<div>
								<Leaderboard />
								<div>
									<span>Leaderboard</span>
									<p>35</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ProfileOverview;

const PalletList = [
	{
		title: 'Most played Game',
		value: 'Valorant',
	},
	{
		title: 'Matches',
		value: '300',
	},
	{
		title: 'Tournaments',
		value: '34',
	},
	{
		title: 'Won',
		value: '234',
	},
	{
		title: 'Losses',
		value: '10',
	},
	{
		title: 'Prize won',
		value: '4300 coins',
	},
];
