import { CaretDown, Valorant } from '@/assets/svgs';
import { Container } from './styles';
import { HeroAvatar } from '@/assets/images';
import { Link } from 'react-router-dom';
import { Match } from '@/components';
import { APP_ROUTES } from '@/constants';
import { Dropdown, Pagination } from '@/ui';
import { useState } from 'react';

const GameMatches = () => {
	const [filter, setFilter] = useState('all');

	return (
		<Container>
			<div className="filter-box">
				<div className="filter-buttons">
					<button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
						All
					</button>
					<button
						className={filter === 'in-progress' ? 'active' : ''}
						onClick={() => setFilter('in-progress')}
					>
						In Progess
					</button>
					<button
						className={filter === 'upcomming' ? 'active' : ''}
						onClick={() => setFilter('upcomming')}
					>
						Upcoming
					</button>
					<button
						className={filter === 'finished' ? 'active' : ''}
						onClick={() => setFilter('finished')}
					>
						Finished
					</button>
				</div>
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

			<div className="matches">
				{matchData.map((match, index) => (
					<Link to={APP_ROUTES.matches.use_overview(index.toString())}>
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
					</Link>
				))}
			</div>

			<div className="ml-auto">
				<Pagination maxPage={3} loading={false} itemsPerPageOptions={[10, 14, 16]} />
			</div>
		</Container>
	);
};

export default GameMatches;

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
		status: 'Finished Match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'upcoming match',
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
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'finished match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'upcoming match',
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
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'upcoming match',
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
		status: 'finished match',
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
