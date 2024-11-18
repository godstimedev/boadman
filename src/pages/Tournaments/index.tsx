import { FeaturedTournament } from '@/components';
import { Container } from './styles';
import { CyberPunk } from '@/assets/images';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { useState } from 'react';
import { Dropdown, InputGroup, Pagination } from '@/ui';
import { CaretDown } from '@/assets/svgs';
import { GeneralChangeEventType } from '@/types';

const Tournaments = () => {
	const [filter, setFilter] = useState('all');
	const [formData, setFormData] = useState({
		search: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Container>
			{/*      */}
			<div className="head">
				<h6>All Tournaments</h6>

				<div className="filter-box">
					<div>
						<Dropdown
							trigger={
								<div className="dropdown">
									All games <CaretDown className="caret" />
								</div>
							}
						>
							<div>
								<button>All games</button>
								<button>COD</button>
								<button>Valorant</button>
								<button>Fortnite</button>
								<button>League of Legends</button>
							</div>
						</Dropdown>
					</div>

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

					<div>
						<InputGroup
							type="search"
							name="search"
							placeholder="Search game"
							autoComplete="off"
							value={formData.search}
							onChange={handleChange}
						/>

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

			<Pagination maxPage={30} loading={false} itemsPerPageOptions={[10, 14, 16]} />
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

{
	/*
	
	<div className="filter-con">
					<div>
						<button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
							All
						</button>
						<button
							className={filter === 'upcoming' ? 'active' : ''}
							onClick={() => setFilter('upcoming')}
						>
							Upcoming
						</button>
						<button
							className={filter === 'in progress' ? 'active' : ''}
							onClick={() => setFilter('in progress')}
						>
							In Progress
						</button>
						<button
							className={filter === 'finished' ? 'active' : ''}
							onClick={() => setFilter('finished')}
						>
							Finished
						</button>
					</div>

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
*/
}
