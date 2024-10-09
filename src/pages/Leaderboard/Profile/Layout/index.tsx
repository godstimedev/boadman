import { DashboardHeader } from '@/components';
import { Container } from './styles';
import { Button } from '@/ui';
import { NavLink, Outlet } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { HeroAvatar } from '../../../../assets/images';
import { CaretDown } from '@/assets/svgs';
import { useState } from 'react';
import AddFriend from '../Modals/AddFriend';
import InviteFriend from '../Modals/InviteFriend';
import Challenge from '../Modals/Challenge';

const Profile = () => {
	const [isAddFriend, setIsAddFriend] = useState(false);
	const [isInviteFriend, setIsInviteFriend] = useState(false);
	const [createChallenge, setCreateChallenge] = useState(false);

	return (
		<Container>
			<DashboardHeader />
			<div className="banner">
				<div>
					<div className="img-con">
						<img src={HeroAvatar} alt="/" />
						{/* <HeroAvatar /> */}
					</div>

					<div>
						<h5>Joel Henderson</h5>
						<span>@flunk god</span>
					</div>
				</div>
				<div>
					<div>
						<Button onClick={() => setCreateChallenge(true)} variant="outline" size="large">
							Challenge
						</Button>
					</div>
					{/* <div>
						<Button onClick={() => setIsInviteFriend(true)} variant="outline" size="large">
							Invite to team
						</Button>
					</div> */}

					<div>
						<Button onClick={() => setIsAddFriend(true)} variant="primary" size="large">
							Add friend
						</Button>
					</div>
				</div>
			</div>

			<AddFriend isAddFriend={isAddFriend} setIsAddFriend={setIsAddFriend} />
			<InviteFriend isInviteFriend={isInviteFriend} setIsInviteFriend={setIsInviteFriend} />
			<Challenge createChallenge={createChallenge} setCreateChallenge={setCreateChallenge} />

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
		link: APP_ROUTES.playerProfile.overview,
	},

	{
		name: 'Agents',
		link: APP_ROUTES.playerProfile.agents,
	},

	{
		name: 'Weapons',
		link: APP_ROUTES.playerProfile.weapons,
	},

	{
		name: 'Maps',
		link: APP_ROUTES.playerProfile.maps,
	},
];
