import { StyledDropdown } from './styles';
import { DropdownProps } from './Dropdown.types';

const Dropdown = (props: DropdownProps) => {
	const { trigger, children, position } = props;

	return (
		<StyledDropdown tabIndex={0} $position={position ? position : 'bottom'}>
			<button>{trigger}</button>
			{children}
		</StyledDropdown>
	);
};

export default Dropdown;
