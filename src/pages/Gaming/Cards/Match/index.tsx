import { WinnerCheck } from '@/assets/svgs';
import { Container } from './styles';
import { MatchProps } from './Match.types';

const Match = (props: MatchProps) => {
	const { title, svg, date, status, winner, player1, player2, scores, mode } = props;

	return (
		<Container>
			<div>
				<div>
					<span className="icon-con">{svg}</span>
					<div>
						<p>{title}</p>
						<span>{date}</span>
					</div>
				</div>
				<div className="status">
					<span className="badge">{status}</span>
					{winner && winner === player1?.id ? (
						<div>
							<div className="img-con">
								<img src={player1?.avatar} alt="/" />
							</div>{' '}
							<p className="winner">{player1.name}</p> <WinnerCheck />{' '}
						</div>
					) : winner === player2?.id ? (
						<div>
							<div className="img-con">
								<img src={player2?.avatar} alt="/" />
							</div>{' '}
							<p className="winner">{player2?.name}</p> <WinnerCheck />{' '}
						</div>
					) : null}
				</div>
			</div>

			<hr />

			<div>
				<div>
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
							<div className="flex items-center justify-center text-center w-full">
								<span>-</span>
							</div>
						)}
					</div>
					{scores ? (
						<div className="scores">
							<span className={winner === player1?.id ? 'active' : ''}>{scores.player1}</span>
							<span>:</span>
							<span className={winner === player2?.id ? 'active' : ''}>{scores.player2}</span>
						</div>
					) : (
						<p>vs</p>
					)}
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
							'-'
						)}
					</div>
				</div>

				<div>
					<span>Mode</span>
					<p>{mode}</p>
				</div>
			</div>
		</Container>
	);
};

export default Match;
