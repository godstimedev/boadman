export type StyledDropdownProps = {
	$position: 'top' | 'bottom' | 'topRight' | 'bottomRight';
};

export type DropdownProps = {
	trigger: JSX.Element;
	children: JSX.Element;
	position?: 'top' | 'bottom' | 'topRight' | 'bottomRight';
};
