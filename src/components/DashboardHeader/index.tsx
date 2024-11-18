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
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { BoadmanLogo, JoelHenderson } from '@/assets/images';
import { MobileSidebar } from '@/layout';
import { APP_ROUTES } from '@/constants';
import { useDebouncedCallback } from 'use-debounce';

const DashboardHeader = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleChange: GeneralChangeEventType = useDebouncedCallback((event, value) => {
		// name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		if (value) {
			setSearchParams({
				q: value || '',
			});
			if (pathname !== APP_ROUTES.search) {
				navigate(`${APP_ROUTES.search}?q=${value}`);
			}
		} else {
			// delete the query from the params
			setSearchParams({
				q: '',
			});
		}
	}, 500);

	// const handleSearch = useDebouncedCallback((query) => {
	// 	// console.log(stateId);
	// 	if (query || stateId) {
	// 		setSearchParams({
	// 			q: query || '',
	// 			state_id: stateId || '',
	// 		});
	// 		if (!pathname !== '/product') {
	// 			navigate(`${Approutes.product.initial}/?q=${query}&state_id=${stateId}`);
	// 		}
	// 	} else {
	// 		// delete the query from the params
	// 		setSearchParams({
	// 			q: '',
	// 			state_id: '',
	// 		});
	// 	}
	// }, 500);

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
						defaultValue={searchParams.get('q') || ''}
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
				<Link to={APP_ROUTES.search}>
					<Button variant="primary" size="medium">
						<SearchGoggles />
					</Button>
				</Link>

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
