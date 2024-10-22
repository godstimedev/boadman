import { DashboardHeader, TeamCard } from '@/components';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { Button } from '@/ui';

const Teams = () => {
	return (
		<Container>
			<DashboardHeader />
			<div className="head">
				<h6>Teams</h6>

				<Button variant="primary" size="small">
					Create team
				</Button>
			</div>
			<div className="teams">
				{Array.from({ length: 12 }).map((_, i) => (
					<Link key={i} to={APP_ROUTES.teams.use_overview(i.toString())}>
						{' '}
						<TeamCard />
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Teams;
