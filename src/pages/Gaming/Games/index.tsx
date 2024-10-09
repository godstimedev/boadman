import {
	CaretRight,
	Challenge,
	Controller,
	Fortnite,
	GamerAvatar,
	JoinEmoji,
	MatchAmount,
	MostPlayed,
	TournamentTrophy,
} from '@/assets/svgs';
import { Container } from './styles';
import { Button, InputGroup } from '@/ui';
import { ApexLegendsSlider, CallOfDutyFull, LeagueOfLegends } from '@/assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import Match from '../Cards/Match';

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
							<div className="recent-wins">
								<div>
									<Fortnite />
									<div>
										<p>Fornite</p>
										<div>
											<span>2345 kills</span>
											<span>345 K/D</span>
										</div>
									</div>
								</div>
								<div>
									<div>
										<span>Won</span>
										<p>300 coins</p>
									</div>
									<div>
										<span>Score</span>
										<p>3425</p>
									</div>
								</div>
							</div>
							<div className="recent-wins">
								<div>
									<Fortnite />
									<div>
										<p>Fornite</p>
										<div>
											<span>2345 kills</span>
											<span>345 K/D</span>
										</div>
									</div>
								</div>
								<div>
									<div>
										<span>Won</span>
										<p>300 coins</p>
									</div>
									<div>
										<span>Score</span>
										<p>3425</p>
									</div>
								</div>
							</div>
							<div className="recent-wins">
								<div>
									<Fortnite />
									<div>
										<p>Fornite</p>
										<div>
											<span>2345 kills</span>
											<span>345 K/D</span>
										</div>
									</div>
								</div>
								<div>
									<div>
										<span>Won</span>
										<p>300 coins</p>
									</div>
									<div>
										<span>Score</span>
										<p>3425</p>
									</div>
								</div>
							</div>
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
						<div className="last-played">
							<div>
								<div>
									<img src={CallOfDutyFull} alt="/" />
								</div>
								<div>
									<p>Call of Duty</p>

									<div>
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<span>+3</span>
									</div>
								</div>
								<span>40 hours played</span>
							</div>
							<hr />
							<div>
								<div>
									<span>Win %</span>
									<p>78%</p>
								</div>
								<div>
									<span>Avg.scr</span>
									<p>58654.45</p>
								</div>
								<div>
									<span>Won</span>
									<p>3400 coins</p>
								</div>
							</div>
						</div>
						<div className="last-played">
							<div>
								<div>
									<img src={CallOfDutyFull} alt="/" />
								</div>
								<div>
									<p>Call of Duty</p>

									<div>
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<span>+3</span>
									</div>
								</div>
								<span>40 hours played</span>
							</div>
							<hr />
							<div>
								<div>
									<span>Win %</span>
									<p>78%</p>
								</div>
								<div>
									<span>Avg.scr</span>
									<p>58654.45</p>
								</div>
								<div>
									<span>Won</span>
									<p>3400 coins</p>
								</div>
							</div>
						</div>
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
						<Match />
						<Match />
					</div>
				</div>
			</div>

			<div className="swiper-con ">
				<div className="section-header">
					<h6>Last played</h6>
				</div>
				<Swiper spaceBetween={20} slidesPerView={1.3}>
					<SwiperSlide>
						<div className="last-played">
							<div>
								<div>
									<img src={CallOfDutyFull} alt="/" />
								</div>
								<div>
									<p>Call of Duty</p>

									<div>
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<span>+3</span>
									</div>
								</div>
								<span>40 hours played</span>
							</div>
							<hr />
							<div>
								<div>
									<span>Win %</span>
									<p>78%</p>
								</div>
								<div>
									<span>Avg.scr</span>
									<p>58654.45</p>
								</div>
								<div>
									<span>Won</span>
									<p>3400 coins</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="last-played">
							<div>
								<div>
									<img src={CallOfDutyFull} alt="/" />
								</div>
								<div>
									<p>Call of Duty</p>

									<div>
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<GamerAvatar />
										<span>+3</span>
									</div>
								</div>
								<span>40 hours played</span>
							</div>
							<hr />
							<div>
								<div>
									<span>Win %</span>
									<p>78%</p>
								</div>
								<div>
									<span>Avg.scr</span>
									<p>58654.45</p>
								</div>
								<div>
									<span>Won</span>
									<p>3400 coins</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="swiper-con ">
				<div className="section-header">
					<h6>My Matches</h6>

					<Button variant="text" size="small">
						See all
					</Button>
				</div>
				<Swiper spaceBetween={20} slidesPerView={1.3}>
					<SwiperSlide>
						<Match />
					</SwiperSlide>
					<SwiperSlide>
						<Match />
					</SwiperSlide>
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
					<div className="game-card">
						<div>
							<img src={CallOfDutyFull} alt="/" />
						</div>
						<p>Modern warfare III </p>
					</div>
					{/* <div className="game-card">
					<div>
					</div>
					<p>Valorant</p>
					<img src={Valorant} alt="/" />
					</div> */}
					<div className="game-card">
						<div>
							<img src={ApexLegendsSlider} alt="/" />
						</div>
						<p>Apex Legends</p>
					</div>
					<div className="game-card">
						<div>
							<img src={LeagueOfLegends} alt="/" />
						</div>
						<p>League of Legends </p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Games;
