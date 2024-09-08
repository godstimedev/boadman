import { Spinner } from '../../assets/svgs';
import { ButtonProps } from './Button.types';
import { StyledButton } from './styles';

const Button = (props: ButtonProps) => {
	const { variant = 'primary', size = 'medium', shadow, loading, children, ...rest } = props;

	return (
		<StyledButton $variant={variant} $size={size} $shadow={shadow} {...rest}>
			{loading ? variant === 'text' ? 'Loading...' : <Spinner className="spinner" /> : children}
		</StyledButton>
	);
};

export default Button;
