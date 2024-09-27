import { DashboardHeader } from '@/components';
import { Container } from './styles';
import {
	Achievement1,
	Achievement2,
	Achievement3,
	Achievement4,
	Achievement5,
	Achievement6,
	Coin,
	GameAmount,
	GamePointEarned,
	GamerAvatar,
	GameTime,
	HeroAvatar,
	JoinEmoji,
	StyledCheckmark,
} from '@/assets/svgs';
import { Button } from '@/ui';
import {
	BombAchievement,
	ChestAchievement,
	CoinAchievement,
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

const Dashboard = () => {
	return (
		<Container>
			<DashboardHeader />

			<div className="con-1">
				<div className="wrapper">
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
		</Container>
	);
};

export default Dashboard;
