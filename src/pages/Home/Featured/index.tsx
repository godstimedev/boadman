import {
	ApexLegendsSlider,
	CallOfDutyFull,
	FeaturedVector,
	FeaturedVectorMobile1,
	FeaturedVectorMobile2,
	LeagueOfLegends,
	Valorant,
} from '../../../assets/images';
import { Button } from '../../../ui';
import { Container } from './styles';
// import { responsive } from '@/constants/carouselSettings';
import { Console1, Console2, PlayStation, Xbox } from '@/assets/svgs';
// import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Featured = () => {
	// const [isDesktop, setIsDesktop] = useState(false);

	// Check screen size on component mount and window resize
	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setIsDesktop(window.innerWidth >= 1024); // Set true for screens wider than 1024px
	// 	};

	// 	// Call the function initially
	// 	handleResize();

	// 	// Add event listener for window resize
	// 	window.addEventListener('resize', handleResize);

	// 	// Clean up the event listener on component unmount
	// 	return () => window.removeEventListener('resize', handleResize);
	// }, []);

	return (
		<Container>
			<div className="curve-background">
				<img src={FeaturedVector} className="max-sm:hidden" alt="/" />
				<img src={FeaturedVectorMobile1} className="sm:hidden" alt="/" />
			</div>
			<div className="content">
				<div className="heading">
					<h2>Featured Games</h2>
					<p className="md:text-xl my-4">We are constantly adding new games</p>
				</div>

				{/* carousel */}
				<div className="game-card-container">
					{/* <Carousel
						responsive={featuredResponsive}
						arrows={false}
						autoPlay={isDesktop}
						autoPlaySpeed={1500}
						infinite={true}
						showDots={false}
						partialVisible={true}
						pauseOnHover={true}
						// focusOnSelect={true}
					>
						{CarouselData.map((item) => {
							return (
								<div key={item.id} className="game-card-wrapper">
									<div className="game-card">
										<img src={item.image} alt="/" />
										<div className="game-card-content">
											<h6 className="capitalize">{item.title}</h6>
											<p>{item.details}</p>
											<div>
												<Xbox />
												<Console1 />
												<Console2 />
												<PlayStation />
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</Carousel> */}
					<Swiper
						centeredSlides={true}
						slidesPerView={1.2}
						spaceBetween={50}
						loop={true}
						autoplay={{
							delay: 2500, // Time in milliseconds (2.5 seconds)
							disableOnInteraction: false, // Autoplay continues even after user interaction
						}}
						modules={[Autoplay]}
						breakpoints={{
							// When the screen width is 280px or larger
							280: {
								slidesPerView: 1.4,
								spaceBetween: 10,
							},
							// When the screen width is 360px or larger
							365: {
								slidesPerView: 1.6,
								spaceBetween: 10,
							},
							// When the screen width is 480px or larger
							480: {
								slidesPerView: 2,
								spaceBetween: 5,
							},
							// When the screen width is 480px or larger
							650: {
								slidesPerView: 2.8,
								spaceBetween: 5,
							},
							// When the screen width is 768px or larger (e.g., tablets)
							768: {
								slidesPerView: 2.5,
								spaceBetween: 5,
							},
							// When the screen width is 1000px or larger (e.g., desktop)
							1000: {
								slidesPerView: 3,
								spaceBetween: 0,
							},
							// When the screen width is 1300px or larger (e.g., desktop)
							1300: {
								slidesPerView: 4,
								spaceBetween: 0,
							},
						}}
					>
						{CarouselData.map((item) => {
							return (
								<SwiperSlide>
									<div key={item.id} className="game-card-wrapper">
										<div className="game-card">
											<img src={item.image} alt="/" />
											<div className="game-card-content">
												<h6 className="capitalize">{item.title}</h6>
												<p>{item.details}</p>
												<div>
													<Xbox />
													<Console1 />
													<Console2 />
													<PlayStation />
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className="flex items-center justify-center my-8">
					<Button variant="primary" size="large">
						Get Started
					</Button>
				</div>
			</div>
			<div className="curve-background sm:hidden">
				<img src={FeaturedVectorMobile2} alt="/" />
			</div>
		</Container>
	);
};

export default Featured;

const CarouselData = [
	{
		id: '1',
		image: CallOfDutyFull,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'Call of duty',
	},
	{
		id: '2',
		image: Valorant,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'Valorant',
	},
	{
		id: '3',
		image: ApexLegendsSlider,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'Apex Legends',
	},

	{
		id: '4',
		image: LeagueOfLegends,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'League of legends',
	},
	{
		id: '5',
		image: CallOfDutyFull,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'Call of duty',
	},
	{
		id: '6',
		image: Valorant,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'Valorant',
	},
	{
		id: '7',
		image: ApexLegendsSlider,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'Apex Legends',
	},

	{
		id: '8',
		image: LeagueOfLegends,
		details:
			'experience strategic squad plat and innovative gameplay in the next evolution of Hero shooter and Battle royale.',
		title: 'League of legends',
	},
];
