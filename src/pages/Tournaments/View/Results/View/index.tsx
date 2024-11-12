import { GamerAvatar, Spectre, GameStream as GameStreamImage, StreamAvatar } from '@/assets/images';
import { Container } from './styles';
import { GameplaySummary, GameStream } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';

const ResultsView = () => {
	return (
		<Container>
			<div className="head">
				<h6>Gameplay summary</h6>
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

export default ResultsView;

const gameSummaryData = {
	game_time: '32 mins 35 secs',
	rounds: '2 round',
	prize: '300 coins',
	streams: '6',
	player_a: {
		name: 'Rabbit Rush',
		image: GamerAvatar,
		score: '3',
		combat_score: '201',
		damage: '120',
		kda: '1/11/1',
		headshots: '2 hits',
		bodyshots: '1 hits',
		kill: '10',
		death: '12',
		assist: '2',
		legshots: '0 hits',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: 'SMGs',
			kill: '10',
			damage: '120',
			headshots: '2 hits',
		},
	},
	player_b: {
		name: 'Rabbit Rush',
		image: GamerAvatar,
		score: '0',
		combat_score: '201',
		damage: '120',
		kda: '1/11/1',
		headshots: '2 hits',
		bodyshots: '1 hits',
		kill: '10',
		death: '12',
		assist: '2',
		legshots: '0 hits',
		weapons: {
			name: 'Spectre',
			image: Spectre,
			type: 'SMGs',
			kill: '10',
			damage: '120',
			headshots: '2 hits',
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
];
