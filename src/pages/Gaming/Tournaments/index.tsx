import { CaretDown } from '@/assets/svgs';
import { Container } from './styles';
import { FeaturedTournament } from '@/components';
import { CyberPunk } from '@/assets/images';
import { Dropdown } from '@/ui';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Tournaments = () => {
	return (
		<Container>
			<div className="dropdowns">
				<Dropdown
					trigger={
						<div className="dropdown">
							All tournaments <CaretDown className="caret" />
						</div>
					}
					position="bottom"
				>
					<div>
						<button>All matches</button>
						<button>Upcoming</button>
						<button>Finished</button>
						<button>In progress</button>
						<button>Cancelled</button>
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
						<button>Fortnite</button>
						<button>Valorant</button>
						<button>League of legends</button>
					</div>
				</Dropdown>
			</div>

			<div className="tournaments">
				{tournamentList.map((tournament, index) => (
					<Link to={APP_ROUTES.tournaments.use_overview(index.toString())} key={index}>
						<FeaturedTournament
							image={tournament.image}
							categories={tournament.categories}
							status={tournament.status}
							period={tournament.period}
							title={tournament.title}
							description={tournament.description}
							prize={tournament.prize}
							game_mode={tournament.game_mode}
							game_slot={tournament.game_slot}
						/>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Tournaments;

const tournamentList = [
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunk,
		categories: ['Call of duty', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Rebirth Resurgence express ',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
];
