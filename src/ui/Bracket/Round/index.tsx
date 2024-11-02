import { RoundProps } from '../Bracket.types';
import Match from '../Match';

const Round = (props: RoundProps) => {
	const { matches } = props;
	return (
		<div className="round">
			{matches.map((match, index) => (
				<div key={index} style={{ marginTop: index % 2 === 0 ? '0' : '100px' }}>
					<Match teams={match.teams} />
				</div>
			))}
		</div>
	);
};

export default Round;
