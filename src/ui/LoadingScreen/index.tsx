import { Loader } from '..';
import { LoaderPropType } from './Loader/Loader.types';
import { Container } from './styles';

const LoadingScreen = ({ size, variant = 'spinner' }: LoaderPropType) => {
	return (
		<Container>
			<Loader size={size} variant={variant} />
		</Container>
	);
};
export default LoadingScreen;
