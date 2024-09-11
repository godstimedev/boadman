import { CreateJoin } from '../../../assets/images';
import { Container } from './styles';

const Everyone = () => {
	return (
		<Container>
			<h2>Everyone win together</h2>

			{/* carousels */}
			<div className=" flex items-center gap-8 max-md:flex-col">
				<div className="card">
					<img src={CreateJoin} alt="/" />

					<div>
						<h5>Create and Join Matches</h5>
						<p className="text-lg">
							Set up a new game or join an <br /> already created game
						</p>
					</div>
				</div>
				<div className="card">
					<img src={CreateJoin} alt="/" />

					<div>
						<h5>Create and Join Matches</h5>
						<p className="text-lg">
							Set up a new game or join an <br /> already created game
						</p>
					</div>
				</div>
				<div className="card">
					<img src={CreateJoin} alt="/" />

					<div>
						<h5>Create and Join Matches</h5>
						<p className="text-lg">
							Set up a new game or join an <br /> already created game
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Everyone;
