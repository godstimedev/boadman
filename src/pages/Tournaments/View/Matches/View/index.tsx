import { GamerAvatar, ManSmilling } from '@/assets/images';
import { Container } from './styles';
import { VerifiedCheckmark } from '@/assets/svgs';
import { Button } from '@/ui';

const TournamentMatchView = () => {
	return (
		<Container>
			<div>
				<h5>Match week 13</h5>
				<span>Round of 16</span>
			</div>

			<div className="wrapper">
				<div>
					<div>
						<div className="team-a">
							<div>
								<img src={GamerAvatar} alt="/" />
								<div>
									<h6>Rabbit Rush</h6>
									<span>Created 23/11/2024</span>
								</div>
							</div>
						</div>
						<div className="team-members">
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
						</div>
					</div>

					<div>
						<span>VS</span>

						<h4>0 : 0</h4>

						<div>
							<span>Upcoming</span>
							<p>Starts 22-06-2024 22:00 PM EST</p>

							<Button variant="primary">Start Match</Button>
						</div>
					</div>

					<div>
						<div className="team-b">
							<div>
								<img src={GamerAvatar} alt="/" />
								<div>
									<h6>Rabbit Rush</h6>
									<span>Created 23/11/2024</span>
								</div>
							</div>
						</div>
						<div className="team-members">
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
							<div>
								<div>
									<img src={ManSmilling} alt="/" />

									<div>
										<p>Joel Henderson</p>
										<span>Flunk_god</span>
									</div>
								</div>

								<VerifiedCheckmark />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default TournamentMatchView;
