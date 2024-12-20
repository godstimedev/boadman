import { CreateGame, FeaturedTournament, Match } from '@/components';
import { Container } from './styles';
import {
	Achievement1,
	Achievement2,
	Achievement3,
	Achievement4,
	Achievement5,
	Achievement6,
	Coin,
	CounterStrike,
	GameAmount,
	GamePointEarned,
	GamerAvatar,
	GameTime,
	HeroAvatar,
	JoinEmoji,
	LeagueOfLegends,
	StyledCheckmark,
	Valorant,
} from '@/assets/svgs';
import { Button } from '@/ui';
import {
	BombAchievement,
	ChestAchievement,
	CoinAchievement,
	CyberPunkEvent,
	DiamondAchievement,
	GiftAchievement,
	HeroAvatar as HeroAvatarImage,
	ThunderAchievement,
} from '@/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

const Dashboard = () => {
	const [createGame, setCreateGame] = useState(false);

	return (
		<Container>
			{/*      */}

			<CreateGame gameModal={createGame} setGameModal={setCreateGame} />

			<div className="con-1">
				<div className="con-1-wrapper">
					<div className="profile-card">
						<HeroAvatar />

						<div>
							<div className="top">
								<div>
									<span>Gamer</span>
									<p>
										Flunk god <StyledCheckmark />
									</p>
								</div>

								<div>
									<Link to={APP_ROUTES.profile.initial}>
										<Button variant="primary" size="small">
											View Profile
										</Button>
									</Link>
								</div>
							</div>

							<div className="middle">
								<div>
									<span>Latest Achievements</span>
									<div>
										<Achievement1 />
										<Achievement2 />
										<Achievement3 />
										<Achievement4 />
										<Achievement5 />
										<Achievement6 />
										<p>+10</p>
									</div>
								</div>
								<div>
									<span>Joined team</span>
									<div>
										<div>
											<GamerAvatar />
											<GamerAvatar />
											<GamerAvatar />
											<GamerAvatar />
											<GamerAvatar />
											<GamerAvatar />
										</div>
										<p>+10</p>
									</div>
								</div>
							</div>

							<hr />

							<div className="bottom">
								<div>
									<GameTime />
									<div>
										<span>Played</span>
										<p>360 hours</p>
									</div>
								</div>
								<div>
									<GameAmount />
									<div>
										<span>Games</span>
										<p>340</p>
									</div>
								</div>
								<div>
									<GamePointEarned />
									<div>
										<span>Won</span>
										<p>170</p>
									</div>
								</div>
								<div>
									<GamePointEarned />
									<div>
										<span>Earned</span>
										<p>1200 coins</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div className="alert-card">
							<span>
								<JoinEmoji />
							</span>
							<p>
								Looking for a new challenge or a way to increase earnings? Play your favourite games now
							</p>
							<div>
								<Link to={APP_ROUTES.matches.initial}>
									<Button variant="outline">Join game</Button>
								</Link>
								<Button onClick={() => setCreateGame(true)} variant="primary">
									Create game
								</Button>
							</div>
						</div>

						<div className="balance-card">
							<div>
								<span>
									<Coin />
								</span>

								<div>
									<span>Balance</span>
									<p>43000 coins</p>
								</div>
							</div>

							<div>
								<Link to={APP_ROUTES.wallet.initial}>
									<Button variant="primary">Deposit</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="swiper-con">
					<Swiper
						spaceBetween={20}
						slidesPerView={1.1}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							{' '}
							<div className="profile-card">
								<div>
									<img src={HeroAvatarImage} alt="/" loading="lazy" />
								</div>

								<div>
									<div className="top">
										<div>
											<span>Gamer</span>
											<p>
												Flunk god <StyledCheckmark />
											</p>
										</div>

										<div>
											<Link to={APP_ROUTES.profile.initial}>
												<Button variant="primary" size="small">
													View Profile
												</Button>
											</Link>
										</div>
									</div>

									<div className="middle">
										<div>
											<span>Latest Achievements</span>
											<div>
												<div>
													<img src={ThunderAchievement} alt="/" />
												</div>
												<div>
													<img src={ChestAchievement} alt="/" />
												</div>
												<div>
													<img src={DiamondAchievement} alt="/" />
												</div>
												<div>
													<img src={BombAchievement} alt="/" />
												</div>
												<div>
													{' '}
													<img src={GiftAchievement} alt="/" />
												</div>
												<div>
													{' '}
													<img src={CoinAchievement} alt="/" />
												</div>
												<p>+10</p>
											</div>
										</div>
										<div>
											<span>Joined team</span>
											<div>
												<div>
													<GamerAvatar />
													<GamerAvatar />
													<GamerAvatar />
													<GamerAvatar />
													<GamerAvatar />
													<GamerAvatar />
												</div>
												<p>+10</p>
											</div>
										</div>
									</div>

									<hr />

									<div className="bottom">
										<div>
											<GameTime />
											<div>
												<span>Played</span>
												<p>360 hours</p>
											</div>
										</div>
										<div>
											<GameAmount />
											<div>
												<span>Games</span>
												<p>340</p>
											</div>
										</div>
										<div>
											<GamePointEarned />
											<div>
												<span>Won</span>
												<p>170</p>
											</div>
										</div>
										<div>
											<GamePointEarned />
											<div>
												<span>Earned</span>
												<p>1200 coins</p>
											</div>
										</div>
									</div>
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
									<Link to={APP_ROUTES.matches.initial}>
										<Button variant="outline">Join game</Button>
									</Link>
									<Button onClick={() => setCreateGame(true)} variant="primary">
										Create game
									</Button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="balance-card">
								<div>
									<span>
										<Coin />
									</span>

									<div>
										<span>Balance</span>
										<p>43000 coins</p>
									</div>
								</div>

								<div>
									<Link to={APP_ROUTES.wallet.initial}>
										<Button variant="primary">Deposit</Button>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			<div className="con-2">
				<div className="con-2-wrapper">
					<div className="left">
						<div className="nav">
							<h6>Trending games</h6>
							<Link to={APP_ROUTES.gaming.initial}>
								<Button variant="text" size="small">
									VIEW ALL
								</Button>
							</Link>
						</div>
						<div className="left-con">
							{trendingGamesList.map((game, index) => (
								<div key={index} className="trending-card">
									<span>{game.icon}</span>

									<div>
										<p>{game.name}</p>
										<span>{game.info}</span>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="right">
						<div className="nav">
							<h6>Featured tournaments</h6>
							<Link to={APP_ROUTES.tournaments.initial}>
								<Button variant="text" size="small">
									VIEW ALL
								</Button>
							</Link>
						</div>

						<div className="right-con">
							{featuredTournamentsList.map((tournament, index) => (
								<FeaturedTournament
									key={index}
									image={tournament.image}
									categories={tournament.category}
									status={tournament.status}
									period={tournament.period}
									title={tournament.title}
									description={tournament.description}
									prize={tournament.prize}
									game_mode={tournament.game_mode}
									game_slot={tournament.game_slot}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="swiper-con-2">
					<div className="nav">
						<h6>Trending games</h6>
						<Link to={APP_ROUTES.gaming.initial}>
							<Button variant="text" size="small">
								VIEW ALL
							</Button>
						</Link>
					</div>

					<Swiper spaceBetween={20} slidesPerView={1.3}>
						<div className="left-con">
							{trendingGamesList.map((game, index) => (
								<SwiperSlide key={index}>
									<div className="trending-card">
										<span>{game.icon}</span>

										<div>
											<p>{game.name}</p>
											<span>{game.info}</span>
										</div>
									</div>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>

				<div className="swiper-con-3">
					<div className="nav">
						<h6>Featured tournaments</h6>
						<Link to={APP_ROUTES.tournaments.initial}>
							<Button variant="text" size="small">
								VIEW ALL
							</Button>
						</Link>
					</div>
					<Swiper
						spaceBetween={11.5}
						slidesPerView={1.3}
						breakpoints={{
							// When the screen width is 280px or larger
							280: {
								slidesPerView: 1.2,
								spaceBetween: 20,
							},
							// When the screen width is 390px or larger
							390: {
								slidesPerView: 1.4,
								spaceBetween: 20,
							},
							// When the screen width is 440px or larger
							420: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
							// When the screen width is 550px or larger
							610: {
								slidesPerView: 2.1,
								spaceBetween: 20,
							},
							// When the screen width is 768px or larger (e.g., tablets)
							768: {
								slidesPerView: 2.3,
								spaceBetween: 20,
							},
							// When the screen width is 1000px or larger (e.g., desktop)
							1000: {
								slidesPerView: 1.3,
								spaceBetween: 20,
							},
						}}
					>
						<div className="right-con">
							{featuredTournamentsList.map((tournament, index) => (
								<SwiperSlide key={index}>
									<FeaturedTournament
										image={tournament.image}
										categories={tournament.category}
										status={tournament.status}
										period={tournament.period}
										title={tournament.title}
										description={tournament.description}
										prize={tournament.prize}
										game_mode={tournament.game_mode}
										game_slot={tournament.game_slot}
									/>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			</div>

			<div className="con-3">
				<div className="con-3-wrapper">
					<div className="nav">
						<h6>Upcoming matches</h6>
						<Link to={APP_ROUTES.matches.initial}>
							<Button variant="text" size="small">
								VIEW ALL
							</Button>
						</Link>
					</div>

					<div className="con-3-list">
						{matchData.map((match, index) => (
							<Link key={index} to={APP_ROUTES.matches.use_overview(index.toString())}>
								<Match
									title={match.title}
									date={match.date}
									time={match.time}
									svg={match.svg}
									status={match.status}
									player1={match.player1}
									player2={match.player2}
									// winner={match.winner}
									// scores={match.scores}
									mode={match.mode}
								/>
							</Link>
						))}
					</div>
				</div>

				<div className="swiper-con-4">
					<div className="nav">
						<h6>Upcoming matches</h6>
						<Link to={APP_ROUTES.matches.initial}>
							<Button variant="text" size="small">
								VIEW ALL
							</Button>
						</Link>
					</div>

					<Swiper
						slidesPerView={1.3}
						spaceBetween={20}
						breakpoints={{
							// When the screen width is 280px or larger
							280: {
								slidesPerView: 1.2,
								spaceBetween: 20,
							},
							// When the screen width is 390px or larger
							390: {
								slidesPerView: 1.4,
								spaceBetween: 20,
							},
							// When the screen width is 440px or larger
							420: {
								slidesPerView: 1.5,
								spaceBetween: 20,
							},
							// When the screen width is 550px or larger
							610: {
								slidesPerView: 2.1,
								spaceBetween: 20,
							},
							// When the screen width is 768px or larger (e.g., tablets)
							768: {
								slidesPerView: 2.3,
								spaceBetween: 20,
							},
							// When the screen width is 1000px or larger (e.g., desktop)
							1000: {
								slidesPerView: 1.3,
								spaceBetween: 20,
							},
						}}
					>
						<div className="con-3-list">
							{matchData.map((match, index) => (
								<SwiperSlide key={index}>
									<Link key={index} to={APP_ROUTES.matches.use_overview(index.toString())}>
										<Match
											title={match.title}
											date={match.date}
											time={match.time}
											svg={match.svg}
											status={match.status}
											player1={match.player1}
											player2={match.player2}
											// winner={match.winner}
											// scores={match.scores}
											mode={match.mode}
										/>
									</Link>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			</div>
		</Container>
	);
};

export default Dashboard;

const trendingGamesList = [
	{
		icon: <Valorant />,
		name: 'Valorant',
		info: '20 matches currently available',
	},

	{
		icon: <LeagueOfLegends />,
		name: 'League of Legends',
		info: 'Highest streams for the month',
	},
	{
		icon: <CounterStrike />,
		name: 'Counter strike',
		info: '20 people currently playing',
	},
];

const featuredTournamentsList = [
	{
		image: CyberPunkEvent,
		category: ['Call of duty', 'Team'],
		status: 'sept 02 - 05, 2023',
		period: 'STARTING AT 6 : 00 PM',
		title: 'Rebirth Resurgence express',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize.....',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunkEvent,
		category: ['Call of duty', 'Team'],
		status: 'sept 02 - 05, 2023',
		period: 'STARTING AT 6 : 00 PM',
		title: 'Rebirth Resurgence express',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize.....',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunkEvent,
		category: ['Call of duty', 'Team'],
		status: 'sept 02 - 05, 2023',
		period: 'STARTING AT 6 : 00 PM',
		title: 'Rebirth Resurgence express',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize.....',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
];

const matchData = [
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
	},
	{
		title: 'Loner epic',
		date: 'WED, JUN 21',
		time: '18:30 CST',
		svg: <Valorant />,
		status: 'Upcoming',
		mode: '1v1',
		player1: {
			id: 1,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
		player2: {
			id: 2,
			name: 'Flunk god',
			avatar: HeroAvatarImage,
		},
	},
];
