import { APP_ROUTES } from '@/constants';
import { Container } from './styles';

import { NavLink, Outlet } from 'react-router-dom';

const Faqs = () => {
	return (
		<Container>
			<h6>Customer Service support</h6>

			<div className="faqs">
				<h6>Frequently asked questions</h6>

				<ul className="page-nav">
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

export default Faqs;

const navList = [
	{
		name: 'Teams',
		link: APP_ROUTES.faqs.teams,
	},
	{
		name: 'General Questions',
		link: APP_ROUTES.faqs.generalQuestions,
	},
	{
		name: 'Matches',
		link: APP_ROUTES.faqs.matches,
	},
	{
		name: 'Tournaments',
		link: APP_ROUTES.faqs.tournaments,
	},
	{
		name: 'Payment',
		link: APP_ROUTES.faqs.payment,
	},
	{
		name: 'Games',
		link: APP_ROUTES.faqs.games,
	},
	{
		name: 'Leaderboard',
		link: APP_ROUTES.faqs.leaderboard,
	},
	{
		name: 'Challenges',
		link: APP_ROUTES.faqs.challenges,
	},
	{
		name: 'Disputes',
		link: APP_ROUTES.faqs.disputes,
	},
	{
		name: 'Results',
		link: APP_ROUTES.faqs.results,
	},
];
