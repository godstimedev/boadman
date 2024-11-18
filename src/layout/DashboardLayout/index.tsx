import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { Container } from './styles';
import { DashboardHeader } from '@/components';

const DashboardLayout = () => {
	return (
		<Container>
			<Sidebar />

			<main>
				<DashboardHeader />
				<Outlet />
			</main>
		</Container>
	);
};

export default DashboardLayout;
