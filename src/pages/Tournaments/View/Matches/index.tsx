import { Container } from './styles';
import { APP_ROUTES } from '@/constants';
import { Link, useParams } from 'react-router-dom';
import { TeamMatch } from '@/components';

const Matches = () => {
	const params = useParams();

	return (
		<Container>
			<h6>Match Schedule</h6>

			<div className="matches">
				{Array.from({ length: 5 }).map((_, i) => (
					<Link
						key={i}
						to={APP_ROUTES.tournaments.use_match(params?.id ? params?.id.toString() : '0', i.toString())}
					>
						<TeamMatch />
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Matches;
