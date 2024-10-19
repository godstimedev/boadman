import { Container } from './styles';
import { TournamentProps } from './Tournament.type';

const FeaturedTournament = (props: TournamentProps) => {
	const { image, categories, status, period, title, description, prize, game_mode, game_slot } =
		props;
	return (
		<Container>
			<div>
				<img src={image} alt="/" />
				<div>
					{categories.map((category, index) => (
						<span key={index} className="capitalize">
							{category}
						</span>
					))}
				</div>
			</div>
			<div>
				<div>
					<span className="uppercase">{status} </span> <span>{period}</span>
				</div>

				<h6>{title} </h6>
				<p>{description} </p>
			</div>

			<hr />

			<div>
				<div>
					<span>Prize</span>
					<p>{prize}</p>
				</div>
				<div>
					<span>Game mode</span>
					<p>{game_mode}</p>
				</div>
				<div>
					<span>Game slot</span>
					<p>{game_slot}</p>
				</div>
			</div>
		</Container>
	);
};

export default FeaturedTournament;
