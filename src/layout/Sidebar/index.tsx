import {
	BoadmanLogo,
	Dashboard,
	DashboardActive,
	Faqs,
	Friends,
	Gaming,
	Leaderboard,
	Logout,
	Profile,
	Settings,
	Stream,
	Teams,
	Tournaments,
	Wallet,
} from '@/assets/svgs';
import { Aside } from './styles';
import { APP_ROUTES } from '@/constants';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<Aside>
			<div className="logo">
				<BoadmanLogo />
			</div>

			<nav>
				<div>
					<ul>
						{navList.list1.map((list) => (
							<NavLink key={list.name} to={list.link}>
								<li>
									<span className="active">{list.svg.active}</span>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>

					<hr />

					<ul>
						{navList.list2.map((list) => (
							<NavLink key={list.name} to={list.link}>
								<li>
									<span className="active">{list.svg.active}</span>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>

					<hr />

					<ul>
						{navList.list3.map((list) => (
							<NavLink key={list.name} to={list.link}>
								<li>
									<span className="active">{list.svg.active}</span>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>

					<hr />

					<ul>
						{navList.list4.map((list) => (
							<NavLink key={list.name} to={list.link}>
								<li>
									<span className="active">{list.svg.active}</span>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>
				</div>

				<div>
					<hr />

					<ul>
						<Link to={APP_ROUTES.login}>
							<li>
								{' '}
								<Logout /> Logout
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</Aside>
	);
};

export default Sidebar;

const navList = {
	list1: [
		{
			name: 'Dashboard',
			link: APP_ROUTES.dashboard,
			svg: {
				default: <Dashboard />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Leaderboard',
			link: APP_ROUTES.leaderboard.initial,
			svg: {
				default: <Leaderboard />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Gaming',
			link: APP_ROUTES.gaming,
			svg: {
				default: <Gaming />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Tournaments',
			link: APP_ROUTES.tournaments,
			svg: {
				default: <Tournaments />,
				active: <DashboardActive />,
			},
		},
	],
	list2: [
		{
			name: 'Teams',
			link: APP_ROUTES.teams,
			svg: {
				default: <Teams />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Friends',
			link: APP_ROUTES.friends,
			svg: {
				default: <Friends />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Stream',
			link: APP_ROUTES.stream,
			svg: {
				default: <Stream />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Wallet',
			link: APP_ROUTES.wallet,
			svg: {
				default: <Wallet />,
				active: <DashboardActive />,
			},
		},
	],
	list3: [
		{
			name: 'Profile',
			link: APP_ROUTES.profile.initial,
			svg: {
				default: <Profile />,
				active: <DashboardActive />,
			},
		},
		{
			name: 'Settings',
			link: APP_ROUTES.settings,
			svg: {
				default: <Settings />,
				active: <DashboardActive />,
			},
		},
	],
	list4: [
		{
			name: 'Faqs',
			link: APP_ROUTES.faqs,
			svg: {
				default: <Faqs />,
				active: <DashboardActive />,
			},
		},
	],
};
