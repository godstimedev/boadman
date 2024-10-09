import { CaretDown } from '@/assets/svgs';
import Match from '../Cards/Match';
import { Container } from './styles';

const Matches = () => {
	return (
		<Container>
			<div className="dropdowns">
				<div>
					All matches <CaretDown />
				</div>
				<div>
					All games <CaretDown />
				</div>
				<div>
					My games <CaretDown />
				</div>
			</div>

			<div className="matches">
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
				<Match />
			</div>
		</Container>
	);
};

export default Matches;
