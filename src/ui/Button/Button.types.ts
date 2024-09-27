export type Variant = 'primary' | 'subtle' | 'secondary' | 'outline' | 'text';

export type Size = 'large' | 'medium' | 'small';

export type Outline = 'primary' | 'secondary';

export type ButtonProps = {
	variant?: Variant;
	size?: Size;
	shadow?: boolean;
	outline?: Outline;
	loading?: boolean;
	disabled?: boolean;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = {
	$variant: Variant;
	$size: Size;
	$loading?: boolean;
	$shadow?: boolean;
	$outline?: Outline;
};
