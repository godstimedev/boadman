import { Container } from './styles';
import { GamerAvatar, ManSmilling } from '@/assets/images';

const TeamMatch = () => {
	return (
		<Container className="team-match">
			<div className="team">
				<div className="img-con">
					<img src={GamerAvatar} alt="/" />
				</div>
				<div>
					<p>Rabbit Rush</p>
					<div>
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
					</div>
				</div>
			</div>
			<div className="versus">
				<h6>VS</h6>
				<p>Upcoming . 12/03/2024</p>
			</div>

			<div className="team">
				<div className="img-con">
					<img src={GamerAvatar} alt="/" />
				</div>
				<div>
					<p>Rabbit Rush</p>
					<div>
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
						<img src={ManSmilling} alt="/" />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default TeamMatch;
