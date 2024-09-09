import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import { Container } from './styles';
import Footer from '../Footer';

const ApplyLayout = () => {
	return (
		<Container>
			<Navbar />

			<main>
				<Outlet />
			</main>

			<Footer />
		</Container>
	);
};

export default ApplyLayout;
