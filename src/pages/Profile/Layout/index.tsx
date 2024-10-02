import { DashboardHeader } from '@/components';
import { Container } from './styles';
import { Button } from '@/ui';
import { NavLink, Outlet } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { HeroAvatar } from '../../../assets/images';
import { CaretDown } from '@/assets/svgs';

const Profile = () => {
	return (
		<Container>
			<DashboardHeader />
			<div className="banner">
				<div>
					<img src={HeroAvatar} alt="/" />

					<div>
						<h5>Joel Henderson</h5>
						<span>@flunk god</span>
					</div>
				</div>
				<div>
					<div>
						<Button variant="outline" size="large">
							Invite to team
						</Button>
					</div>

					<div>
						<Button variant="primary" size="large">
							Add friend
						</Button>
					</div>
				</div>
			</div>

			<div className="profile">
				<ul className="page-nav">
					{navList.map((item) => (
						<NavLink to={item.link} key={item.name}>
							<li>{item.name}</li>
						</NavLink>
					))}
				</ul>

				<div className="filter-con">
					<div>
						All queues <CaretDown />
					</div>
					<div>
						All acts <CaretDown />
					</div>
				</div>

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
		name: 'Agents',
		link: APP_ROUTES.profile.agents,
	},

	{
		name: 'Weapons',
		link: APP_ROUTES.profile.weapons,
	},

	{
		name: 'Maps',
		link: APP_ROUTES.profile.maps,
	},
];
