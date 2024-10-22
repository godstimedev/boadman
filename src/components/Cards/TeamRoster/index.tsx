import { HeroAvatar } from '@/assets/images';
import { TeamsMatches, TeamsTournament, TeamsWon } from '@/assets/svgs';
import { Container } from './styles';

const TeamRoster = () => {
	return (
		<Container>
			<div>
				<div>
					<div className="img-con">
						<img src={HeroAvatar} alt="/" />
					</div>
					<div>
						<h6>Flunk_god</h6>
						<span>Member since 23/12/2024</span>
					</div>
				</div>

				<span className="badge">Captain</span>
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
			</div>
		</Container>
	);
};

export default TeamRoster;
