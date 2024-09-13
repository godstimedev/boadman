import Carousel from 'react-multi-carousel';
import { CreateJoin, PreferredPlatform } from '../../../assets/images';
import { Container } from './styles';
import { eventResponsive } from '@/constants';

const Everyone = () => {
	return (
		<Container>
			<h2>Everyone win together</h2>

			{/* carousels */}
			<div>
				<Carousel
					responsive={eventResponsive}
					arrows={false}
					autoPlay={true}
					autoPlaySpeed={3000}
					shouldResetAutoplay={false}
					infinite={true}
					showDots={false}
					// centerMode={true}
					partialVisible={true}
					pauseOnHover={true}
				>
					<div className="card-wrapper">
						<div className="card">
							<img src={CreateJoin} alt="/" />

							<div>
								<h5>Create and Join Matches</h5>
								<p className="text-lg">
									Set up a new game or join an <br className="max-md:hidden" /> already created game
								</p>
							</div>
						</div>
					</div>
					<div className="card-wrapper">
						<div className="card">
							<img src={PreferredPlatform} alt="/" />

							<div>
								<h5>Use preferred platform</h5>
								<p className="text-lg">
									Play game on your preferred <br className="max-md:hidden" /> gaming platform
								</p>
							</div>
						</div>
					</div>
					<div className="card-wrapper">
						<div className="card">
							<img src={PreferredPlatform} alt="/" />

							<div>
								<h5>Use preferred platform</h5>
								<p className="text-lg">
									Play game on your preferred <br className="max-md:hidden" /> gaming platform
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</Container>
	);
};

export default Everyone;
