import { Container } from './styles';
import { LastPlayedProps } from './LastPlayed.types';
import { GamerAvatar } from '@/assets/images';

const LastPlayed = (props: LastPlayedProps) => {
	const { title, image, hours_played, win_percent, avg_score, won_coins } = props;

	return (
		<Container>
			<div>
				<div>
					<img src={image} alt={title} />
				</div>
				<div>
					<p>{title}</p>

					<div>
						<img src={GamerAvatar} alt="/" />
						<img src={GamerAvatar} alt="/" />
						<img src={GamerAvatar} alt="/" />
						<img src={GamerAvatar} alt="/" />
						<span>+3</span>
					</div>
				</div>
				<span>{hours_played} hours played</span>
			</div>
			<hr />
			<div>
				<div>
					<span>Win %</span>
					<p>{win_percent}%</p>
				</div>
				<div>
					<span>Avg.scr</span>
					<p>{avg_score}</p>
				</div>
				<div>
					<span>Won</span>
					<p>{won_coins} coins</p>
				</div>
			</div>
		</Container>
	);
};

export default LastPlayed;
