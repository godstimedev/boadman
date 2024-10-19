import { Button } from '@/ui';
import { Container } from './styles';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { DashboardHeader } from '@/components';
import { APP_ROUTES } from '@/constants';

const GameView = () => {
	const location = useLocation();

	const params = useParams();

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.gaming.use_overview(params.gameId ?? ''),
		},
		{
			name: 'Matches',
			link: APP_ROUTES.gaming.use_matches(params.gameId ?? ''),
		},
		{
			name: 'Tournaments',
			link: APP_ROUTES.gaming.use_tournaments(params.gameId ?? ''),
		},
		{
			name: 'Leaderboard',
			link: APP_ROUTES.gaming.use_leaderboard(params.gameId ?? ''),
		},
	];

	return (
		<Container>
			<DashboardHeader />
			<div className="header">
				<h6>Apex legend</h6>

				<div>
					{location.pathname === `/games/${params.gameId}/overview` && (
						<Button variant="outline" size="small">
							Connect account
						</Button>
					)}
					<Button variant="primary" size="small">
						Create game
					</Button>
				</div>
			</div>

			<div className="game-con">
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

export default GameView;
