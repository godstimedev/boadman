import BeginEarning from './BeginEarning';
import Built from './Built';
import Events from './Events';
import Everyone from './Everyone';
import Featured from './Featured';
import Hero from './Hero';
import Immerse from './Immerse';
import Metrics from './Metrics';
import Partners from './Partners';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Partners />
			<Immerse />
			<Featured />
			<BeginEarning />
			<Events />
			<Metrics />
			<Built />
			<Everyone />
		</>
	);
};

export default HomePage;
