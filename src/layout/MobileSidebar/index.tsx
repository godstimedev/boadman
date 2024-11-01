import {
	CaretDown,
	Chat,
	Dashboard,
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
import { Link, NavLink } from 'react-router-dom';
import { ReactElement, useEffect, useRef } from 'react';

import { BoadmanLogo, JoelHenderson } from '@/assets/images';

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
					<div className="logo-con">
						<Link to={APP_ROUTES.dashboard} title="Boadman">
							{/* <BoadmanLogo /> */}
							<img src={BoadmanLogo} alt="Boadman" />
						</Link>

						<button onClick={() => setNav(false)}>
							<NavClose />
						</button>
					</div>

					<div>
						<ul>
							{navList.map((list) => (
								<NavLink key={list.name} to={list.link} title={list.name}>
									<li>
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
		link: APP_ROUTES.tournaments.initial,
		svg: {
			default: <Tournaments />,
		},
	},

	{
		name: 'Teams',
		link: APP_ROUTES.teams.initial,
		svg: {
			default: <Teams />,
		},
	},
	{
		name: 'Friends',
		link: APP_ROUTES.friends.initial,
		svg: {
			default: <Friends />,
		},
	},
	{
		name: 'Matches',
		link: APP_ROUTES.matches.initial,
		svg: {
			default: <Stream />,
		},
	},
	{
		name: 'Wallet',
		link: APP_ROUTES.wallet.initial,
		svg: {
			default: <Wallet />,
		},
	},

	{
		name: 'Profile',
		link: APP_ROUTES.profile.initial,
		svg: {
			default: <Profile />,
		},
	},
	{
		name: 'Settings',
		link: APP_ROUTES.settings.initial,
		svg: {
			default: <Settings />,
		},
	},

	{
		name: 'Faqs',
		link: APP_ROUTES.faqs.initial,
		svg: {
			default: <Faqs />,
		},
	},
	{
		name: 'Logout',
		link: APP_ROUTES.login,
		svg: {
			default: <Logout />,
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
