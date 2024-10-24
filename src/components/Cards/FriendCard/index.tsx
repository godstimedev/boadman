import { GamerAvatar } from '@/assets/images';
import { TeamsMatches, TeamsTournament, TeamsWon } from '@/assets/svgs';
import { Container } from './styles';

const FriendCard = () => {
	return (
		<Container>
			<div>
				<div>
					<div className="img-con">
						<img src={GamerAvatar} alt="/" />
					</div>
					<div>
						<h6>Joel Henderson</h6>
						<span>Flunk_god</span>
					</div>
				</div>

				<div>
					<span>Added</span>
					<p>23/4/2024</p>
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

export default FriendCard;
