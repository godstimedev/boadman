import {
	BoadmanLogo,
	Dashboard,
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
			<Link to={APP_ROUTES.dashboard} className="logo" title="Boadman">
				<BoadmanLogo />
			</Link>

			<nav>
				<div>
					<ul>
						{navList.list1.map((list) => (
							<NavLink key={list.name} to={list.link} title={list.name}>
								<li>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>

					<hr />

					<ul>
						{navList.list2.map((list) => (
							<NavLink key={list.name} to={list.link} title={list.name}>
								<li>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>

					<hr />

					<ul>
						{navList.list3.map((list) => (
							<NavLink key={list.name} to={list.link} title={list.name}>
								<li>
									<span>{list.svg.default}</span>
									{list.name}
								</li>
							</NavLink>
						))}
					</ul>

					<hr />

					<ul>
						{navList.list4.map((list) => (
							<NavLink key={list.name} to={list.link} title={list.name}>
								<li>
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
						<Link to={APP_ROUTES.login} title={'Logout'}>
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
			},
		},
		{
			name: 'Leaderboard',
			link: APP_ROUTES.leaderboard.initial,
			svg: {
				default: <Leaderboard />,
			},
		},
		{
			name: 'Gaming',
			link: APP_ROUTES.gaming.initial,
			svg: {
				default: <Gaming />,
			},
		},
		{
			name: 'Tournaments',
			link: APP_ROUTES.tournaments,
			svg: {
				default: <Tournaments />,
			},
		},
	],
	list2: [
		{
			name: 'Teams',
			link: APP_ROUTES.teams,
			svg: {
				default: <Teams />,
			},
		},
		{
			name: 'Friends',
			link: APP_ROUTES.friends,
			svg: {
				default: <Friends />,
			},
		},
		{
			name: 'Stream',
			link: APP_ROUTES.stream,
			svg: {
				default: <Stream />,
			},
		},
		{
			name: 'Wallet',
			link: APP_ROUTES.wallet,
			svg: {
				default: <Wallet />,
			},
		},
	],
	list3: [
		{
			name: 'Profile',
			link: APP_ROUTES.profile,
			svg: {
				default: <Profile />,
			},
		},
		{
			name: 'Settings',
			link: APP_ROUTES.settings,
			svg: {
				default: <Settings />,
			},
		},
	],
	list4: [
		{
			name: 'Faqs',
			link: APP_ROUTES.faqs,
			svg: {
				default: <Faqs />,
			},
		},
	],
};
