import { Link } from 'react-router-dom';
import { Container } from './styles';
import { APP_ROUTES } from '@/constants';
import { FeaturedTournament } from '@/components';
import { ApexLegendsFeatured } from '@/assets/images';
import { Pagination } from '@/ui';

const TeamTournament = () => {
	return (
		<Container>
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

export default TeamTournament;

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
