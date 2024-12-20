import { Button, Dropdown, InputGroup, LineChart } from '@/ui';
import { Container } from './styles';
import { CaretDown, Download } from '@/assets/svgs';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';

const TeamWallet = () => {
	const [formData, setFormData] = useState({
		search: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

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

	const [clickedRows, setClickedRows] = useState<Record<number, boolean>>({});
	// Handle row click
	const handleRowClick = (rowId: number) => {
		setClickedRows((prev) => ({
			...prev,
			[rowId]: !prev[rowId], // Toggle the row's click status
		}));
	};

	console.log(clickedRows);

	return (
		<Container>
			<div className="header">
				<div>
					<div>
						<div>
							<h1>30,000</h1>
							<span>coins</span>
						</div>
						<div>
							<Button variant="outline">Withdraw</Button>
							<Button variant="primary">Deposit</Button>
						</div>
					</div>

					<div className="charts">
						<div>
							<div>
								<div>
									<h4>34000</h4>
									<span>coins</span>
									<span className="stat">+3%</span>
								</div>
							</div>

							<div>
								<LineChart
									chartData={chartData}
									dataKey="coins"
									name="Total this year"
									lineColor="#FFA000"
								/>
							</div>
						</div>
						<div>
							<div>
								<div>
									<h4>34000</h4>
									<span>coins</span>
								</div>
							</div>

							<div>
								<LineChart chartData={chartData} dataKey="coins" name="Wins" lineColor="#3498DB" />
							</div>
						</div>
						<div>
							<div>
								<div>
									<h4>34000</h4>
									<span>coins</span>
								</div>
							</div>
							<div>
								<LineChart chartData={chartData} dataKey="coins" name="Losses" lineColor="#673AB7" />
							</div>
						</div>
					</div>
				</div>

				<div>
					<h6>Transaction History</h6>

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
		</Container>
	);
};

export default TeamWallet;

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
