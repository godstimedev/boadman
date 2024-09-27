import { Button, FaqAccordion } from '../../../ui';
import { Container } from './styles';

const Faqs = () => {
	return (
		<Container>
			<div>
				<h2>FAQs</h2>
				<p className="md:text-xl my-4">Need quick answers? Check out the FAQs</p>
			</div>

			<div>
				<FaqAccordion />

				<div className="button">
					<Button variant="outline" outline="secondary" size="large">
						All FAQ Questions
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Faqs;
