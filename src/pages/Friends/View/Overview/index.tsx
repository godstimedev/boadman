import { Pallet } from '@/ui';
import { Container } from './styles';
import {
	DiscordIcon,
	FacebookTeams,
	InstagramTeams,
	Location,
	TeamsMatches,
	TeamsTournament,
	TeamsWon,
	TwitchIcon,
	YoutubeTeams,
} from '@/assets/svgs';
import { CyberPunk } from '@/assets/images';

const FriendsOverview = () => {
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

			<div>
				<h6>Games playing</h6>

				<div>
					<div className="games-card">
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
					<div className="games-card">
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
					<div className="games-card">
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
				</div>
			</div>
		</Container>
	);
};

export default FriendsOverview;

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
		title: 'Members',
		value: '10',
	},
	{
		title: 'Prize won',
		value: '4300 coins',
	},
];
