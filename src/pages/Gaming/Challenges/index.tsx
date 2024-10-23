import { Button, Dropdown } from '@/ui';
import { Container } from './styles';
import { CaretDown, Valorant } from '@/assets/svgs';
import { HeroAvatar } from '@/assets/images';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Challenges = () => {
	const [filter, setFilter] = useState('challenge-invites');
	const navigate = useNavigate();

	const handleRowClick = (index: number) => {
		navigate(APP_ROUTES.gaming.use_challenge_overview(index.toString()));
	};
	const handleAccept = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation(); // Prevent container click
		// console.log('Accepted');
	};
	const handleDecline = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation(); // Prevent container click
		// console.log('Declided');
	};

	return (
		<Container>
			<div className="filter-box">
				<div className="filter-buttons">
					<button
						className={filter === 'challenge-invites' ? 'active' : ''}
						onClick={() => setFilter('challenge-invites')}
					>
						Challenge invites
					</button>
					<button
						className={filter === 'active-challenges' ? 'active' : ''}
						onClick={() => setFilter('active-challenges')}
					>
						Active challenges
					</button>
					<button
						className={filter === 'my-challenges' ? 'active' : ''}
						onClick={() => setFilter('my-challenges')}
					>
						My challenges
					</button>
					<button
						className={filter === 'challenge-history' ? 'active' : ''}
						onClick={() => setFilter('challenge-history')}
					>
						Challenge history
					</button>
				</div>
				<div className="dropdowns">
					<Dropdown
						trigger={
							<div className="dropdown ">
								All games <CaretDown className="caret" />
							</div>
						}
					>
						<div>
							<button>Upcoming</button>
							<button>Finished</button>
						</div>
					</Dropdown>
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
				</div>
			</div>

			<div className="table-con">
				<table>
					<tbody>
						{challengesData.map((data, index) => (
							<tr key={index} onClick={() => handleRowClick(index)}>
								<td>
									<div>
										<span>{data.image}</span>
										<div>
											<p>{data.title}</p>
											<span>{data.date}</span>
										</div>
									</div>
								</td>
								<td className="badge-con">
									<div className={`${data.status} badge`}>
										<span>{data.status}</span>
									</div>
								</td>
								<td>
									<div>
										<span>Challenger</span>{' '}
										<div>
											<div>
												<img src={data.challenger.image} alt={data.challenger.name} />
											</div>{' '}
											<p>{data.challenger.name}</p>
										</div>
									</div>
								</td>
								<td>
									<div>
										<span>Mode</span>
										<p>{data.mode}</p>
									</div>
								</td>
								<td>
									<div>
										<span>Prize</span>
										<p>{data.prize}</p>
									</div>
								</td>
								<td>
									<div>
										<div>
											<Button onClick={handleAccept} variant="text">
												Accept
											</Button>
										</div>
										<div>
											<Button onClick={handleDecline} variant="text">
												Decline
											</Button>
										</div>
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

export default Challenges;

const challengesData = [
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Upcoming',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Finished',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Pending',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Rejected',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'In progress',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Accepted',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Finished',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		image: <Valorant />,
		status: 'Accepted',
		challenger: {
			image: HeroAvatar,
			name: 'Flunk_god',
		},
		mode: '1v1',
		prize: '300 coins',
	},
];
