import { Valorant } from '@/assets/svgs';
import { Container } from './styles';
import { GamerAvatar, ManSmilling } from '@/assets/images';

type PropsType = {
	score?: boolean;
};

const TeamMatchFull = (props: PropsType) => {
	const { score } = props;
	return (
		<Container className="team-match">
			<div>
				<div className="icon-con">
					<Valorant />
				</div>
				<div>
					<p>Loner epic</p>
					<span>Upcoming . WED, JUN 21, 18:30 CST</span>
				</div>
			</div>
			<div>
				<span>Single Match</span>
			</div>
			<div className="mode">
				<span>Mode</span>
				<p>1v1</p>
			</div>
			<div className="prize">
				<span>Prize</span>
				<p>300 coins</p>
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
			<div className="versus">
				{score ? (
					<div>
						<h6 className="active">5</h6>
						<span>:</span>
						<h6>3</h6>
					</div>
				) : (
					<h6>VS</h6>
				)}
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

export default TeamMatchFull;
