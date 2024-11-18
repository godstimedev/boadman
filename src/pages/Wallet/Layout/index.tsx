import { CaretDown, Download, TeamsWon } from '@/assets/svgs';
import { Container } from './syles';

import { APP_ROUTES } from '@/constants';
import { NavLink, Outlet } from 'react-router-dom';
import { Button, Dropdown, InputGroup, LineChart } from '@/ui';
import { useState } from 'react';
import { GeneralChangeEventType } from '@/types';
import Deposit from '../Modals/Deposit';

const Wallet = () => {
	const [formData, setFormData] = useState({
		search: '',
	});
	const [depositModal, setDepositModal] = useState(false);

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const [clickedRows, setClickedRows] = useState<Record<number, boolean>>({});
	// Handle row click
	const handleRowClick = (rowId: number) => {
		setClickedRows((prev) => ({
			...prev,
			[rowId]: !prev[rowId], // Toggle the row's click status
		}));
	};

	// console.log(clickedRows);

	const chartData = [
		{ month: 'January', coins: 30 },
		{ month: 'February', coins: 35 },
		{ month: 'March', coins: 50 },
		{ month: 'April', coins: 45 },
		{ month: 'May', coins: 33 },
		{ month: 'June', coins: 63 },
		{ month: 'July', coins: 95 },
		{ month: 'August', coins: 87 },
		{ month: 'September', coins: 99 },
		{ month: 'October', coins: 110 },
		{ month: 'Novemeber', coins: 115 },
		{ month: 'December', coins: 150 },
	];

	return (
		<Container>
			<Deposit deposit={depositModal} setDeposit={setDepositModal} />

			<div className="head">
				<h4>Wallet</h4>
			</div>

			<div className="details">
				<div>
					<h5>My Balance</h5>

					<div>
						<div className="balance">
							<div>
								<TeamsWon />
								<div>
									<p>Available Balance</p>
									<div>
										<h4>34000 coins</h4> <span>~ 1200 USD</span>
									</div>

									<Button onClick={() => setDepositModal(true)} variant="text">
										Deposit
									</Button>
								</div>
							</div>

							<div className="win-lose">
								<div>
									<TeamsWon />
									<div>
										<p>Won</p>
										<h5>34000 coins</h5>
										<span>~ 500 USD</span>
									</div>
								</div>

								<div>
									<TeamsWon />
									<div>
										<p>Lose</p>
										<h5>34000 coins</h5>
										<span>~ 500 USD</span>
									</div>
								</div>
							</div>
						</div>

						<div className="charts">
							<div>
								<div>
									<h6>34000 coins</h6>
									<span className="stat">+3%</span>
								</div>
								<div>
									<LineChart
										chartData={chartData}
										dataKey="coins"
										name="Total this year"
										lineColor="#673AB7"
									/>
								</div>
							</div>
							<div>
								<div>
									<h6>34000 coins</h6>
									<span className="stat">+3%</span>
								</div>
								<div>
									<LineChart
										chartData={chartData}
										dataKey="coins"
										name="Total this month"
										lineColor="#673AB7"
									/>
								</div>
							</div>
							<div>
								<div>
									<h6>34000 coins</h6>
									<span className="stat">+3%</span>
								</div>
								<div>
									<LineChart
										chartData={chartData}
										dataKey="coins"
										name="Total this week"
										lineColor="#673AB7"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<aside>
					<div>
						<h6>Payment method</h6>
						<p>
							You can either withdraw money into your personal account or send funds to be used for team
							games and tournaments
						</p>
					</div>

					<div className="action-con">
						<ul>
							{actionList.map((item) => (
								<NavLink key={item.name} to={item.link}>
									<li>{item.name}</li>
								</NavLink>
							))}
						</ul>

						<Outlet />
					</div>
				</aside>
			</div>

			<div>
				<div>
					<h4>Transaction History</h4>

					<div>
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
						<InputGroup
							type="search"
							name="search"
							placeholder="Search game"
							autoComplete="off"
							value={formData.search}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="table-con">
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Transaction ID</th>
								<th>Date</th>
								<th>Type</th>
								<th>Status</th>
								<th>Amount</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{transactionData.map((data, index) => (
								<tr key={index} onClick={() => handleRowClick(index + 1)}>
									<td>
										<div className="checkbox">
											<input
												type="checkbox"
												checked={!!clickedRows[index + 1]} // Reflect the clicked state
												readOnly
											/>
										</div>
									</td>
									<td>
										<div className="flex items-center justify-center">
											<p>{data.id}</p>
										</div>
									</td>

									<td>
										<div className="flex items-center justify-center">
											<p>{data.date}</p>
											<span>{data.time}</span>
										</div>
									</td>
									<td>
										<div className="flex items-center justify-center">
											<p>{data.type}</p>
										</div>
									</td>
									<td>
										<div className="badge-con">
											<div className={`${data.status} badge`}>
												<span>{data.status}</span>
											</div>
										</div>
									</td>
									<td>
										<div className="flex items-center justify-center">
											<p>{data.amount}</p>
										</div>
									</td>
									<td>
										<div>
											<p>Download invoice</p>
											<span>
												<Download />
											</span>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Container>
	);
};

export default Wallet;

const actionList = [
	{
		name: 'Witihdraw',
		link: APP_ROUTES.wallet.withdraw,
	},
	{
		name: 'Transfer',
		link: APP_ROUTES.wallet.transfer,
	},
];

const transactionData = [
	{
		id: 'xxxx 4564 2456',
		date: 'May 27 2023',
		time: '9:00 pm',
		type: 'Competition fee',
		status: 'Pending',
		amount: '2300 coins',
	},
	{
		id: 'xxxx 4564 2456',
		date: 'May 27 2023',
		time: '9:00 pm',
		type: 'Deposit',
		status: 'Pending',
		amount: '2300 coins',
	},
	{
		id: 'xxxx 4564 2456',
		date: 'May 27 2023',
		time: '9:00 pm',
		type: 'Transfer',
		status: 'Pending',
		amount: '2300 coins',
	},
	{
		id: 'xxxx 4564 2456',
		date: 'May 27 2023',
		time: '9:00 pm',
		type: 'Deposit',
		status: 'Pending',
		amount: '2300 coins',
	},
	{
		id: 'xxxx 4564 2456',
		date: 'May 27 2023',
		time: '9:00 pm',
		type: 'Transfer',
		status: 'Pending',
		amount: '2300 coins',
	},
	{
		id: 'xxxx 4564 2456',
		date: 'May 27 2023',
		time: '9:00 pm',
		type: 'Competition fee',
		status: 'Pending',
		amount: '2300 coins',
	},
];
