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
			<div className="head">
				<h6>Leaderboard</h6>

				<div className="input">
					<InputGroup
						type="search"
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
					{navList.map((item, index) => (
						<NavLink key={item.name} to={APP_ROUTES.leaderboard.use_game(index.toString())}>
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
	},
	{
		name: 'COD',
		svg: <CallOfDuty />,
	},
	{
		name: 'PUBG',
		svg: <Pubg />,
	},
	{
		name: 'Apex Legend',
		svg: <ApexLegend />,
	},
	{
		name: 'Destiny 2',
		svg: <Destiny2 />,
	},
	{
		name: 'League of Legend',
		svg: <LeagueOfLegends />,
	},
	{
		name: 'Fortnite',
		svg: <Fortnite />,
	},
	{
		name: 'Counter strike ',
		svg: <CounterStrike />,
	},
	{
		name: 'Overwatch',
		svg: <OverWatch />,
	},
];
