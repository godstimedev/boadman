import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '@/ui';
import { APP_ROUTES } from '@/constants';
import { DashboardHeader } from '@/components';
import { HeroAvatar } from '@/assets/images';
// import { useState } from 'react';

const Profile = () => {
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
					<Button variant="primary">Edit</Button>
				</div>
			</div>

			<div className="profile-con">
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

export default Profile;

const navList = [
	{
		name: 'Overview',
		link: APP_ROUTES.profile.overview,
	},
	{
		name: 'Play History',
		link: APP_ROUTES.profile.playHistory,
	},
	{
		name: 'Stream',
		link: APP_ROUTES.profile.stream,
	},
];
