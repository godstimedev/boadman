import { Button, Dropdown } from '@/ui';
import { Container } from './styles';
import { CaretDown, Valorant } from '@/assets/svgs';
import { Agent1 } from '@/assets/images';

const Challenges = () => {
	return (
		<Container>
			<div className="head">
				<div className="dropdowns">
					<Dropdown
						trigger={
							<div className="dropdown">
								Active matches
								<CaretDown className="caret" />
							</div>
						}
						position="bottom"
					>
						<div>
							<button>All matches</button>
							<button>Upcoming</button>
							<button>Finished</button>
							<button>In progress</button>
							<button>Cancelled</button>
						</div>
					</Dropdown>
					<Dropdown
						trigger={
							<div className="dropdown">
								All games <CaretDown className="caret" />
							</div>
						}
					>
						<div>
							<button>All games</button>
							<button>Call of duty</button>
							<button>Fortnite</button>
							<button>Valorant</button>
							<button>League of legends</button>
						</div>
					</Dropdown>
				</div>

				<div className="action">
					<div className="filter">
						<Dropdown
							position="bottomRight"
							trigger={
								<div className="flex items-center gap-4 ">
									Filter <CaretDown className="caret" />
								</div>
							}
						>
							<div>
								<button>Upcoming</button>
								<button>Finished</button>
							</div>
						</Dropdown>
					</div>

					<Button variant="primary">Make challenge</Button>
				</div>
			</div>

			<div className="table-con">
				<table>
					<tbody>
						<tr>
							<td>
								<div>
									<span>
										<Valorant />
									</span>
									<div>
										<p>Loner epic</p>
										<span>WED, JUN 21, 18:30 CST</span>
									</div>
								</div>
							</td>
							<td>
								<span className="badge">Upcoming</span>
							</td>
							<td>
								<div>
									<span>Challenger</span>{' '}
									<div>
										<div>
											<img src={Agent1} alt="/" />
										</div>{' '}
										<p>Flunk_god</p>
									</div>
								</div>
							</td>
							<td>
								<div>
									<span>Mode</span>
									<p>1v1</p>
								</div>
							</td>
							<td>
								<div>
									<span>Prize</span>
									<p>300 coins</p>
								</div>
							</td>
							<td>
								<div>
									<div>
										<Button variant="text">Accept</Button>
									</div>
									<div>
										<Button variant="text">Decline</Button>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<span>
										<Valorant />
									</span>
									<div>
										<p>Loner epic</p>
										<span>WED, JUN 21, 18:30 CST</span>
									</div>
								</div>
							</td>
							<td>
								<span className="badge">Upcoming</span>
							</td>
							<td>
								<div>
									<span>Challenger</span>{' '}
									<div>
										<div>
											<img src={Agent1} alt="/" />
										</div>{' '}
										<p>Flunk_god</p>
									</div>
								</div>
							</td>
							<td>
								<div>
									<span>Mode</span>
									<p>1v1</p>
								</div>
							</td>
							<td>
								<div>
									<span>Prize</span>
									<p>300 coins</p>
								</div>
							</td>
							<td>
								<div>
									<div>
										<Button variant="text">Accept</Button>
									</div>
									<div>
										<Button variant="text">Decline</Button>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<span>
										<Valorant />
									</span>
									<div>
										<p>Loner epic</p>
										<span>WED, JUN 21, 18:30 CST</span>
									</div>
								</div>
							</td>
							<td>
								<span className="badge">Upcoming</span>
							</td>
							<td>
								<div>
									<span>Challenger</span>{' '}
									<div>
										<div>
											<img src={Agent1} alt="/" />
										</div>{' '}
										<p>Flunk_god</p>
									</div>
								</div>
							</td>
							<td>
								<div>
									<span>Mode</span>
									<p>1v1</p>
								</div>
							</td>
							<td>
								<div>
									<span>Prize</span>
									<p>300 coins</p>
								</div>
							</td>
							<td>
								<div>
									<div>
										<Button variant="text">Accept</Button>
									</div>
									<div>
										<Button variant="text">Decline</Button>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Container>
	);
};

export default Challenges;
