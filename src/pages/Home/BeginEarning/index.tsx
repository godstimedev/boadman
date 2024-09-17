import { BeginEarningVector } from '../../../assets/svgs';
import { Button } from '../../../ui';
import { Container } from './styles';

const BeginEarning = () => {
	return (
		<Container>
			<div className="heading">
				<BeginEarningVector />
				<h2>
					Get started to begin <br className="max-sm:hidden" />
					<span>earning</span> on Boadman
				</h2>
				<p className="md:text-xl my-4">
					Perks so good you'll never need to go anywhere else for your design.
				</p>
			</div>

			<div className="content">
				<div className="list">
					<ol>
						<li className="text-white"> Register on the platform</li>
						<li className="text-white/30"> Fund your wallet </li>
						<li className="text-white/30"> Connect your gaming account</li>
						<li className="text-white/30"> Join and play games</li>
					</ol>
					<Button variant="primary" size="large" shadow>
						Get Started
					</Button>
				</div>

				<div className="card">
					<span>play with friends</span>
					<h6>Create teams for more winnings</h6>
					<p>
						Sign up with your email and verify your account. You can explore the platform after signing up
						and find your favourite games.
					</p>
				</div>
			</div>
		</Container>
	);
};

export default BeginEarning;
