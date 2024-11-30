import { StyledDropdown } from './styles';
import { DropdownProps } from './Dropdown.types';

const Dropdown = (props: DropdownProps) => {
	const { trigger, children, position } = props;

	return (
		<StyledDropdown tabIndex={0} $position={position ? position : 'bottom'}>
			<button>{trigger}</button>
			<div className="content">{children}</div>
		</StyledDropdown>
	);
};

export default Dropdown;
