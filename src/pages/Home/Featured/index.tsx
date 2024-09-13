import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
import { featuredResponsive } from '@/constants/carouselSettings';

const Featured = () => {
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
					<Carousel
						responsive={featuredResponsive}
						arrows={false}
						autoPlay={true}
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
					</Carousel>
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
];
