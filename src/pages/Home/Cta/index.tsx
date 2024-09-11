import { Button } from '@/ui';
import { Container } from './styles';

const Cta = () => {
	return (
		<Container>
			<div>
				<h2>
					Join 125,000 Boadman's <br className="max-sm:hidden" /> Earning while Gaming.
				</h2>
				<Button variant="primary" shadow size="large">
					Get Started
				</Button>
			</div>
		</Container>
	);
};

export default Cta;
