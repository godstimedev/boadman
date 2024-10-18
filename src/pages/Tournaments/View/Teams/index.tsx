import { GamerAvatar, ManSmilling } from '@/assets/images';
import { Container } from './styles';
import { useState } from 'react';
import Team from '../Modals/Team';

const Teams = () => {
	const [team, setTeam] = useState(false);
	return (
		<Container>
			{Array.from({ length: 8 }).map((_, i) => (
				<div tabIndex={1} onClick={() => setTeam(true)} key={i} className="team-card">
					<div>
						<div>
							<div className="img-con">
								<img src={GamerAvatar} alt="/" />
							</div>
							<div>
								<p>Rabbit Rush</p>
								<span>Joined 02-27-23</span>
							</div>
						</div>
					</div>

					<hr />

					<div>
						<div>
							<span>Team lead</span>
							<div>
								<div className="img-con">
									<img src={ManSmilling} alt="/" />
								</div>
								<p>Flunk god</p>
							</div>
						</div>

						<div>
							<img src={ManSmilling} alt="/" />
							<img src={ManSmilling} alt="/" />
							<img src={ManSmilling} alt="/" />
							<img src={ManSmilling} alt="/" />
							<img src={ManSmilling} alt="/" />
							<p>+4</p>
						</div>
					</div>
				</div>
			))}

			<Team team={team} setTeam={setTeam} />
		</Container>
	);
};

export default Teams;
