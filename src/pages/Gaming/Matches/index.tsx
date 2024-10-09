import { CaretDown, Valorant } from '@/assets/svgs';
import Match from '../Cards/Match';
import { Container } from './styles';
import { Dropdown } from '@/ui';
import { HeroAvatar } from '@/assets/images';

const Matches = () => {
	return (
		<Container>
			<div>
				<div className="dropdowns w-full">
					<Dropdown
						trigger={
							<div className="dropdown">
								All matches <CaretDown className="caret" />
							</div>
						}
					>
						<div>
							<button>All matches</button>
						</div>
					</Dropdown>
					<Dropdown
						trigger={
							<div className="dropdown">
								All games <CaretDown className="caret" />
							</div>
						}
					>
						<div>
							<button>All games</button>
							<button>Call of duty</button>
							<button>Apex legends</button>
							<button>Fortnite</button>
							<button>Valorant</button>
						</div>
					</Dropdown>
					<Dropdown
						trigger={
							<div className="dropdown">
								My games <CaretDown className="caret" />
							</div>
						}
					>
						<div>
							<button>My games</button>
							<button>Apex legends</button>
							<button>Fortnite</button>
							<button>Valorant</button>
						</div>
					</Dropdown>
					<div className="filter">
						<Dropdown
							position="bottomRight"
							trigger={
								<div className="flex items-center gap-4 ">
									Filter <CaretDown className="caret" />
								</div>
							}
						>
							<div>
								<button>Upcoming</button>
								<button>Finished</button>
							</div>
						</Dropdown>
					</div>
				</div>
				<div className="">
					<div className="filter-mobile">
						<Dropdown
							position="bottom"
							trigger={
								<div className="flex items-center gap-4 ">
									Filter <CaretDown className="caret" />
								</div>
							}
						>
							<div>
								<button>Upcoming</button>
								<button>Finished</button>
							</div>
						</Dropdown>
					</div>
				</div>
			</div>

			<div className="matches">
				{matchData.map((match, index) => (
					<Match
						key={index}
						title={match.title}
						date={match.date}
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
		</Container>
	);
};

export default Matches;

const matchData = [
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		date: 'WED, JUN 21, 18:30 CST',
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
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
			player1: 2,
			player2: 0,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 0,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		svg: <Valorant />,
		status: 'upcoming',
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
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 2,
			player2: 6,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		svg: <Valorant />,
		status: 'upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: '',
			name: '',
			avatar: '',
		},
		// winner: 2,
		// scores: {
		// 	player1: 2,
		// 	player2: 6,
		// },
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		svg: <Valorant />,
		status: 'upcoming',
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
		date: 'WED, JUN 21, 18:30 CST',
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
		winner: 2,
		scores: {
			player1: 3,
			player2: 4,
		},
	},
];
