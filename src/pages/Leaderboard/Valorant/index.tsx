import { CaretDown, Crown, TierRadiant } from '@/assets/svgs';
import { Container } from './styles';
import { Dropdown, Table } from '@/ui';
import { Agent1, AvatarTable } from '@/assets/images';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Valorant = () => {
	const tableData = [
		{
			rowId: 1,
			rowData: [
				<div className="rank">
					<div className="gold">
						<Crown />
						<span>1</span>
					</div>
				</div>,
				<span className="rank-number">1</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 2,
			rowData: [
				<div className="rank">
					<div className="silver">
						<Crown />
						<span>2</span>
					</div>
				</div>,
				<span className="rank-number">2</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 3,
			rowData: [
				<div className="rank">
					<div className="bronze">
						<Crown />
						<span>3</span>
					</div>
				</div>,
				<span className="rank-number">3</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 4,
			rowData: [
				<div className="rank">
					<div>
						<span>4</span>
					</div>
				</div>,
				<span className="rank-number">4</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 5,
			rowData: [
				<div className="rank">
					<div>
						<span>5</span>
					</div>
				</div>,
				<span className="rank-number">5</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 6,
			rowData: [
				<div className="rank">
					<div>
						<span>6</span>
					</div>
				</div>,
				<span className="rank-number">6</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 7,
			rowData: [
				<div className="rank">
					<div>
						<span>6</span>
					</div>
				</div>,
				<span className="rank-number">6</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 8,
			rowData: [
				<div className="rank">
					<div>
						<span>8</span>
					</div>
				</div>,
				<span className="rank-number">8</span>,
				<Link to={APP_ROUTES.playerProfile.initial}>
					<div className="player">
						<img src={AvatarTable} alt="/" className="w-4 h-4" />
						<div>
							<p className="font-medium text-sm">Joel Henderson </p>
							<span className=" text-sm">#flunk_god</span>
						</div>
					</div>
				</Link>,
				'1330',
				<div className="flex items-center gap-2">
					<TierRadiant />
					<span>Radiant</span>
				</div>,
				'234',
				'174',
				<div className="win-ratio">
					<div>
						<span>174W</span>
						<span>67L</span>
					</div>
					87.2%
				</div>,
				<div className="most-agent">
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
					<img src={Agent1} alt="/" />
				</div>,
			],
			onRowClick: () => console.log('clicked'),
		},
	];

	return (
		<Container>
			<div className="header">
				<h6>Valorant Leaderboard</h6>

				<button>
					<span>Competitive stats</span>
					<CaretDown />
				</button>
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
							Episode 7- act 3 <CaretDown className="caret" />
						</div>
					}
				>
					<div>
						<button>Episode 8 - act 2</button>
						<button>Episode 8 - act 1</button>
						<button>Episode 7 - act 3</button>
						<button>Episode 7 - act 2</button>
						<button>Episode 7 - act 1</button>
						<button>Episode 7 - act 1</button>
						<button>Episode 7 - act 1</button>
						<button>Episode 7 - act 1</button>
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

export default Valorant;
