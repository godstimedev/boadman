import { AvatarTable, CyberPunk, GameStream, StreamAvatar } from '../../../assets/images';
import {
	BronzeRank,
	CaretDown,
	CaretRight,
	GoldRank,
	MatchAmount,
	MostPlayed,
	SilverRank,
	TournamentTrophy,
} from '../../../assets/svgs';
import { Button } from '../../../ui';
import { Container } from './styles';

const Built = () => {
	return (
		<Container>
			<h2>
				Built for everyone, <br />
				<span>loved</span> by Gamers.
			</h2>

			{/* cards */}
			<div className="card-container">
				<div className="card-1">
					<div className="card-head">
						<span>Make challenges</span>
						<p className="md:text-2xl leading-6  capitalize">Play anyone at anytime</p>
					</div>
					<div>
						<div className="image-container">
							<img src={CyberPunk} alt="/" />
							<div className="badges">
								<span>Call of duty</span>
								<span>Team</span>
							</div>
						</div>
						<div className=" space-y-2 md:space-y-4 card-1-dets">
							<p className="card-title leading-6">
								<span className="progress">IN PROGRESS </span> Finishing in 20 days
							</p>
							<h6>Rebirth Resurgence express </h6>
							<p className=" md:pr-28 leading-6">
								Join the call of duty tournament and get a chance to win up to $ 2000 prize.....{' '}
							</p>
						</div>
					</div>
				</div>

				<div className="card-2">
					<div className="card-head">
						<span>upload streams</span>
						<p className="md:text-2xl leading-6  capitalize">Add gaming stream to your profile</p>
					</div>
					<div>
						<div>
							<img src={GameStream} alt="/" />
						</div>
						<div className="details">
							<div>
								<img src={StreamAvatar} alt="/" className="rounded-full" />
							</div>
							<div>
								<h6>Flunk_god</h6>
								<div className="card-title">
									<span>Fortnite </span>
									<span> 11. 2k views </span>
								</div>
								<p>Join the call of duty tournament and get a chance to win up to $ 2000 prize..... </p>
							</div>
						</div>
					</div>
				</div>

				<div className="card-3">
					<div className="card-head">
						<span>LEADRBOARD</span>
						<p className="md:text-2xl leading-6  capitalize">Rank as one of the best in the world</p>
					</div>
					<div>
						<div className="dropdown-container">
							<div>
								<p>Region</p>
								<CaretDown />
							</div>
							<div>
								<p>Country</p>
								<CaretDown />
							</div>
							<div>
								<p>Episode 7</p>
								<CaretDown />
							</div>
						</div>

						<table className="text-sm">
							<thead>
								<tr>
									<th></th>
									<th>Rank</th>
									<th>Player</th>
									<th>Ranking rating</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<GoldRank className="max-md:max-w-8" />
									</td>
									<td>1</td>
									<td>
										<img src={AvatarTable} alt="/" className="w-4 h-4" />
										<div>
											<p className="font-medium text-sm">Joel Henderson </p>
											<span className=" text-sm">#flunk_god</span>
										</div>
									</td>
									<td>1330</td>
								</tr>
								<tr>
									<td>
										<SilverRank className="max-md:max-w-8" />
									</td>
									<td>2</td>
									<td>
										<img src={AvatarTable} alt="/" className="w-4 h-4" />
										<div>
											<p className="font-medium text-sm">Joel Henderson </p>
											<span className=" text-sm">#flunk_god</span>
										</div>
									</td>
									<td>1330</td>
								</tr>
								<tr>
									<td>
										<BronzeRank className="max-md:max-w-8" />
									</td>
									<td>3</td>
									<td>
										<img src={AvatarTable} alt="/" className="w-4 h-4" />
										<div>
											<p className="font-medium text-sm">Joel Henderson </p>
											<span className=" text-sm">#flunk_god</span>
										</div>
									</td>
									<td>1330</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="card-4">
					<div className="card-head">
						<span>play with friends</span>
						<p className="md:text-2xl leading-6  capitalize">Create teams for more winnings</p>
					</div>

					<div>
						<div className="stats-card">
							<div>
								<div>
									<MatchAmount />
									<h6>4500</h6>
									<span>Matches Played</span>
								</div>
								<div>
									<span>Win ratio</span>
									<p>65%</p>
								</div>
							</div>
							<div>
								<div>
									<TournamentTrophy />
									<h6>4500</h6>
									<span>Tournaments Played</span>
								</div>
								<div>
									<span>Win ratio</span>
									<p>65%</p>
								</div>
							</div>
						</div>
						<div className="most-played-card">
							<div>
								<span>
									<MostPlayed />
								</span>

								<div>
									<span>Most played game</span>

									<p>Call of Duty: Modern warefare</p>
								</div>
							</div>
							<CaretRight />
						</div>
					</div>

					<div>
						<p className="sm:pr-32">
							Join the call of duty tournament and get a chance to win up to $ 2000 prize.....{' '}
						</p>

						<div>
							<Button variant="primary" size="large" shadow>
								Explore now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Built;
