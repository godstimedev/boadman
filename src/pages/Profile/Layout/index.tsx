import { DashboardHeader } from '@/components';
import { Container } from './styles';
import { Button, Modal } from '@/ui';
import { NavLink, Outlet } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { HeroAvatar, RequestSuccess } from '../../../assets/images';
import { CaretDown } from '@/assets/svgs';
import { useState } from 'react';

const Profile = () => {
	const [isAddFriend, setIsAddFriend] = useState(false);
	const [isInviteFriend, setIsInviteFriend] = useState(false);

	return (
		<Container>
			<DashboardHeader />
			<div className="banner">
				<div>
					<div className="img-con">
						<img src={HeroAvatar} alt="/" />
					</div>

					<div>
						<h5>Joel Henderson</h5>
						<span>@flunk god</span>
					</div>
				</div>
				<div>
					<div>
						<Button onClick={() => setIsInviteFriend(true)} variant="outline" size="large">
							Invite to team
						</Button>
					</div>

					<div>
						<Button onClick={() => setIsAddFriend(true)} variant="primary" size="large">
							Add friend
						</Button>
					</div>
				</div>
			</div>

			<Modal isModalOpen={isAddFriend} setIsModalOpen={setIsAddFriend}>
				<div className="add-friend-modal">
					<div>
						<h6>Add friend</h6>
						<span>Add flunk god as a new friend</span>
					</div>
					<p>
						By inviting flunk god to be your friend, You can sent instant SMS, Play games together and
						discover amazing opportunities. Flunk god can refuse your invitation. Do you wish to proceed
						with the invite?
					</p>

					<div>
						<Button variant="primary">Send friend invite</Button>
					</div>
				</div>
			</Modal>
			<Modal isModalOpen={isInviteFriend} setIsModalOpen={setIsInviteFriend}>
				<div className="invite-friend-modal">
					<div className="img-con">
						<img src={RequestSuccess} alt="/" />
					</div>
					<div>
						<h6>Friend Request sent</h6>
						<span>Add flunk god as a new friend</span>
					</div>
					<p>
						You have successfully sent a friend request to flunk god. A notification will be sent should
						he/she accept or reject your request.
					</p>

					<div>
						<Button onClick={() => setIsInviteFriend(false)} variant="primary">
							Back to leaderboard
						</Button>
					</div>
				</div>
			</Modal>

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
