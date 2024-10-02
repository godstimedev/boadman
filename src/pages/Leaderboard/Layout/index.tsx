import { DashboardHeader } from '@/components';
import { Container } from './styles';
import { InputGroup } from '@/ui';
import { useState } from 'react';
import { GeneralChangeEventType } from '@/types';
import {
	ApexLegend,
	CallOfDuty,
	CounterStrike,
	Destiny2,
	Fortnite,
	LeagueOfLegends,
	OverWatch,
	Pubg,
	ThreeDots,
	Valorant,
} from '@/assets/svgs';
import { NavLink, Outlet } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Leaderboard = () => {
	const [formData, setFormData] = useState({
		search: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<Container>
			<DashboardHeader />

			<div className="head">
				<h6>Leaderboard</h6>

				<div className="input">
					<InputGroup
						type="text"
						name="search"
						placeholder="Search player name #tagline"
						autoComplete="off"
						value={formData.search}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="leaderboards">
				<ul className="page-nav">
					{navList.map((item) => (
						<NavLink key={item.name} to={item.link}>
							<li>
								{item.svg} {item.name}
							</li>
						</NavLink>
					))}

					<div className="menu">
						<button>
							<ThreeDots />
						</button>
					</div>
				</ul>

				<Outlet />
			</div>
		</Container>
	);
};

export default Leaderboard;

const navList = [
	{
		name: 'Valorant',
		svg: <Valorant />,
		link: APP_ROUTES.leaderboard.valorant,
	},
	{
		name: 'COD',
		svg: <CallOfDuty />,
		link: APP_ROUTES.leaderboard.cod,
	},
	{
		name: 'PUBG',
		svg: <Pubg />,
		link: APP_ROUTES.leaderboard.pubg,
	},
	{
		name: 'Apex Legend',
		svg: <ApexLegend />,
		link: APP_ROUTES.leaderboard.apexLegend,
	},
	{
		name: 'Destiny 2',
		svg: <Destiny2 />,
		link: APP_ROUTES.leaderboard.destiny2,
	},
	{
		name: 'League of Legend',
		svg: <LeagueOfLegends />,
		link: APP_ROUTES.leaderboard.leagueOfLegend,
	},
	{
		name: 'Fortnite',
		svg: <Fortnite />,
		link: APP_ROUTES.leaderboard.fortnite,
	},
	{
		name: 'Counter strike ',
		svg: <CounterStrike />,
		link: APP_ROUTES.leaderboard.counterStrike,
	},
	{
		name: 'Overwatch',
		svg: <OverWatch />,
		link: APP_ROUTES.leaderboard.overwatch,
	},
];
