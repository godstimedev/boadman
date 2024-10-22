import { TeamMatchFull } from '@/components';
import { Container } from './styles';
import { Link, useParams } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const TeamMatches = () => {
	const params = useParams();

	return (
		<Container>
			{Array.from({ length: 12 }).map((_, i) => (
				<Link
					to={APP_ROUTES.teams.use_match(params.teamId ? params.teamId.toString() : '', i.toString())}
					key={i}
				>
					<TeamMatchFull />
				</Link>
			))}
		</Container>
	);
};

export default TeamMatches;
