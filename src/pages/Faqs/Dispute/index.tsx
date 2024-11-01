import { FaqDashboard } from '@/ui';
import { Container } from './styles';

const FaqDispute = () => {
	return (
		<Container>
			<div>
				<h6>Dispute</h6>
				<p>
					We have answered every question you may have about teams on Boardman, including payments,
					tournaments, matches and participations conditions
				</p>
			</div>

			<FaqDashboard
				items={[
					{
						title: 'How is the captain of a team chosen?',
						content:
							'The winnings of a tournament are already determined before you apply. In particular, you can view the total amount of prizes on the application page for tournaments. If you are successful in the tournament, your prize will be credited to your account within 24 hours.',
					},
				]}
			/>
		</Container>
	);
};

export default FaqDispute;
