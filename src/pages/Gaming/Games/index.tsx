import {
	CaretRight,
	Challenge,
	Controller,
	Fortnite,
	JoinEmoji,
	MatchAmount,
	MostPlayed,
	TournamentTrophy,
	Valorant,
} from '@/assets/svgs';
import { Container } from './styles';
import { Button, InputGroup } from '@/ui';
import {
	ApexLegendsSlider,
	CallOfDutyFull,
	CyberPunkEvent,
	HeroAvatar,
	Valorant as ValorantImage,
	LeagueOfLegends,
} from '@/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { LastPlayed, RecentWin } from '../Cards';
import { MatchProps } from '../../../components/Cards/Match/Match.types';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Games = () => {
	const [filter, setFilter] = useState('all');
	const [formData, setFormData] = useState({
		search: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Container>
			<div className="top">
				<div>
					<div>
						<h6>Gaming stats</h6>
						<div>
							<div className="stats-card">
								<div>
									<div>
										<MatchAmount />
										<h6>4500</h6>
										<span>Matches Played</span>
									</div>
									<div>
										<span>Win ratio</span>
										<p>65%</p>
									</div>
								</div>
								<div>
									<div>
										<TournamentTrophy />
										<h6>4500</h6>
										<span>Tournaments Played</span>
									</div>
									<div>
										<span>Win ratio</span>
										<p>65%</p>
									</div>
								</div>
							</div>
							<div className="most-played-card">
								<div>
									<span>
										<MostPlayed />
									</span>

									<div>
										<span>Most played game</span>

										<p>Call of Duty: Modern warefare</p>
									</div>
								</div>
								<CaretRight />
							</div>
						</div>
					</div>

					<div>
						<h6>Recent wins</h6>

						<div>
							{recentWins.map((match, index) => (
								<RecentWin
									key={index}
									title={match.title}
									svg={match.svg}
									stats={match.stats}
									coins={match.coins}
									score={match.score}
									ranked={match.ranked}
								/>
							))}
						</div>
					</div>
				</div>

				<div>
					<div className="make-challenge">
						<div>
							<Challenge />
						</div>
						<div>
							<p>Want to prove your superiority? Challenge friends and gamers to a personal game now</p>
							<Button variant="outline" outline="primary" size="small">
								Make Challenge
							</Button>
						</div>
					</div>
					<div className="alert-card">
						<span>
							<JoinEmoji />
						</span>
						<p>
							Looking for a new challenge or a way to increase earnings? Play your favourite games now
						</p>
						<div>
							<Button variant="outline" size="small">
								Join game
							</Button>
							<Button variant="primary" size="small">
								Create game
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="swiper-con ">
				<Swiper spaceBetween={20} slidesPerView={1.15}>
					<SwiperSlide>
						<div className="make-challenge">
							<div>
								<Challenge />
							</div>
							<div>
								<p>Want to prove your superiority? Challenge friends and gamers to a personal game now</p>
								<Button variant="outline" outline="primary" size="small">
									Make Challenge
								</Button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="alert-card">
							<span>
								<JoinEmoji />
							</span>
							<p>
								Looking for a new challenge or a way to increase earnings? Play your favourite games now
							</p>
							<div>
								<Button variant="outline" size="small">
									Join game
								</Button>
								<Button variant="primary" size="small">
									Create game
								</Button>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="middle">
				<div>
					<div className="section-header">
						<h6>Last played</h6>
					</div>
					<div>
						{lastPlayed.map((game, index) => (
							<LastPlayed
								key={index}
								title={game.title}
								image={game.image}
								hours_played={game.hours_played}
								win_percent={game.win_percent}
								avg_score={game.avg_score}
								won_coins={game.won_coins}
							/>
						))}
					</div>
				</div>

				<div>
					<div className="section-header">
						<h6>My Matches</h6>

						<Button variant="text" size="small">
							See all
						</Button>
					</div>

					<div>
						{matchData.map((match, index) => (
							<Match
								key={index}
								title={match.title}
								date={match.date}
								svg={match.svg}
								status={match.status}
								player1={match.player1}
								player2={match.player2}
								// winner={match.winner}
								// scores={match.scores}
								mode={match.mode}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="swiper-con ">
				<div className="section-header">
					<h6>Last played</h6>
				</div>
				<Swiper
					spaceBetween={20}
					slidesPerView={1.3}
					breakpoints={{
						// When the screen width is 280px or larger
						280: {
							slidesPerView: 1.2,
							spaceBetween: 15,
						},
						// When the screen width is 390px or larger
						400: {
							slidesPerView: 1.25,
							spaceBetween: 15,
						},
						// When the screen width is 440px or larger
						470: {
							slidesPerView: 1.6,
							spaceBetween: 25,
						},
						// When the screen width is 440px or larger
						540: {
							slidesPerView: 1.8,
							spaceBetween: 25,
						},
					}}
				>
					{lastPlayed.map((game, index) => (
						<SwiperSlide>
							<LastPlayed
								key={index}
								title={game.title}
								image={game.image}
								hours_played={game.hours_played}
								win_percent={game.win_percent}
								avg_score={game.avg_score}
								won_coins={game.won_coins}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="swiper-con ">
				<div className="section-header">
					<h6>My Matches</h6>

					<Button variant="text" size="small">
						See all
					</Button>
				</div>
				<Swiper
					spaceBetween={20}
					slidesPerView={1.3}
					breakpoints={{
						// When the screen width is 280px or larger
						280: {
							slidesPerView: 1.2,
							spaceBetween: 15,
						},
						// When the screen width is 390px or larger
						400: {
							slidesPerView: 1.25,
							spaceBetween: 15,
						},
						// When the screen width is 440px or larger
						470: {
							slidesPerView: 1.6,
							spaceBetween: 25,
						},
						// When the screen width is 440px or larger
						540: {
							slidesPerView: 1.8,
							spaceBetween: 25,
						},
					}}
				>
					{matchData.map((match, index) => (
						<SwiperSlide>
							<Match
								key={index}
								title={match.title}
								date={match.date}
								svg={match.svg}
								status={match.status}
								player1={match.player1}
								player2={match.player2}
								// winner={match.winner}
								// scores={match.scores}
								mode={match.mode}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="bottom">
				<h6>Games</h6>

				<div className="filter-box">
					<button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
						<Controller />
						All
					</button>
					<button
						className={filter === 'adventure' ? 'active' : ''}
						onClick={() => setFilter('adventure')}
					>
						<Controller />
						Adventure
					</button>
					<button className={filter === 'action' ? 'active' : ''} onClick={() => setFilter('action')}>
						<Controller />
						Action
					</button>
					<button
						className={filter === 'strategy' ? 'active' : ''}
						onClick={() => setFilter('strategy')}
					>
						<Controller />
						Strategy
					</button>
					<button className={filter === 'puzzle' ? 'active' : ''} onClick={() => setFilter('puzzle')}>
						<Controller />
						Puzzle
					</button>
					<button className={filter === 'racing' ? 'active' : ''} onClick={() => setFilter('racing')}>
						<Controller />
						Racing
					</button>
					<button className={filter === 'arcade' ? 'active' : ''} onClick={() => setFilter('arcade')}>
						<Controller />
						Arcade
					</button>
					<button className={filter === 'jrpg' ? 'active' : ''} onClick={() => setFilter('jrpg')}>
						<Controller />
						JRPG
					</button>

					<div>
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

				<div className="input-box">
					<InputGroup
						type="search"
						name="search"
						placeholder="Search game"
						autoComplete="off"
						value={formData.search}
						onChange={handleChange}
					/>
				</div>

				<div className="games-con">
					{gameData.map((game, index) => (
						<Link key={index} to={APP_ROUTES.gaming.use_overview(index.toString())}>
							<div className="game-card">
								<div>
									<img src={game.image} alt={game.title} />
								</div>
								<p>{game.title} </p>
							</div>
						</Link>
					))}
				</div>

				<div className="swiper-con">
					<Swiper
						spaceBetween={20}
						slidesPerView={1.3}
						breakpoints={{
							// When the screen width is 280px or larger
							280: {
								slidesPerView: 1.3,
								spaceBetween: 25,
							},
							// When the screen width is 390px or larger
							390: {
								slidesPerView: 1.4,
								spaceBetween: 25,
							},
							// When the screen width is 440px or larger
							470: {
								slidesPerView: 1.7,
								spaceBetween: 25,
							},
							// When the screen width is 440px or larger
							540: {
								slidesPerView: 1.85,
								spaceBetween: 25,
							},
							// When the screen width is 550px or larger
							650: {
								slidesPerView: 2.1,
								spaceBetween: 25,
							},
							// When the screen width is 768px or larger (e.g., tablets)
							768: {
								slidesPerView: 2.7,
								spaceBetween: 25,
							},
						}}
					>
						{gameData.map((game, index) => (
							<SwiperSlide>
								<Link key={index} to={APP_ROUTES.gaming.use_overview(index.toString())}>
									<div className="game-card">
										<div>
											<img src={game.image} alt={game.title} />
										</div>
										<p>{game.title} </p>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</Container>
	);
};

export default Games;

// old match card
const Match = (props: MatchProps) => {
	const { title, svg, date, status, player1, player2, mode } = props;

	return (
		<div className="match-card">
			<div>
				<div>
					<span className="icon-con">{svg}</span>
					<div>
						<p>{title}</p>
						<span>{date}</span>
					</div>
				</div>
				<div className="status">
					<span className="badge">{status}</span>
					{/* {winner && winner === player1?.id ? (
					<div>
						<div className="img-con">
							<img src={player1?.avatar} alt="/" />
						</div>{' '}
						<p className="winner">{player1.name}</p> <WinnerCheck />{' '}
					</div>
				) : winner === player2?.id ? (
					<div>
						<div className="img-con">
							<img src={player2?.avatar} alt="/" />
						</div>{' '}
						<p className="winner">{player2?.name}</p> <WinnerCheck />{' '}
					</div>
				) : null} */}
				</div>
			</div>

			<hr />

			<div>
				<div>
					<div>
						<span>Player 1</span>
						{player1?.name ? (
							<div className="player">
								<div className="img-con">
									<img src={player1.avatar} alt="/" />
								</div>
								<p> {player1.name} </p>
							</div>
						) : (
							<div className="flex items-center justify-center text-center w-full">
								<span>-</span>
							</div>
						)}
					</div>
					{/* {scores ? (
<div className="scores">
<span className={winner === player1?.id ? 'active' : ''}>{scores.player1}</span>
<span>:</span>
<span className={winner === player2?.id ? 'active' : ''}>{scores.player2}</span>
</div>
) : ( */}
					<p>vs</p>
					{/* )} */}
					<div>
						<span>Player 2</span>
						{player2?.name ? (
							<div className="player">
								<div className="img-con">
									<img src={player2.avatar} alt="/" />
								</div>
								<p>{player2.name}</p>
							</div>
						) : (
							'-'
						)}
					</div>
				</div>

				<div>
					<span>Mode</span>
					<p>{mode}</p>
				</div>
			</div>
		</div>
	);
};

const matchData = [
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21, 18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatar,
		},
	},
];

const lastPlayed = [
	{
		title: 'Call of Duty',
		image: CallOfDutyFull,
		hours_played: '40 ',
		win_percent: '78',
		avg_score: '58654.45',
		won_coins: '3400 ',
	},
	{
		title: 'Cyberpunk',
		image: CyberPunkEvent,
		hours_played: '40 ',
		win_percent: '78',
		avg_score: '58654.45',
		won_coins: '3400 ',
	},
];

const recentWins = [
	{
		title: 'Fortnite',
		svg: <Fortnite />,
		stats: ['2345 kills', '345 K/D'],
		coins: 300,
		score: 3425,
	},
	{
		title: 'Valorant',
		svg: <Fortnite />,
		stats: ['2345 kills', '1.54.2 KDA'],
		coins: 300,
		score: 3425,
	},
	{
		title: 'Call of Duty',
		svg: <Fortnite />,
		stats: ['2345 kills', '345 death', '345 damage'],
		ranked: '2nd',
	},
];

const gameData = [
	{
		title: 'Modern warfare III ',
		image: CallOfDutyFull,
	},
	{
		title: 'Valorant',
		image: ValorantImage,
	},
	{
		title: 'Apex Legends',
		image: ApexLegendsSlider,
	},
	{
		title: 'League of Legends',
		image: LeagueOfLegends,
	},
];
