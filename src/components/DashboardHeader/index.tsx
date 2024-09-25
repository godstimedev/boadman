import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import {
	BoadmanLogo,
	CaretDown,
	Chat,
	Gift,
	MenuIcon2,
	NotificationBell,
	SearchGoggles,
	SearchIcon,
} from '@/assets/svgs';
import { GeneralChangeEventType } from '@/types';
import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { JoelHenderson } from '@/assets/images';

const DashboardHeader = () => {
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
			<div>
				<div className="search-con">
					<InputGroup
						type="search"
						name="search"
						placeholder="Search Game"
						autoComplete="off"
						value={formData.search}
						onChange={handleChange}
						icon={<SearchIcon />}
						iconPosition="right"
					/>
				</div>

				<div className="logo">
					<BoadmanLogo />
				</div>
			</div>

			<nav>
				<ul>
					{navList.map((list) => (
						<Link key={list.name} title={list.name} to={list.link}>
							<li>
								{list.svg}
								{list.data && list.data.length > 0 ? <span className="dot" /> : null}
							</li>
						</Link>
					))}
				</ul>

				<div className="dropdown-con">
					<img src={JoelHenderson} alt="/" />
					<div>
						<p>Joel Henderson</p>
						<CaretDown />
					</div>
				</div>
			</nav>

			<div className="mobile-nav-con">
				<Button variant="primary" size="medium">
					<SearchGoggles />
				</Button>

				<button>
					<MenuIcon2 />
				</button>
			</div>
		</Container>
	);
};

export default DashboardHeader;

const navList: { name: string; svg: ReactElement; link: string; data?: number[] }[] = [
	{
		name: 'Chats',
		svg: <Chat />,
		link: '#',
	},

	{
		name: 'Gifts',
		svg: <Gift />,
		link: '#',
	},
	{
		name: 'Notifications',
		svg: <NotificationBell />,
		link: '#',
		data: [1, 2],
	},
];
