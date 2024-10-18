import { Button, Modal } from '@/ui';
import { Container } from './styles';
import { BorisWink, GamerAvatar, HeroAvatar } from '@/assets/images';
import { LinkIcon, Valorant } from '@/assets/svgs';
import { Match } from '@/components';

type PropsType = {
	team: boolean;
	setTeam: React.Dispatch<React.SetStateAction<boolean>>;
};

const Team = (props: PropsType) => {
	const { team, setTeam } = props;

	return (
		<Modal isModalOpen={team} setIsModalOpen={setTeam}>
			<Container>
				<div className="modal-head">
					<div>
						<div>
							<div>
								<img src={GamerAvatar} alt="/" />
								<h6>Rabbit rush</h6>
							</div>
							<span>CREATED 3/11/2024</span>
						</div>
						<LinkIcon />
					</div>

					<div>
						<span>Currently playing</span>
						<div>
							<div className="img-con">
								<Valorant />
							</div>
							<p>Valorant : Rebirth Resurgence express</p>
						</div>
						<div>
							<div>Valorant</div>
							<div>3 v 3</div>
							<div>300 coins</div>
						</div>
					</div>
				</div>

				<div className="stats">
					<div>
						<div>
							<span>POSITION</span>
							<p>5th</p>
						</div>
						<div>
							<span>WINS</span>
							<p>20</p>
						</div>
						<div>
							<span>LOSSES</span>
							<p>10</p>
						</div>
						<div>
							<span>MATCHES</span>
							<p>30</p>
						</div>
					</div>

					<div>
						<div>
							<img src={BorisWink} alt="/" />
							<div>
								<div>
									<p>Boris Wink</p> <LinkIcon />
								</div>
								<span>@flunk_god</span>
							</div>
						</div>
						<div>
							<img src={BorisWink} alt="/" />
							<div>
								<div>
									<p>Boris Wink</p> <LinkIcon />
								</div>
								<span>@flunk_god</span>
							</div>
						</div>
						<div>
							<img src={BorisWink} alt="/" />
							<div>
								<div>
									<p>Boris Wink</p> <LinkIcon />
								</div>
								<span>@flunk_god</span>
							</div>
						</div>
						<div>
							<img src={BorisWink} alt="/" />
							<div>
								<div>
									<p>Boris Wink</p> <LinkIcon />
								</div>
								<span>@flunk_god</span>
							</div>
						</div>
						<div>
							<img src={BorisWink} alt="/" />
							<div>
								<div>
									<p>Boris Wink</p> <LinkIcon />
								</div>
								<span>@flunk_god</span>
							</div>
						</div>
					</div>
				</div>

				<div className="history">
					<h6>Match history</h6>
					<div>
						{matchData.map((match, index) => (
							<Match
								key={index}
								title={match.title}
								date={match.date}
								time={match.time}
								svg={match.svg}
								status={match.status}
								player1={match.player1}
								player2={match.player2}
								winner={match.winner}
								scores={match.scores}
								mode={match.mode}
							/>
						))}
					</div>
				</div>

				<div className="actions">
					<Button variant="outline" size="large">
						See more
					</Button>
					<Button variant="primary" size="large">
						Go back to teams
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default Team;

const matchData = [
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		// winner: 2,
		// scores: {
		// 	player1: 2,
		// 	player2: 6,
		// },
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		winner: 1,
		scores: {
			player1: 7,
			player2: 1,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		// winner: 2,
		// scores: {
		// 	player1: 2,
		// 	player2: 6,
		// },
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		winner: 1,
		scores: {
			player1: 7,
			player2: 1,
		},
	},
];
