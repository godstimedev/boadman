import { HeroAvatar, Spectre, StreamAvatar, GameStream as GameStreamImage } from '@/assets/images';
import { Container } from './styles';
import { GameplaySummary, GameStream } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';

const ChallengeSummary = () => {
	return (
		<Container>
			<div className="head">
				<h6>Gameplay summary</h6>

				<button>See comment</button>
			</div>

			<GameplaySummary
				game_time={gameSummaryData.game_time}
				rounds={gameSummaryData.rounds}
				prize={gameSummaryData.prize}
				streams={gameSummaryData.streams}
				player_a={gameSummaryData.player_a}
				player_b={gameSummaryData.player_b}
			/>

			<div className="bottom">
				<div>
					<h6>Game Evidence</h6>

					<div>
						<img src={GameStreamImage} alt="/" />
					</div>
				</div>

				<div>
					<h6>Game Streams</h6>

					<div className="streams">
						{featuredStreamsList.map((stream, index) => (
							<GameStream
								avatar={stream.avatar}
								game={stream.game}
								image={stream.image}
								key={index}
								username={stream.username}
								views={stream.views}
							/>
						))}
					</div>

					<div className="swiper-con">
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
							<div>
								{featuredStreamsList.map((stream, index) => (
									<SwiperSlide key={index}>
										<GameStream
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
			</div>
		</Container>
	);
};

export default ChallengeSummary;

const gameSummaryData = {
	game_time: '',
	rounds: '2 round',
	prize: '300 coins',
	streams: '',
	player_a: {
		name: 'Flunk_god',
		image: HeroAvatar,
		score: '',
		combat_score: '',
		damage: '',
		kda: '',
		headshots: '',
		bodyshots: '',
		kill: '',
		death: '',
		assist: '',
		legshots: '',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: '',
			kill: '',
			damage: '',
			headshots: '',
		},
	},
	player_b: {
		name: 'Rabbit Rush',
		image: HeroAvatar,
		score: '',
		combat_score: '',
		damage: '',
		kda: '',
		headshots: '',
		bodyshots: '',
		kill: '',
		death: '',
		assist: '',
		legshots: '',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: '',
			kill: '',
			damage: '',
			headshots: '',
		},
	},
};

const featuredStreamsList = [
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
];
