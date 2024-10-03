import {
	BoadmanLogo,
	CaretDown,
	Chat,
	Dashboard,
	DashboardActive,
	Faqs,
	Friends,
	Gaming,
	Gift,
	Leaderboard,
	Logout,
	NavClose,
	NotificationBell,
	Profile,
	Settings,
	Stream,
	Teams,
	Tournaments,
	Wallet,
} from '@/assets/svgs';
import { Aside } from './styles';
import { APP_ROUTES } from '@/constants';
import { NavLink } from 'react-router-dom';
import { ReactElement, useEffect, useRef } from 'react';

import { JoelHenderson } from '@/assets/images';

interface MobileSidebarProps {
	nav: boolean;
	setNav: (value: boolean) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ nav, setNav }) => {
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			// Check if navRef.current exists and if e.target is an HTMLElement
			if (navRef.current && e.target instanceof HTMLElement && !navRef.current.contains(e.target)) {
				setNav(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setNav]);

	return (
		<Aside>
			<div className={nav ? 'show' : 'close'}>
				<div ref={navRef} className="menu-con">
					<div className="logo">
						<BoadmanLogo />

						<button onClick={() => setNav(false)}>
							<NavClose />
						</button>
					</div>

					<div>
						<ul>
							{navList.map((list) => (
								<NavLink key={list.name} to={list.link}>
									<li>
										<span className="active">{list.svg.active}</span>
										<span>{list.svg.default}</span>
										{list.name}
									</li>
								</NavLink>
							))}
						</ul>

						<div className="bottom">
							<div className="dropdown-con">
								<img src={JoelHenderson} alt="/" />
								<div>
									<p>Joel Henderson</p>
									<CaretDown />
								</div>
							</div>
							<ul>
								{linkList.map((list) => (
									<NavLink key={list.name} title={list.name} to={list.link}>
										<li>
											{list.svg}
											{list.data && list.data.length > 0 ? <span className="dot" /> : null}
										</li>
									</NavLink>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Aside>
	);
};

export default MobileSidebar;

const navList = [
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

	{
		name: 'Faqs',
		link: APP_ROUTES.faqs,
		svg: {
			default: <Faqs />,
			active: <DashboardActive />,
		},
	},
	{
		name: 'Logout',
		link: APP_ROUTES.login,
		svg: {
			default: <Logout />,
			active: <DashboardActive />,
		},
	},
];

const linkList: { name: string; svg: ReactElement; link: string; data?: number[] }[] = [
	{
		name: 'Chats',
		svg: <Chat />,
		link: '#',
	},

	{
		name: 'Gifts',
		svg: <Gift />,
		link: '#',
	},
	{
		name: 'Notifications',
		svg: <NotificationBell />,
		link: '#',
		data: [1, 2],
	},
];
