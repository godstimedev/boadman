import { CreateJoin, PreferredPlatform } from '../../../assets/images';
import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Everyone = () => {
	return (
		<Container>
			<h2>Everyone win together</h2>

			{/* carousels */}
			<div>
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
							slidesPerView: 1.35,
							spaceBetween: 1,
						},
						// When the screen width is 480px or larger
						480: {
							slidesPerView: 1.4,
							spaceBetween: 1,
						},
						// When the screen width is 768px or larger (e.g., tablets)
						768: {
							slidesPerView: 1.7,
							spaceBetween: 20,
						},
						// When the screen width is 1000px or larger (e.g., desktop)
						1000: {
							slidesPerView: 2.2,
							spaceBetween: 20,
						},
					}}
				>
					<SwiperSlide>
						<div className="card-wrapper">
							<div className="card">
								<img src={PreferredPlatform} alt="/" />

								<div>
									<h5>Use preferred platform</h5>
									<p>
										Play game on your preferred <br className="max-md:hidden" /> gaming platform
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card-wrapper">
							<div className="card">
								<img src={CreateJoin} alt="/" />

								<div>
									<h5>Create and Join Matches</h5>
									<p>
										Set up a new game or join an <br className="max-md:hidden" /> already created game
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card-wrapper">
							<div className="card">
								<img src={PreferredPlatform} alt="/" />

								<div>
									<h5>Use preferred platform</h5>
									<p>
										Play game on your preferred <br className="max-md:hidden" /> gaming platform
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card-wrapper">
							<div className="card">
								<img src={CreateJoin} alt="/" />

								<div>
									<h5>Create and Join Matches</h5>
									<p>
										Set up a new game or join an <br className="max-md:hidden" /> already created game
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</Container>
	);
};

export default Everyone;
