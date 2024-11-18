import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '@/ui';
import { APP_ROUTES } from '@/constants';

import { GamerAvatar } from '@/assets/images';
import { useState } from 'react';
import AddMembers from '../../Modals/AddMember';
import CreateRoster from '../../Modals/CreateRoster';

const TeamView = () => {
	const params = useParams();
	const location = useLocation();
	const [addMembers, setAddMembers] = useState(false);
	const [createRoster, setCreateRoster] = useState(false);

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.teams.use_overview(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Matches',
			link: APP_ROUTES.teams.use_matches(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Tournaments',
			link: APP_ROUTES.teams.use_tournaments(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Play History',
			link: APP_ROUTES.teams.use_playHistory(params?.teamId ? params?.teamId : ''),
		},
		{
			name: 'Wallet',
			link: APP_ROUTES.teams.use_wallet(params?.teamId ? params?.teamId : ''),
		},
	];

	return (
		<Container>
			<AddMembers addMembers={addMembers} setAddMembers={setAddMembers} />

			<CreateRoster createRoster={createRoster} setCreateRoster={setCreateRoster} />

			<div className="banner" />

			<div className="head">
				<div>
					<div className="icon">
						<img src={GamerAvatar} alt="/" />
					</div>
					<div>
						<h6>Rabbit Rush</h6>
						<span>Currently playing Valorant Loner Epic.</span>
					</div>
				</div>

				<div>
					<Button variant="outline" outline="tetiary">
						Leave team
					</Button>
					{location.pathname === `/teams/${params?.teamId}/matches` ? (
						<Button onClick={() => setCreateRoster(true)} variant="primary">
							Set Roster
						</Button>
					) : (
						<Button onClick={() => setAddMembers(true)} variant="primary">
							Add member
						</Button>
					)}
				</div>
			</div>

			<div className="team-con">
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

export default TeamView;
