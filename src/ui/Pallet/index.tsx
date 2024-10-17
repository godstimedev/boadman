import { PalletProps } from './Pallet.types';
import { Container } from './styles';

const Pallet = (props: PalletProps) => {
	const { title, value } = props;

	return (
		<Container>
			<span>{title}</span>
			<p>{value}</p>
		</Container>
	);
};

export default Pallet;
