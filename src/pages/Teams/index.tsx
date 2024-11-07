import { DashboardHeader, TeamCard } from '@/components';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { Button, Pagination } from '@/ui';
import { useState } from 'react';
import CreateTeam from './Modals/CreateTeam';

const Teams = () => {
	const [createTeam, setCreateTeam] = useState(false);

	return (
		<Container>
			<DashboardHeader />

			<CreateTeam createTeam={createTeam} setCreateTeam={setCreateTeam} />

			<div className="head">
				<h6>Teams</h6>

				<Button onClick={() => setCreateTeam(true)} variant="primary" size="small">
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

			<div className="ml-auto">
				<Pagination maxPage={3} loading={false} itemsPerPageOptions={[10, 14, 16]} />
			</div>
		</Container>
	);
};

export default Teams;
