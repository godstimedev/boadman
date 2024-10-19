import { DashboardHeader } from '@/components';
import { Container } from './styles';
import { APP_ROUTES } from '@/constants';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Button } from '@/ui';

const Gaming = () => {
	const location = useLocation();

	return (
		<Container>
			<DashboardHeader />
			<div className="head">
				<h6>Gaming</h6>

				{location.pathname === '/games/my-challenges' && (
					<Button variant="primary" size="small">
						Make Challenge
					</Button>
				)}
			</div>

			<div className="gaming-con">
				<ul>
					{navList.map((item) => (
						<NavLink key={item.name} to={item.link} end>
							<li>{item.name}</li>
						</NavLink>
					))}
				</ul>

				<Outlet />
			</div>
		</Container>
	);
};

export default Gaming;

const navList = [
	{
		name: 'Games',
		link: APP_ROUTES.gaming.initial,
	},
	{
		name: 'My Matches',
		link: APP_ROUTES.gaming.myMatches,
	},
	{
		name: 'My Tournaments',
		link: APP_ROUTES.gaming.myTournaments,
	},
	{
		name: 'My Challenges',
		link: APP_ROUTES.gaming.myChallenges,
	},
];
