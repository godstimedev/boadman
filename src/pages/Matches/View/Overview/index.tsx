import { Accordion, Notification, Pallet } from '@/ui';
import { Container } from './styles';
import { HeroAvatar } from '@/assets/images';
import { CaretRight, EyeIcon } from '@/assets/svgs';
import { useState } from 'react';

const MatchOverview = () => {
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
				<div>
					<div className="player-1">
						<div>
							<span>
								Player A <span className="quote">(Game creator)</span>
							</span>
							<div>
								<div className="img-con">
									<img src={HeroAvatar} alt="/" />
								</div>
								<p>Flunk_god</p>
								<EyeIcon />
							</div>
						</div>
						<div>
							<div>
								<span>Kill</span>
								<p>-</p>
							</div>
							<div>
								<span>Damages</span>
								<p>-</p>
							</div>
							<div>
								<span>Headshot</span>
								<p>-</p>
							</div>
							<div>
								<span>Score</span>
								<p>-</p>
							</div>
						</div>
					</div>
					<div className="versus">VS</div>
					<div className="player-2">
						<div>
							<span>
								Player B <span className="quote">(Challenger)</span>
							</span>
							<div>
								<div className="img-con">
									<img src={HeroAvatar} alt="/" />
								</div>
								<p>Basmin</p>
								<EyeIcon />
							</div>
						</div>
						<div>
							<div>
								<span>Kill</span>
								<p>-</p>
							</div>
							<div>
								<span>Damages</span>
								<p>-</p>
							</div>
							<div>
								<span>Headshot</span>
								<p>-</p>
							</div>
							<div>
								<span>Score</span>
								<p>-</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					{statsList.map((stat, i) => (
						<Pallet key={i} title={stat.title} value={stat.value} />
					))}
				</div>
			</div>

			<div className="rules">
				<h6>Match rules</h6>

				<div>
					<div className="trigger">
						<button className={rules === 1 ? 'active' : ''} onClick={() => setRules(1)}>
							General rules
							<CaretRight />
						</button>
						<button className={rules === 2 ? 'active' : ''} onClick={() => setRules(2)}>
							General rules
							<CaretRight />
						</button>
						<button className={rules === 3 ? 'active' : ''} onClick={() => setRules(3)}>
							General rules
							<CaretRight />
						</button>
						<button className={rules === 4 ? 'active' : ''} onClick={() => setRules(4)}>
							General rules
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
						]}
					/>
				</div>
			</div>
		</Container>
	);
};

export default MatchOverview;

const statsList = [
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Game',
		value: 'Valorant',
	},
	{
		title: 'Game',
		value: 'Valorant',
	},
];
