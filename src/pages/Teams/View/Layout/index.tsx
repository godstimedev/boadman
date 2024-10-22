import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '@/ui';
import { APP_ROUTES } from '@/constants';
import { DashboardHeader } from '@/components';
import { GamerAvatar } from '@/assets/images';

const TeamView = () => {
	const params = useParams();

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.teams.use_overview(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Matches',
			link: APP_ROUTES.teams.use_matches(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Tournaments',
			link: APP_ROUTES.teams.use_tournaments(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Play History',
			link: APP_ROUTES.teams.use_playHistory(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Wallet',
			link: APP_ROUTES.teams.use_wallet(params?.teamId ? params?.teamId : ''),
		},
	];

	return (
		<Container>
			<DashboardHeader />

			<div className="banner" />

			<div className="head">
				<div>
					<div className="icon">
						<img src={GamerAvatar} alt="/" />
					</div>
					<div>
						<h6>Rabbit Rush</h6>
						<span>Currently playing Valorant Loner Epic.</span>
					</div>
				</div>

				<div>
					<Button variant="outline" outline="tetiary">
						Leave team
					</Button>
					<Button variant="primary">Add member</Button>
				</div>
			</div>

			<div className="team-con">
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

export default TeamView;
