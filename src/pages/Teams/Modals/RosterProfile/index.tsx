import { Button, Modal } from '@/ui';
import { Container } from './styles';
import { BorisWink } from '@/assets/images';
import {
	DiscordIcon,
	FacebookTeams,
	InstagramTeams,
	LeagueOfLegends,
	Location,
	TeamsMatches,
	TeamsTournament,
	TeamsWon,
	TwitchIcon,
	YoutubeTeams,
} from '@/assets/svgs';

type PropsType = {
	showProfile: boolean;
	setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};
const RosterProfile = (props: PropsType) => {
	const { showProfile, setShowProfile } = props;
	return (
		<Modal isModalOpen={showProfile} setIsModalOpen={setShowProfile}>
			<Container>
				<div>
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
					<div>
						<div>
							<img src={BorisWink} alt="/" />
							<h6>Boris Wink</h6>
							<span>@flunk_god . Signed up a year </span>
						</div>
						<div>
							<Button variant="outline">Challenge</Button>
							<Button variant="primary">Add friend</Button>
						</div>
					</div>
				</div>

				<div>
					<h6>About</h6>

					<p>
						Transitions between paragraphs are crucial for maintaining a smooth and coherent flow of
						ideas. These transitions can be achieved through various techniques, such as using
						transitional words and phrases (e.g., "however," "in contrast"), referring back to previous
						points, or employing thematic connections. t.
					</p>

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
				</div>

				<div>
					<h6>Player Statistics</h6>

					<div>
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} className="player-stats">
								<div>
									<div>
										<div className="img-con">
											{/* <img src={League} alt="/" /> */}
											<LeagueOfLegends />
										</div>
										<div>
											<span>Playing since 23/12/2024</span>
											<h6>League of Legend</h6>
										</div>
									</div>

									{/* <span className="badge">Captain</span> */}
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
										<TeamsTournament />
										<div>
											<span>Tournaments</span>
											<p>35</p>
										</div>
									</div>
									<div>
										<TeamsTournament />
										<div>
											<span>Ranking</span>
											<p>35</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Modal>
	);
};

export default RosterProfile;
