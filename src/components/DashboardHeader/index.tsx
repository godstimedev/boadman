import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import {
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
import { BoadmanLogo, JoelHenderson } from '@/assets/images';
import { MobileSidebar } from '@/layout';
import { APP_ROUTES } from '@/constants';

const DashboardHeader = () => {
	const [formData, setFormData] = useState({
		search: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const [nav, setNav] = useState(false);

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

				<Link to={APP_ROUTES.dashboard} className="logo">
					{/* <BoadmanLogo /> */}
					<img src={BoadmanLogo} alt="Boadman" />
				</Link>
			</div>

			<MobileSidebar nav={nav} setNav={setNav} />

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

				<button onClick={() => setNav(true)}>
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
