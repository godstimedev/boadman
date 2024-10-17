import { EyeIcon } from '@/assets/svgs';
import { Container } from './styles';
import { HeroAvatar, Spectre } from '@/assets/images';

const MatchSummary = () => {
	return (
		<Container>
			<div className="head">
				<h6>Gameplay summary</h6>

				<button>See comment</button>
			</div>

			<div className="stats">
				<div>
					<p>Single Elimination</p>
					<span>Bind</span>
				</div>

				<div>
					<div>
						<span>Player A</span>
						<p>-</p>
					</div>
					<p>:</p>
					<div>
						<span>Player B</span>
						<p>-</p>
					</div>
				</div>

				<div>
					<span>23/04/2024 8:00PM EST</span>
					<p>-</p>
				</div>

				<div>
					<span>Rounds</span>
					<p>2 round </p>
				</div>
				<div>
					<span>Prize</span>
					<p>300 coins </p>
				</div>
				<div>
					<span>Streams</span>
					<p>-</p>
				</div>
			</div>

			<div className="stats-mobile">
				<div>
					<div>
						<p>Single Elimination</p>
						<span>Bind</span>
					</div>

					<div>
						<div>
							<span>Player A</span>
							<p>-</p>
						</div>
						<p>:</p>
						<div>
							<span>Player B</span>
							<p>-</p>
						</div>
					</div>
				</div>
				<div>
					<div>
						<span>23/04/2024 8:00PM EST</span>
						<p>-</p>
					</div>

					<div>
						<span>Rounds</span>
						<p>2 round </p>
					</div>
					<div>
						<span>Prize</span>
						<p>300 coins </p>
					</div>
					<div>
						<span>Streams</span>
						<p>-</p>
					</div>
				</div>
			</div>

			<div className="players">
				<div className="player-1">
					<div>
						<div>
							<span>
								Player A <span className="quote">(Game creator)</span>
							</span>
							<div>
								<div className="img-con">
									<img src={HeroAvatar} alt="/" />
								</div>
								<p>Flunk_god</p>
								<EyeIcon />
							</div>
						</div>

						<p>-</p>
					</div>

					<hr />

					<div className="middle">
						<div>
							<span>Combat score</span>
							<p>-</p>
						</div>
						<div>
							<span>Damage</span>
							<p>-</p>
						</div>
						<div>
							<span>KDA</span>
							<p>-</p>
						</div>
						<div>
							<span>Headshots</span>
							<p>-</p>
						</div>
						<div>
							<span>Bodyshots</span>
							<p>-</p>
						</div>
						<div>
							<span>Kill</span>
							<p>-</p>
						</div>
						<div>
							<span>Death</span>
							<p>-</p>
						</div>
						<div>
							<span>Assist</span>
							<p>-</p>
						</div>
						<div>
							<span>Legshots</span>
							<p>-</p>
						</div>
					</div>

					<hr />

					<div>
						<p>Weapons</p>

						<div>
							<div>
								<img src={Spectre} alt="spectre" />
								<div>
									<p>-------</p>
									<p>--</p>
								</div>
							</div>

							<div>
								<span>Kill</span>
								<p>-</p>
							</div>
							<div>
								<span>Damage</span>
								<p>-</p>
							</div>
							<div>
								<span>Headshots</span>
								<p>-</p>
							</div>
						</div>
					</div>
				</div>
				<div className="player-2">
					<div>
						<div>
							<span>
								Player B <span className="quote">(Challenger)</span>
							</span>
							<div>
								<div className="img-con">
									<img src={HeroAvatar} alt="/" />
								</div>
								<p>Basmin</p>
								<EyeIcon />
							</div>
						</div>

						<p>-</p>
					</div>

					<hr />

					<div className="middle">
						<div>
							<span>Combat score</span>
							<p>-</p>
						</div>
						<div>
							<span>Damage</span>
							<p>-</p>
						</div>
						<div>
							<span>KDA</span>
							<p>-</p>
						</div>
						<div>
							<span>Headshots</span>
							<p>-</p>
						</div>
						<div>
							<span>Bodyshots</span>
							<p>-</p>
						</div>
						<div>
							<span>Kill</span>
							<p>-</p>
						</div>
						<div>
							<span>Death</span>
							<p>-</p>
						</div>
						<div>
							<span>Assist</span>
							<p>-</p>
						</div>
						<div>
							<span>Legshots</span>
							<p>-</p>
						</div>
					</div>

					<hr />

					<div>
						<p>Weapons</p>

						<div>
							<div>
								<img src={Spectre} alt="spectre" />
								<div>
									<p>-------</p>
									<p>--</p>
								</div>
							</div>

							<div>
								<span>Kill</span>
								<p>-</p>
							</div>
							<div>
								<span>Damage</span>
								<p>-</p>
							</div>
							<div>
								<span>Headshots</span>
								<p>-</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default MatchSummary;
