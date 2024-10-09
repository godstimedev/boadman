import { StyledDropdown } from './styles';
import { DropdownProps } from './Dropdown.types';

const Dropdown = (props: DropdownProps) => {
	const { trigger, children, position } = props;

	return (
		<StyledDropdown $position={position ? position : 'bottom'}>
			<button>{trigger}</button>
			<div>{children}</div>
		</StyledDropdown>
	);
};

export default Dropdown;
