import { useState } from 'react';
import { Container } from './styles';
import { Dropdown, Pagination } from '@/ui';
import { CaretDown } from '@/assets/svgs';
import { ApexLegendsFeatured } from '@/assets/images';
import { FeaturedTournament } from '@/components';
import { APP_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

const GameTournaments = () => {
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

			<div className="ml-auto">
				<Pagination maxPage={3} loading={false} itemsPerPageOptions={[10, 14, 16]} />
			</div>
		</Container>
	);
};

export default GameTournaments;

const tournamentList = [
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: ApexLegendsFeatured,
		categories: ['Apex Legend', 'Team'],
		status: 'IN PROGRESS',
		period: ' Finishing in 20 days',
		title: 'Battle Royale Crimson',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... ',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
];
