import { ManSmilling } from '@/assets/images';
import { TeamsMatches, TeamsTournament, TeamsWon } from '@/assets/svgs';
import { Container } from './styles';

const TeamCard = () => {
	return (
		<Container>
			<div>
				<div>
					<div className="img-con">
						<img src={ManSmilling} alt="/" />
					</div>
					<div>
						<h6>Rabbit Rush</h6>
						<span>10 members</span>
					</div>
				</div>

				<div>
					<span>Created</span>
					<p>23/4/2024</p>
				</div>
			</div>
			<hr />
			<div className="middle">
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
			<hr />
			<div>
				<div>
					<img src={ManSmilling} alt="/" />
					<img src={ManSmilling} alt="/" />
					<img src={ManSmilling} alt="/" />
					<img src={ManSmilling} alt="/" />
					<p>+4</p>
				</div>

				<div>
					<span>Team Lead</span>
					<p>Flunk god</p>
				</div>
			</div>
		</Container>
	);
};

export default TeamCard;
