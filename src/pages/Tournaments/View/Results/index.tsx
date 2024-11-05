import { GamerAvatar, ManSmilling } from '@/assets/images';
import { Container } from './styles';
import { APP_ROUTES } from '@/constants';
import { Link, useParams } from 'react-router-dom';

const Results = () => {
	const params = useParams();

	return (
		<Container>
			<div>
				<h6>Match week 1</h6>

				<div className="results">
					{Array.from({ length: 5 }).map((_, i) => (
						<Link
							key={i}
							to={APP_ROUTES.tournaments.use_result(
								params?.id ? params?.id.toString() : '0',
								i.toString()
							)}
						>
							<div className="team-result">
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

								<h6>3</h6>

								<div className="versus">
									<h6>VS</h6>
									<p>Finished . 12/03/2024</p>
								</div>

								<h6>0</h6>

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
			</div>
			<div>
				<h6>Match week 2</h6>

				<div className="results">
					{Array.from({ length: 5 }).map((_, i) => (
						<Link
							key={i}
							to={APP_ROUTES.tournaments.use_result(
								params?.id ? params?.id.toString() : '0',
								i.toString()
							)}
						>
							<div className="team-result">
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

								<h6>3</h6>

								<div className="versus">
									<h6>VS</h6>
									<p>Finished . 12/03/2024</p>
								</div>

								<h6>0</h6>

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
			</div>
		</Container>
	);
};

export default Results;
