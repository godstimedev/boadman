import { MetricsVector1, MetricsVector2 } from '../../../assets/svgs';
import { Container } from './styles';

const Metrics = () => {
	return (
		<Container>
			<div className=" lg:mx-20">
				<MetricsVector1 />
				<div className="content">
					<div className="text-center space-y-1">
						<h3>
							10,000 <span>+</span>
						</h3>
						<p>Active Players</p>
					</div>
					<div className="text-center space-y-1">
						<h3>
							3,000 <span>+</span>
						</h3>
						<p>Winners so far</p>
					</div>
					<div className="text-center space-y-1">
						<h3>
							$30K <span>+</span>
						</h3>
						<p>Won from games</p>
					</div>
				</div>
				<MetricsVector2 />
			</div>
			<p>
				Board Man is the first and only platform that adds a different perspective to winning by playing
				games. Our platform offers players many opportunities when it comes to winning and reaching
				prizes. Whether alone or with your teammates, you can participate and join more than 500 winners
				every month
			</p>
		</Container>
	);
};

export default Metrics;
