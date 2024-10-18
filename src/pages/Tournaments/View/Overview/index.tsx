import { Accordion, Notification, Pallet } from '@/ui';
import { Container } from './styles';
import { CalenderEnd, CalenderStart, CaretRight, InputDateTime } from '@/assets/svgs';
import { useState } from 'react';

const Overview = () => {
	const [rules, setRules] = useState(1);

	return (
		<Container>
			<Notification
				message={
					'Make sure you record each game. You can either submit a stream link or submit the whole recorded stream as game evidence in case of dispute.'
				}
				variant="text"
			/>

			<div className="stats">
				{statsList.map((stat, i) => (
					<Pallet key={i} title={stat.title} value={stat.value} />
				))}
			</div>

			<div className="details">
				<div>
					<h6>About Tournaments</h6>
					<p>
						Due to certain restrictions, some individuals won’t be able to participate inn this match.
						Players found in breach of this rule will be suspended from boardman. Due to certain
						restrictions, some individuals won’t be able to participate inn this match. Players found in
						breach of this rule will be suspended from boardman. Due to certain restrictions, some
						individuals won’t be able to participate inn this match. Players found in breach of this rule
						will be suspended from boardman. Due to certain restrictions, some individuals won’t be able
						to participate inn this match. Players found in breach of this rule will be suspended from
						boardman.
					</p>
					<div>
						<div>
							<CalenderStart /> <span>23 May 2024 08:00PM EST</span>
						</div>
						<div>
							<CalenderEnd /> <span>30 May 2024 08:00PM EST</span>
						</div>
						<div>
							<InputDateTime /> <span>30 May 2024 08:00PM EST</span>
						</div>
					</div>
				</div>
				<div>
					<h6>Prize pool</h6>

					<div>
						<div>
							<span>1st place</span>
							<span>500 coins</span>
						</div>
						<div>
							<span>2nd place</span>
							<span>200 coins</span>
						</div>
						<div>
							<span>3rd place</span>
							<span>100 coins</span>
						</div>
					</div>
				</div>
			</div>

			<div className="rules">
				<h6>Tournament rules</h6>

				<div>
					<div className="trigger">
						<button className={rules === 1 ? 'active' : ''} onClick={() => setRules(1)}>
							General rules
							<CaretRight />
						</button>
						<button className={rules === 2 ? 'active' : ''} onClick={() => setRules(2)}>
							Stream submitting policy
							<CaretRight />
						</button>
						<button className={rules === 3 ? 'active' : ''} onClick={() => setRules(3)}>
							Payout format and dates
							<CaretRight />
						</button>
						<button className={rules === 4 ? 'active' : ''} onClick={() => setRules(4)}>
							Admin set of rules and regulations
							<CaretRight />
						</button>
						<button className={rules === 5 ? 'active' : ''} onClick={() => setRules(5)}>
							General rules
							<CaretRight />
						</button>
					</div>
					<div className="display">
						{rules == 1 ? (
							<div>Rule 1</div>
						) : rules === 2 ? (
							<div>Rule 2</div>
						) : rules === 3 ? (
							<div>Rule 3</div>
						) : rules === 4 ? (
							<div>Rule 4</div>
						) : (
							<div>Rule 5</div>
						)}
					</div>
				</div>

				<div className="accordion-con">
					<Accordion
						items={[
							{
								title: 'General rules',
								content: 'item content',
							},
							{
								title: 'Stream submitting policy',
								content: 'item content',
							},
							{
								title: 'Payout format and dates',
								content: 'item content',
							},
							{
								title: 'Admin set of rules and regulations',
								content: 'item content',
							},
							{
								title: 'Payout format and dates',
								content: 'item content',
							},
						]}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Overview;

const statsList = [
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Fee',
		value: '300 coins',
	},
	{
		title: 'Mode',
		value: '1 v 1 (best of 3)',
	},
	{
		title: 'Platform',
		value: 'Xbox',
	},
	{
		title: 'Format',
		value: 'Single Elimination',
	},
	{
		title: 'Rounds (per match)',
		value: '2 round ',
	},
];
