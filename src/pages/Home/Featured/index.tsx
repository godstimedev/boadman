import {
	FeaturedVector,
	FeaturedVectorMobile1,
	FeaturedVectorMobile2,
} from '../../../assets/images';
import { Button } from '../../../ui';
import { Container } from './styles';

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
				<div></div>

				<div className="flex items-center justify-center mt-16">
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
