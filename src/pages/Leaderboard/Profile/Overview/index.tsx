import { Button, Table } from '@/ui';
import { Container } from './styles';
import {
	Agent1,
	Character1,
	AvatarTable,
	MapAscent,
	MapBreeze,
	MapSunset,
	Sheriff,
	Sniper,
	Vandal,
} from '@/assets/images';
import { PersonTargetBody, PersonTargetHead, PersonTargetLeg, TierRadiant } from '@/assets/svgs';
import { Link, useParams } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Overview = () => {
	const param = useParams();

	const tableData = [
		{
			rowId: 1,
			rowData: [
				<div className="player">
					<img src={Agent1} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Sage </p>
						<span className=" text-sm">2314 matches</span>
					</div>
				</div>,
				'1234 hrs',

				'67%',
				'1.13.2',
				'180.4',
				'180.4',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 2,
			rowData: [
				<div className="player">
					<img src={Agent1} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Sova </p>
						<span className=" text-sm">1814 matches</span>
					</div>
				</div>,
				'474 hrs',

				'73%',
				'1.05.4',
				'146.8',
				'146.8',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 3,
			rowData: [
				<div className="player">
					<img src={Agent1} alt="/" className="w-4 h-4" />
					<div>
						<p className="font-medium text-sm">Jett </p>
						<span className=" text-sm">814 matches</span>
					</div>
				</div>,
				'234 hrs',

				'58%',
				'2.33.3',
				'127.2',
				'127.2',
			],
			onRowClick: () => console.log('clicked'),
		},
	];

	return (
		<Container>
			<aside>
				<div className="rating">
					<div>
						<p>Rating</p>
					</div>
					<div>
						<div className="top">
							<div>
								<span>
									<TierRadiant />
								</span>
								Radiant
							</div>

							<div>
								<span>182 W 1 D 100L</span>
								<span>Win ratio 67%</span>
							</div>
						</div>
						<div className="middle">
							<table>
								<tbody>
									<tr>
										<td>
											<div>
												<span>Dmg/Round</span>
												<p>346</p>
											</div>
										</td>
										<td>
											<div>
												<span>K/D ratio</span>
												<p>1.45</p>
											</div>
										</td>
										<td>
											<div>
												<span>KDA ratio</span>
												<p>1.45.1</p>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div>
												<span>score/Round</span>
												<p>346</p>
											</div>
										</td>
										<td>
											<div>
												<span>Most kill match</span>
												<p>200</p>
											</div>
										</td>
										<td>
											<div>
												<span>Time played</span>
												<p>102h 20m</p>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="bottom ">
						<div className="person-target">
							<div>
								<PersonTargetHead />
							</div>
							<div className={'active'}>
								<PersonTargetBody />
							</div>
							<div>
								<PersonTargetLeg />
							</div>
						</div>
						<div>
							<div>
								<span>Headshots</span>
								<div>
									<p>33.45%</p>
									<span>(2978)</span>
								</div>
							</div>
							<div>
								<span>Bodyshots</span>
								<div>
									<p className={'active'}>63.84%</p>
									<span>(5684)</span>
								</div>
							</div>
							<div>
								<span>Legshots</span>
								<div>
									<p>2.95% </p>
									<span>(445)</span>
								</div>
							</div>
						</div>
						<div>
							<div>
								<span>Kills</span>
								<p>200</p>
							</div>

							<div>
								<span>Deaths</span>
								<p>200</p>
							</div>

							<div>
								<span>Assist</span>
								<p>200</p>
							</div>
						</div>
					</div>
				</div>

				<div className="top-weapons">
					<div>
						<p>Top weapons</p>
						<Link to={APP_ROUTES.leaderboard.player.use_weapons(param.gameId, param.playerId)}>
							<Button variant="text" size="small">
								SEE ALL
							</Button>
						</Link>
					</div>
					<table>
						<tbody>
							<tr>
								<td>
									<img src={Vandal} alt="/" />
								</td>
								<td>
									<div>
										<span>Rifle</span>
										<p>Vandal</p>
									</div>
								</td>
								<td>
									<div>
										<p>1879 kills</p>
										<div>
											<span>34%</span>
											<span>63%</span>
											<span>4%</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<img src={Sheriff} alt="/" />
								</td>
								<td>
									<div>
										<span>Sidearm</span>
										<p>Sheriff</p>
									</div>
								</td>
								<td>
									<div>
										<p>1879 kills</p>
										<div>
											<span>34%</span>
											<span>63%</span>
											<span>4%</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<img src={Sniper} alt="/" />
								</td>
								<td>
									<div>
										<span>Operator</span>
										<p>Sniper</p>
									</div>
								</td>
								<td>
									<div>
										<p>1879 kills</p>
										<div>
											<span>34%</span>
											<span>63%</span>
											<span>4%</span>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="map-performance">
					<div>
						<p>Map Performance</p>
						<Link to={APP_ROUTES.leaderboard.player.use_maps(param.gameId, param.playerId)}>
							<Button variant="text" size="small">
								SEE ALL
							</Button>
						</Link>
					</div>

					<table>
						<tbody>
							<tr>
								<td>
									<img src={MapAscent} alt="/" />
									<p>Ascent</p>
								</td>

								<td>
									<div>
										<p>65%</p>
										<span>33W 0D 5L</span>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<img src={MapBreeze} alt="/" />
									<p>Breeze</p>
								</td>

								<td>
									<div>
										<p>65%</p>
										<span>33W 0D 5L</span>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<img src={MapSunset} alt="/" />
									<p>Sunset</p>
								</td>

								<td>
									<div>
										<p>65%</p>
										<span>33W 0D 5L</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="recently">
					<div>
						<p>Recently played with</p>
					</div>
					<table>
						<thead>
							<tr>
								<th>Teammate</th>
								<th>Game</th>
								<th>W-D-L</th>
								<th>Win ratio</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="teamate">
										<img src={AvatarTable} alt="/" className="w-4 h-4 rounded-full " />
										<div>
											<p className="font-medium text-sm">Joel Henderson </p>
											<span className=" text-sm">#flunk_god</span>
										</div>
									</div>
								</td>
								<td>
									<span>11</span>
								</td>
								<td>
									<span>33-0-5</span>
								</td>
								<td>
									<span>65%</span>
								</td>
							</tr>
							<tr>
								<td>
									<div className="teamate">
										<img src={AvatarTable} alt="/" className="w-4 h-4 rounded-full" />
										<div>
											<p className="font-medium text-sm">Joel Henderson </p>
											<span className=" text-sm">#flunk_god</span>
										</div>
									</div>
								</td>
								<td>
									<span>11</span>
								</td>
								<td>
									<span>33-0-5</span>
								</td>
								<td>
									<span>65%</span>
								</td>
							</tr>
							<tr>
								<td>
									<div className="teamate">
										<img src={AvatarTable} alt="/" className="w-4 h-4 rounded-full" />
										<div>
											<p className="font-medium text-sm">Joel Henderson </p>
											<span className=" text-sm">#flunk_god</span>
										</div>
									</div>
								</td>
								<td>
									<span>11</span>
								</td>
								<td>
									<span>33-0-5</span>
								</td>
								<td>
									<span>65%</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</aside>

			<div className="space-y-4">
				<div className="table-con-1">
					<div>
						<div>
							<p>Top agents</p>
							<span>Based on lifetime agent playtime</span>
						</div>

						<div className="hidden sm:block">
							<Link to={APP_ROUTES.leaderboard.player.use_agents(param.gameId, param.playerId)}>
								<Button variant="outline" outline="tetiary">
									View all agents
								</Button>
							</Link>
						</div>
						<div className=" sm:hidden">
							<Link to={APP_ROUTES.leaderboard.player.use_agents(param.gameId, param.playerId)}>
								<Button variant="outline" outline="tetiary">
									View all
								</Button>
							</Link>
						</div>
					</div>
					<Table
						maxPage={3}
						loading={false}
						columnNames={['Agent', 'Time played', 'Win%', 'KDA', 'ADR', 'ACS']}
						itemsPerPageOptions={[2, 4, 6]}
						tableData={tableData}
						tableFooter={false}
					/>
				</div>

				<div className="table-con-2">
					<h6>Match History</h6>
					<div className="history">
						<div className="date">
							<p>Jan 2 2024</p>
						</div>

						<div className="stats">
							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="silver">2nd</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>

							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="gold">MVP</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>

							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="silver">2nd</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>
							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="silver">2nd</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>
						</div>

						<div className="date">
							<p>Dec 27, 2023</p>
						</div>

						<div className="stats">
							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="silver">2nd</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>
							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="silver">2nd</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>
							<div className="history-pallet">
								<div className="first">
									<img src={Character1} alt="/" />
									<div>
										<p>Competitive</p>
										<span>Ascent</span>
									</div>
								</div>
								<div className="normal">
									<span>Victory </span>
									<p>36m 30 s</p>
								</div>
								<div className="normal">
									<span>Headshots % </span>
									<p>67%</p>
								</div>
								<div className="score">
									<h6>10 : 13</h6>
									<span className="silver">2nd</span>
								</div>
								<div className="normal">
									<span>KDA</span>
									<p>1.45.1</p>
								</div>
								<div className="normal">
									<span>K/D</span>
									<p>1.45</p>
								</div>
								<div className="normal">
									<span>ADR</span>
									<p>180.4</p>
								</div>
								<div className="normal">
									<span>ACS</span>
									<p>146.8</p>
								</div>
							</div>
						</div>
					</div>

					<Button variant="secondary" size="large">
						See more
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Overview;
