import { CyberPunkEvent } from '@/assets/images';
import { Container } from './styles';
import Carousel from 'react-multi-carousel';
import { eventResponsive } from '@/constants';

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
				<Carousel
					responsive={eventResponsive}
					arrows={false}
					autoPlay={true}
					autoPlaySpeed={3000}
					shouldResetAutoplay={false}
					infinite={true}
					showDots={false}
					centerMode={false}
					partialVisible={true}
					pauseOnHover={true}
				>
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
				</Carousel>
			</div>
		</Container>
	);
};

export default Events;
