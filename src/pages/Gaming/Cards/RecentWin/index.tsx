import { Container } from './styles';
import { RecentWinProps } from './RecentWins.types';

const RecentWin = (props: RecentWinProps) => {
	const { title, svg, coins, score, ranked, stats } = props;

	return (
		<Container>
			<div>
				{svg}
				<div>
					<p>{title}</p>
					<div>
						{stats.map((stat, index) => (
							<span key={index}>{stat}</span>
						))}
					</div>
				</div>
			</div>
			<div>
				{ranked ? (
					<div>
						<span>Ranked</span>
						<p>{ranked}</p>
					</div>
				) : (
					<>
						{coins !== undefined && (
							<div>
								<span>Won</span>
								<p>{coins} coins</p>
							</div>
						)}
						{score !== undefined && (
							<div>
								<span>Score</span>
								<p>{score}</p>
							</div>
						)}
					</>
				)}
			</div>
		</Container>
	);
};

export default RecentWin;
