import { Valorant } from '@/assets/svgs';
import { Container } from './styles';
import { HeroAvatar } from '@/assets/images';

const Match = () => {
	return (
		<Container>
			<div>
				<div>
					<span className="icon-con">
						<Valorant />
					</span>
					<div>
						<p>Loner epic</p>
						<span>WED, JUN 21, 18:30 CST</span>
					</div>
				</div>
				<span className="badge">Upcoming</span>
			</div>

			<hr />

			<div>
				<div>
					<div>
						<span>Player 1</span>
						<div className="player">
							<div className="img-con">
								<img src={HeroAvatar} alt="/" />
							</div>
							<p> Flunk god</p>
						</div>
					</div>
					<p>vs</p>
					<div>
						<span>Player 2</span>
						<div className="player">
							<div className="img-con">
								<img src={HeroAvatar} alt="/" />
							</div>
							<p> Flunk god</p>
						</div>
					</div>
				</div>

				<div>
					<span>Mode</span>
					<p>1v1</p>
				</div>
			</div>
		</Container>
	);
};

export default Match;
