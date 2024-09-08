import { LoaderPropType } from './Loader.types';
import { StyledLoader, StyledSpinner, StyledBalls } from './styles';

const Loader = ({ size, variant = 'spinner' }: LoaderPropType) => {
	return (
		<StyledLoader>
			{variant === 'spinner' ? (
				<StyledSpinner $size={size} />
			) : variant === 'bouncing balls' ? (
				<StyledBalls $size={size}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</StyledBalls>
			) : (
				'Loading...'
			)}
		</StyledLoader>
	);
};
export default Loader;
