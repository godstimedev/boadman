import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './styles';

import { APP_ROUTES } from '@/constants';

const SettingsGeneral = () => {
	return (
		<Container>
			<div className="head">
				<h6>Settings</h6>
			</div>

			<div className="settings-con">
				<ul>
					{navList.map((nav, i) => (
						<NavLink key={i} to={nav.link}>
							<li>{nav.name}</li>
						</NavLink>
					))}
				</ul>

				<div>
					<Outlet />
				</div>
			</div>
		</Container>
	);
};

export default SettingsGeneral;

const navList = [
	{
		name: 'General Information',
		link: APP_ROUTES.settings.general,
	},
	{
		name: 'About me',
		link: APP_ROUTES.settings.about,
	},
	{
		name: 'Password change',
		link: APP_ROUTES.settings.changePassword,
	},
	{
		name: 'Integrations',
		link: APP_ROUTES.settings.integrations,
	},
	{
		name: 'Privacy',
		link: APP_ROUTES.settings.privacy,
	},
	{
		name: 'Notifications',
		link: APP_ROUTES.settings.notifications,
	},
	{
		name: 'Verification',
		link: APP_ROUTES.settings.verification,
	},
];
