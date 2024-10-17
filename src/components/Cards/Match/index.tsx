import { Container } from './styles';
import { MatchProps } from './Match.types';
import { WinnerCheck } from '@/assets/svgs';

const Match = (props: MatchProps) => {
	const { title, svg, date, time, status, winner, player1, player2, scores } = props;

	return (
		<Container>
			<div>
				<div>
					<div className="icon-con">{svg}</div>
					<div>
						<span className="status">{status}</span>
						<p>{title}</p>
					</div>
				</div>

				<div>
					<p>{time}</p>
					<span>{date}</span>
				</div>
			</div>

			<hr />

			<div className="middle">
				<div>
					<span>Player 1</span>
					{player1?.name ? (
						<div className="player">
							<div className="img-con">
								<img src={player1.avatar} alt="/" />
							</div>
							<p className={winner === player1.id ? 'active' : winner === player2?.id ? 'inactive' : ''}>
								{' '}
								{player1.name}{' '}
							</p>
						</div>
					) : (
						<div className="player">
							<p className="active">-------</p>
						</div>
					)}
				</div>

				{winner === player1?.id ? (
					<div className="winner">
						<WinnerCheck />
						<span>Winner</span>
					</div>
				) : null}

				<div>
					{scores ? (
						<div className="scores">
							<span className={winner === player1?.id ? 'active' : ''}>{scores.player1}</span>
						</div>
					) : (
						<div className="scores">
							<span className="active">-</span>
						</div>
					)}
				</div>
			</div>

			<hr />

			<div className="bottom">
				<div>
					<span>Player 2</span>
					{player2?.name ? (
						<div className="player">
							<div className="img-con">
								<img src={player2.avatar} alt="/" />
							</div>
							<p className={winner === player2.id ? 'active' : winner === player1?.id ? 'inactive' : ''}>
								{player2.name}
							</p>
						</div>
					) : (
						<div className="player">
							<p className="active">-------</p>
						</div>
					)}
				</div>

				{winner === player2?.id ? (
					<div className="winner">
						<WinnerCheck />
						<span>Winner</span>
					</div>
				) : null}
				<div>
					{scores ? (
						<div className="scores">
							<span className={winner === player2?.id ? 'active' : ''}>{scores.player2}</span>
						</div>
					) : (
						<div className="scores">
							<span className="active">-</span>
						</div>
					)}
				</div>
			</div>
		</Container>
	);
};

export default Match;
