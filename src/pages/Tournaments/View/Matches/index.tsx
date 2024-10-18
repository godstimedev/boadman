import { GamerAvatar, ManSmilling } from '@/assets/images';
import { Container } from './styles';
import { APP_ROUTES } from '@/constants';
import { Link, useParams } from 'react-router-dom';

const Matches = () => {
	const params = useParams();

	return (
		<Container>
			<h6>Match Schedule</h6>

			<div className="matches">
				{Array.from({ length: 5 }).map((_, i) => (
					<Link
						key={i}
						to={APP_ROUTES.tournaments.use_match(params?.id ? params?.id.toString() : '0', i.toString())}
					>
						<div className="team-match">
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
						</div>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Matches;
