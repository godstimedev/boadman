import { CyberPunkEvent } from '@/assets/images';
import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Events = () => {
	return (
		<Container>
			<div className="heading">
				<h2>Upcoming Events</h2>
				<p className="md:text-xl my-4">
					Perks so good you'll never need to go anywhere else for your design.
				</p>
			</div>

			{/* carousel */}
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
							slidesPerView: 1.9,
							spaceBetween: 1,
						},
						// When the screen width is 768px or larger (e.g., tablets)
						768: {
							slidesPerView: 1.7,
							spaceBetween: 1,
						},
						// When the screen width is 1000px or larger (e.g., desktop)
						1000: {
							slidesPerView: 2,
							spaceBetween: 0,
						},
					}}
				>
					<SwiperSlide>
						<div className="event-card-wrapper">
							<div className="event-card">
								<img src={CyberPunkEvent} alt="/" />
								<div className="event-card-content">
									<div className="badge">
										<span>Cyberpunk</span>
									</div>
									<div className="about">
										<h5>Rebirth Resurgence express </h5>
										<div>
											<div>
												<span>Date</span>
												<span>may 1 - 31</span>
											</div>
											<div>
												<span>Prize</span>
												<span>$3500</span>
											</div>
											<div>
												<span>Entry</span>
												<span>Paid</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="event-card-wrapper">
							<div className="event-card">
								<img src={CyberPunkEvent} alt="/" />
								<div className="event-card-content">
									<div className="badge">
										<span>Cyberpunk</span>
									</div>
									<div className="about">
										<h5>Rebirth Resurgence express </h5>
										<div>
											<div>
												<span>Date</span>
												<span>may 1 - 31</span>
											</div>
											<div>
												<span>Prize</span>
												<span>$3500</span>
											</div>
											<div>
												<span>Entry</span>
												<span>Paid</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="event-card-wrapper">
							<div className="event-card">
								<img src={CyberPunkEvent} alt="/" />
								<div className="event-card-content">
									<div className="badge">
										<span>Cyberpunk</span>
									</div>
									<div className="about">
										<h5>Rebirth Resurgence express </h5>
										<div>
											<div>
												<span>Date</span>
												<span>may 1 - 31</span>
											</div>
											<div>
												<span>Prize</span>
												<span>$3500</span>
											</div>
											<div>
												<span>Entry</span>
												<span>Paid</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="event-card-wrapper">
							<div className="event-card">
								<img src={CyberPunkEvent} alt="/" />
								<div className="event-card-content">
									<div className="badge">
										<span>Cyberpunk</span>
									</div>
									<div className="about">
										<h5>Rebirth Resurgence express </h5>
										<div>
											<div>
												<span>Date</span>
												<span>may 1 - 31</span>
											</div>
											<div>
												<span>Prize</span>
												<span>$3500</span>
											</div>
											<div>
												<span>Entry</span>
												<span>Paid</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</Container>
	);
};

export default Events;
