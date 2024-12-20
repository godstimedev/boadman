import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Container } from './styles';
import { Valorant } from '@/assets/svgs';
import { Button } from '@/ui';
import { APP_ROUTES } from '@/constants';

import { useState } from 'react';
import ReportResult from '../Modals/ReportResult';

const MatchView = () => {
	const params = useParams();
	const [report, setReport] = useState(false);

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.matches.use_overview(params?.matchId ? params?.matchId : ''),
		},
		{
			name: 'Summary',
			link: APP_ROUTES.matches.use_summary(params?.matchId ? params?.matchId : ''),
		},
	];

	return (
		<Container>
			<div className="banner" />

			<div className="head">
				<div>
					<div className="icon">
						<Valorant />
					</div>
					<div>
						<span>Upcoming</span>
						<h6>Loner epic</h6>
						<span>Starts in 2 days 45 Minutes.</span>
					</div>
				</div>

				<div>
					<Button variant="outline" outline="tetiary">
						Leave match
					</Button>
					<Button onClick={() => setReport(true)} variant="primary">
						Report result
					</Button>
				</div>
			</div>

			<ReportResult report={report} setReport={setReport} />

			<div className="match-con">
				<ul>
					{navList.map((item) => (
						<NavLink key={item.name} to={item.link}>
							<li>{item.name}</li>
						</NavLink>
					))}
				</ul>

				<Outlet />
			</div>
		</Container>
	);
};

export default MatchView;
