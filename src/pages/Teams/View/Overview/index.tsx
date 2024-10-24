import { Button, Pallet } from '@/ui';
import { Container } from './styles';
import {
	DiscordIcon,
	FacebookTeams,
	InstagramTeams,
	TwitchIcon,
	YoutubeTeams,
} from '@/assets/svgs';
import { TeamMatch, TeamRoster } from '@/components';
import { Link, useParams } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { useState } from 'react';
import RosterProfile from '../../Modals/RosterProfile';
import ChangeCaptain from '../../Modals/ChangeCaptain';

const TeamOverview = () => {
	const params = useParams();
	const [showProfile, setShowProfile] = useState(false);
	const [changeCaptain, setChangeCaptain] = useState(false);

	const handleProfileClick = () => {
		setShowProfile(true);
	};

	return (
		<Container>
			<div>
				{PalletList.map((item, i) => (
					<Pallet key={i} title={item.title} value={item.value} />
				))}
			</div>

			<div>
				<div>
					<h6>About team</h6>

					<p>
						Due to certain restrictions, some individuals won’t be able to participate inn this match.
						Players found in breach of this rule will be suspended from boardman. Due to certain
						restrictions, some individuals won’t be able to participate inn this match. Players found in
						breach of this rule will be suspended from boardman.
					</p>

					<div>
						<span>
							<FacebookTeams />
						</span>
						<span>
							<InstagramTeams />
						</span>
						<span>
							<YoutubeTeams />
						</span>
						<span>
							<TwitchIcon />
						</span>
						<span>
							<DiscordIcon />
						</span>
					</div>
				</div>

				<div>
					<div className="header">
						<h6>Team Roster</h6>

						<Button onClick={() => setChangeCaptain(true)} variant="text" size="small">
							Change captain
						</Button>
					</div>

					<div>
						<div onClick={handleProfileClick}>
							<TeamRoster />
						</div>
						<div onClick={handleProfileClick}>
							<TeamRoster />
						</div>
						<div onClick={handleProfileClick}>
							<TeamRoster />
						</div>
						<div onClick={handleProfileClick}>
							<TeamRoster />
						</div>
						<div onClick={handleProfileClick}>
							<TeamRoster />
						</div>
						<div onClick={handleProfileClick}>
							<TeamRoster />
						</div>
					</div>
				</div>
			</div>
			<RosterProfile showProfile={showProfile} setShowProfile={setShowProfile} />
			<ChangeCaptain changeCaptain={changeCaptain} setChangeCaptain={setChangeCaptain} />
			<div>
				<h6>Upcomming matches</h6>

				<div>
					{Array.from({ length: 4 }).map((_, i) => (
						<Link
							to={APP_ROUTES.teams.use_match(params.teamId ? params.teamId.toString() : '', i.toString())}
							key={i}
						>
							<TeamMatch />
						</Link>
					))}
				</div>
			</div>
		</Container>
	);
};

export default TeamOverview;

const PalletList = [
	{
		title: 'Most played Game',
		value: 'Valorant',
	},
	{
		title: 'Matches',
		value: '300',
	},
	{
		title: 'Tournaments',
		value: '34',
	},
	{
		title: 'Won',
		value: '234',
	},
	{
		title: 'Members',
		value: '10',
	},
	{
		title: 'Prize won',
		value: '4300 coins',
	},
];
