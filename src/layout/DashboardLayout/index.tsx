import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { Container } from './styles';

const DashboardLayout = () => {
	return (
		<Container>
			<Sidebar />

			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default DashboardLayout;
