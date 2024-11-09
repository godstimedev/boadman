import { DashboardHeader } from '@/components';
import { Container } from './styles';
import { Button, Dropdown } from '@/ui';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { JoelAvatar } from '../../../../assets/images';
import { CaretDown } from '@/assets/svgs';
import { useState } from 'react';
import AddFriend from '../Modals/AddFriend';
import Challenge from '../Modals/Challenge';

const Profile = () => {
	const params = useParams();
	const [isAddFriend, setIsAddFriend] = useState(false);
	const [createChallenge, setCreateChallenge] = useState(false);

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.leaderboard.player.use_overview(params.gameId, params.playerId),
		},

		{
			name: 'Agents',
			link: APP_ROUTES.leaderboard.player.use_agents(params.gameId, params.playerId),
		},

		{
			name: 'Weapons',
			link: APP_ROUTES.leaderboard.player.use_weapons(params.gameId, params.playerId),
		},

		{
			name: 'Maps',
			link: APP_ROUTES.leaderboard.player.use_maps(params.gameId, params.playerId),
		},
	];

	return (
		<Container>
			<DashboardHeader />
			<div className="banner">
				<div>
					<div className="img-con">
						<img src={JoelAvatar} alt="/" />
						{/* <HeroAvatar /> */}
					</div>

					<div>
						<h5>Joel Henderson</h5>
						<span>@flunk god</span>
					</div>
				</div>
				<div>
					<div>
						<Button onClick={() => setCreateChallenge(true)} variant="outline">
							Challenge
						</Button>
					</div>

					<div>
						<Button onClick={() => setIsAddFriend(true)} variant="primary">
							Add friend
						</Button>
					</div>
				</div>
			</div>

			<AddFriend isAddFriend={isAddFriend} setIsAddFriend={setIsAddFriend} />
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
					<Dropdown
						trigger={
							<div className="dropdown">
								All queues <CaretDown className="caret" />
							</div>
						}
					>
						<div>
							<button>Deathmatch</button>
							<button>Swiftplay</button>
							<button>Premier</button>
							<button>New map</button>
						</div>
					</Dropdown>
					<Dropdown
						trigger={
							<div className="dropdown">
								All acts <CaretDown className="caret" />
							</div>
						}
						position="bottomRight"
					>
						<div>
							<button>Episode 9 - Act 2</button>
							<button>Episode 9 - Act 1</button>
							<button>Episode 8 - Act 4</button>
							<button>Episode 8 - Act 3</button>
						</div>
					</Dropdown>
				</div>

				<Outlet />
			</div>
		</Container>
	);
};

export default Profile;
