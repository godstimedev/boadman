import { Valorant } from '@/assets/svgs';
import { Container } from './styles';
import { DashboardHeader } from '@/components';
import { Button } from '@/ui';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const TournamentView = () => {
	const params = useParams();

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.tournaments.use_overview(params?.tournamentId ? params?.tournamentId : ''),
		},
		{
			name: 'Matches',
			link: APP_ROUTES.tournaments.use_matches(params?.tournamentId ? params?.tournamentId : ''),
		},
		{
			name: 'Bracket',
			link: APP_ROUTES.tournaments.use_bracket(params?.tournamentId ? params?.tournamentId : ''),
		},
		{
			name: 'Teams',
			link: APP_ROUTES.tournaments.use_teams(params?.tournamentId ? params?.tournamentId : ''),
		},
		{
			name: 'Results',
			link: APP_ROUTES.tournaments.use_results(params?.tournamentId ? params?.tournamentId : ''),
		},
	];

	return (
		<Container>
			<DashboardHeader />

			<div className="banner" />

			<div className="head">
				<div>
					<div className="icon">
						<Valorant />
					</div>
					<div>
						<span>Upcoming</span>
						<h6>Rebirth Resurgence express </h6>
						<span>Starts in 2 days 45 Minutes.</span>
					</div>
				</div>

				<div>
					<Button variant="outline" outline="tetiary">
						Leave
					</Button>
					<Button variant="primary">Set roster</Button>
				</div>
			</div>

			<div className="tournament-con">
				<ul>
					{navList.map((item) => (
						<NavLink key={item.name} to={item.link}>
							<li>{item.name}</li>
						</NavLink>
					))}
				</ul>

				<Outlet />
			</div>
		</Container>
	);
};

export default TournamentView;
