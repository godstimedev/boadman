import { Button, Table } from '@/ui';
import { Container } from './styles';
import {
	Agent1,
	AvatarTable,
	MapAscent,
	MapBreeze,
	MapSunset,
	Sheriff,
	Sniper,
	Vandal,
} from '@/assets/images';
import { TierRadiant } from '@/assets/svgs';

const Overview = () => {
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
					<table className="bottom ">
						<tbody>
							<tr>
								<td>
									<div></div>
								</td>
								<td>
									<span>Headshots</span>
									<div>
										<p>33.45%</p>
										<span>(2978)</span>
									</div>
								</td>
								<td>
									<span>Kills</span>
									<p>200</p>
								</td>
							</tr>
							<tr>
								<td>
									<div></div>
								</td>
								<td>
									<span>Bodyshots</span>
									<div>
										<p>63.84%</p>
										<span>(5684)</span>
									</div>
								</td>
								<td>
									<span>Deaths</span>
									<p>200</p>
								</td>
							</tr>
							<tr>
								<td>
									<div></div>
								</td>
								<td>
									<span>Legshots</span>
									<div>
										<p>2.95% </p>
										<span>(445)</span>
									</div>
								</td>
								<td>
									<span>Assist</span>
									<p>200</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="top-weapons">
					<div>
						<p>Top weapons</p>
						<Button variant="text" size="small">
							SEE ALL
						</Button>
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
						<Button variant="text" size="small">
							SEE ALL
						</Button>
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
										<img src={AvatarTable} alt="/" className="w-4 h-4" />
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
										<img src={AvatarTable} alt="/" className="w-4 h-4" />
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
										<img src={AvatarTable} alt="/" className="w-4 h-4" />
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

			<div className="table-cons-wrapper">
				<div className="table-con-1">
					<div>
						<div>
							<p>Top agents</p>
							<span>Based on lifetime agent playtime</span>
						</div>

						<div>
							<Button variant="outline">View all agents</Button>
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

				<div className="table-con-2"></div>
			</div>
		</Container>
	);
};

export default Overview;
