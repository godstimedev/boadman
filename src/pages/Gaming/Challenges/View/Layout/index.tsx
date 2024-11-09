import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Container } from './styles';
import { Valorant } from '@/assets/svgs';
import { Button } from '@/ui';
import { APP_ROUTES } from '@/constants';
import { DashboardHeader } from '@/components';
import { useState } from 'react';
import ReportResult from '../Modals/ReportResult';

const ChallengeView = () => {
	const params = useParams();
	const [report, setReport] = useState(false);

	const navList = [
		{
			name: 'Overview',
			link: APP_ROUTES.gaming.use_challenge_overview(params.challengeId),
		},
		{
			name: 'Summary',
			link: APP_ROUTES.gaming.use_challenge_summary(params.challengeId),
		},
	];

	return (
		<Container>
			<DashboardHeader />

			<div className="banner" />

			<div className="challenge-head">
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
						Decline
					</Button>
					<Button onClick={() => setReport(true)} variant="primary">
						Accept
					</Button>
				</div>
			</div>

			<ReportResult report={report} setReport={setReport} />

			<div className="challenge-con">
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

export default ChallengeView;
