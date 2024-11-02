import { GamerAvatar } from '@/assets/images';
import { MatchProps } from '../Bracket.types';

const Match = (props: MatchProps) => {
	const { teams } = props;
	return (
		<div className="match">
			{teams.map((team, index) => (
				<div key={index} className="team">
					<img src={GamerAvatar} alt={team.name} className="team-logo" />
					<p className="team-name">{team.name}</p>
					{/* <span className="team-score">{team.score}</span> */}
					{/* Line for each team */}
					{index === 0 ? (
						<div className="line top-line"></div>
					) : (
						<div className="line bottom-line"></div>
					)}
				</div>
			))}
		</div>
	);
};

export default Match;
