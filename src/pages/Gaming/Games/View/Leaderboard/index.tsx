import { Dropdown, Table } from '@/ui';
import { Container } from './styles';
import { CaretDown, Crown, TierRadiant } from '@/assets/svgs';
import { Agent1, AvatarTable } from '@/assets/images';
import { APP_ROUTES } from '@/constants';
import { Link, useParams } from 'react-router-dom';

const GameLeaderboard = () => {
	const param = useParams();

	const tableData = players.map((player, index) => ({
		rowId: index + 1,
		rowData: [
			<div className="rank">
				<div className={player.rankClass}>
					{player.rankClass && <Crown />}
					<span>{player.rank}</span>
				</div>
			</div>,
			<span className="rank-number">{player.rank}</span>,
			<Link to={APP_ROUTES.leaderboard.player.use_overview(param.gameId, index.toString())}>
				<div className="player">
					<img src={AvatarTable} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">{player.name}</p>
						<span className="text-sm">{player.tag}</span>
					</div>
				</div>
			</Link>,
			player.rating,
			<div className="flex items-center gap-2">
				<TierRadiant />
				<span>{player.tier}</span>
			</div>,
			player.games.toString(),
			player.wins.toString(),
			<div className="win-ratio">
				<div>
					<span>{player.wins}W</span>
					<span>{player.losses}L</span>
				</div>
				{player.winRate}
			</div>,
			<div className="most-agent">
				{player.agents.map((agent, i) => (
					<img key={i} src={agent} alt="/" />
				))}
			</div>,
		],
		onRowClick: () => console.log(`clicked row ${index + 1}`),
	}));

	return (
		<Container>
			<div className="leaderboard-header">
				<h6>Apex Legends Leaderboard</h6>

				{/* <button>
					<span>Competitive stats</span>
					<CaretDown />
				</button> */}
			</div>
			<div className="action-bar">
				<Dropdown
					trigger={
						<div className="dropdown">
							Region <CaretDown className="caret" />
						</div>
					}
				>
					<div>
						<button>Global</button>
						<button>North america</button>
						<button>Europe</button>
						<button>Brazil</button>
					</div>
				</Dropdown>

				<Dropdown
					trigger={
						<div className="dropdown">
							Country <CaretDown className="caret" />
						</div>
					}
				>
					<div>
						<button>United states</button>
						<button>Bolivia</button>
						<button>Columbia</button>
						<button>Kenya</button>
						<button>Columbia</button>
					</div>
				</Dropdown>
				<Dropdown
					position="bottomRight"
					trigger={
						<div className="dropdown">
							Stats <CaretDown className="caret" />
						</div>
					}
				>
					<div>
						<button>Wins</button>
						<button>Losses</button>
					</div>
				</Dropdown>
				<Dropdown
					position="bottomRight"
					trigger={
						<div className="dropdown">
							Legend <CaretDown className="caret" />
						</div>
					}
				>
					<div>
						<button>Level 1</button>
						<button>Level 2</button>
					</div>
				</Dropdown>
			</div>
			<Table
				maxPage={3}
				loading={false}
				columnNames={[
					<span key={'rank-head-1'} className="rank-head-1">
						Rank
					</span>,
					<span key={'rank-head-2'} className="rank-head-2">
						Rank
					</span>,
					'Player',
					'Ranking rating',
					'Tier',
					'Games',
					'Wins',
					'Win ratio',
					'Most agent',
				]}
				itemsPerPageOptions={[2, 4, 6]}
				tableData={tableData}
			/>
		</Container>
	);
};

export default GameLeaderboard;

const players = [
	{
		rank: 1,
		rankClass: 'gold',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 2,
		rankClass: 'silver',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 3,
		rankClass: 'bronze',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 4,
		rankClass: '',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 5,
		rankClass: '',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 6,
		rankClass: '',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 7,
		rankClass: '',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
	{
		rank: 8,
		rankClass: '',
		name: 'Joel Henderson',
		tag: '#flunk_god',
		rating: '1330',
		tier: 'Radiant',
		games: 234,
		wins: 174,
		losses: 67,
		winRate: '87.2%',
		agents: [Agent1, Agent1, Agent1],
	},
];
