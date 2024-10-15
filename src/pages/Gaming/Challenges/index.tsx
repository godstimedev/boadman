import { Button, Dropdown } from '@/ui';
import { Container } from './styles';
import { CaretDown } from '@/assets/svgs';

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
							<td>aaa</td>
							<td>baaaa</td>
							<td>caa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caa</td>
						</tr>
						<tr>
							<td>aaa</td>
							<td>baaaa</td>
							<td>caa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caa</td>
						</tr>
						<tr>
							<td>aaa</td>
							<td>baaaa</td>
							<td>caa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caa</td>
						</tr>
						<tr>
							<td>aaa</td>
							<td>baaaa</td>
							<td>caa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caaa</td>
							<td>caa</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Container>
	);
};

export default Challenges;
