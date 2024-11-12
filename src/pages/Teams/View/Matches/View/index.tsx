import { GamerAvatar, ManSmilling } from '@/assets/images';
import { Container } from './styles';
import { Valorant, VerifiedCheckmark } from '@/assets/svgs';
import { Button, Pallet } from '@/ui';

const TeamMatchView = () => {
	return (
		<Container>
			<div>
				<div>
					<div className="icon-con">
						<Valorant />
					</div>
					<h5>Loner epic</h5>
				</div>
				<span>Tournament match</span>
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

				<div>
					{palletList.map((item, i) => (
						<Pallet key={i} title={item.title} value={item.value} />
					))}
				</div>
			</div>
		</Container>
	);
};

export default TeamMatchView;

const palletList = [
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Rounds (per match)',
		value: '2 round ',
	},
	{
		title: 'Platform',
		value: 'Xbox',
	},
	{
		title: 'Format',
		value: 'Single Elimination',
	},
];
