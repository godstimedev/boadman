import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '@/ui';
import { APP_ROUTES } from '@/constants';
import { DashboardHeader } from '@/components';
import { HeroAvatar } from '@/assets/images';
// import { useState } from 'react';

const FriendsView = () => {
	const params = useParams();
	const location = useLocation();

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.friends.use_overview(params?.friendId ? params?.friendId : ''),
		},
		{
			name: 'Play History',
			link: APP_ROUTES.friends.use_playHistory(params?.friendId ? params?.friendId : ''),
		},
	];

	return (
		<Container>
			<DashboardHeader />
			<div className="banner" />

			<div className="head">
				<div>
					<div className="icon">
						<img src={HeroAvatar} alt="/" />
					</div>
					<div>
						<h6>Joel Henderson</h6>
						<span>@flunk god</span>
					</div>
				</div>

				<div>
					{location.pathname === `/friends/${params.friendId}/play-history` ? (
						<Button variant="outline">Challenge</Button>
					) : (
						<Button variant="outline">Remove friend</Button>
					)}

					<Button variant="primary">Message</Button>
				</div>
			</div>

			<div className="friend-con">
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

export default FriendsView;
