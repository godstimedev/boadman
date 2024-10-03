import { DashboardHeader, FeaturedStream, FeaturedTournament } from '@/components';
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
	GameStream,
	GiftAchievement,
	HeroAvatar as HeroAvatarImage,
	StreamAvatar,
	ThunderAchievement,
} from '@/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Dashboard = () => {
	return (
		<Container>
			<DashboardHeader />

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
									<Button variant="primary" size="small">
										View Profile
									</Button>
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
								<Button variant="outline">Join game</Button>
								<Button variant="primary">Create game</Button>
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
								<Button variant="primary">Deposit</Button>
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
											<Button variant="primary" size="small">
												View Profile
											</Button>
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
									<Button variant="outline">Join game</Button>
									<Button variant="primary">Create game</Button>
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
									<Button variant="primary">Deposit</Button>
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
							<Button variant="text" size="small">
								VIEW ALL
							</Button>
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
							<Button variant="text" size="small">
								VIEW ALL
							</Button>
						</div>

						<div className="right-con">
							{featuredTournamentsList.map((tournament, index) => (
								<FeaturedTournament
									key={index}
									image={tournament.image}
									categories={tournament.category}
									date={tournament.date}
									time={tournament.time}
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
						<Button variant="text" size="small">
							VIEW ALL
						</Button>
					</div>

					<Swiper
						spaceBetween={20}
						slidesPerView={1.3}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						<div className="left-con">
							{trendingGamesList.map((game, index) => (
								<SwiperSlide>
									<div key={index} className="trending-card">
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
						<Button variant="text" size="small">
							VIEW ALL
						</Button>
					</div>
					<Swiper
						spaceBetween={11.5}
						slidesPerView={1.3}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						<div className="right-con">
							{featuredTournamentsList.map((tournament, index) => (
								<SwiperSlide>
									<FeaturedTournament
										key={index}
										image={tournament.image}
										categories={tournament.category}
										date={tournament.date}
										time={tournament.time}
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
						<h6>Featured Streams</h6>
						<Button variant="text" size="small">
							VIEW ALL
						</Button>
					</div>

					<div className="con-3-list">
						{featuredStreamsList.map((stream, index) => (
							<FeaturedStream
								avatar={stream.avatar}
								game={stream.game}
								image={stream.image}
								key={index}
								username={stream.username}
								views={stream.views}
							/>
						))}
					</div>
				</div>

				<div className="swiper-con-4">
					<div className="nav">
						<h6>Featured Streams</h6>
						<Button variant="text" size="small">
							VIEW ALL
						</Button>
					</div>

					<Swiper
						spaceBetween={20}
						slidesPerView={1.3}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						<div className="con-3-list">
							{featuredStreamsList.map((stream, index) => (
								<SwiperSlide>
									<FeaturedStream
										avatar={stream.avatar}
										game={stream.game}
										image={stream.image}
										key={index}
										username={stream.username}
										views={stream.views}
									/>
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
		date: 'sept 02 - 05, 2023',
		time: ' 6 : 00 PM',
		title: 'Rebirth Resurgence express',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize.....',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunkEvent,
		category: ['Call of duty', 'Team'],
		date: 'sept 02 - 05, 2023',
		time: ' 6 : 00 PM',
		title: 'Rebirth Resurgence express',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize.....',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
	{
		image: CyberPunkEvent,
		category: ['Call of duty', 'Team'],
		date: 'sept 02 - 05, 2023',
		time: ' 6 : 00 PM',
		title: 'Rebirth Resurgence express',
		description: 'Join the call of duty tournament and get a chance to win up to $ 2000 prize.....',
		prize: '3500',
		game_mode: '3 v 3',
		game_slot: '60/64',
	},
];

const featuredStreamsList = [
	{
		image: GameStream,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStream,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStream,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStream,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
];