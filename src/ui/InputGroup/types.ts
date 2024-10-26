import { Country } from 'react-phone-number-input';

export type StyledInputContainerPropType = {
	$posLeft?: boolean;
	$dropdownPosBottom?: boolean;
	$dropdownItemsAlign?: boolean;
	$variant?: string;
};

// Input
export type InputGroupPropType = {
	type?: React.HTMLInputTypeAttribute;
	required?: boolean;
	name: string;
	label?: string;
	customLabel?: React.ReactNode;
	onChange: (
		event?: React.ChangeEvent<HTMLInputElement>,
		name?: string,
		value?: string | number | boolean
	) => void;
	placeholder?: string;
	value: string | number;
	defaultCountry?: Country;
	passwordValid?: boolean;
	validatePassword?: boolean;
	hidePasswordControls?: boolean;
	customErrorMsg?: string;
	icon?: React.ReactNode;
	moreInfo?: React.ReactNode | string;
	infoIcon?: boolean;
	variant?: string;
	iconPosition?: 'left' | 'right';
} & React.ComponentProps<'input'>;

// Text Area
export type TextAreaPropType = {
	required?: boolean;
	name: string;
	label?: string;
	customLabel?: React.ReactNode;
	onChange: (
		event?: React.ChangeEvent<HTMLTextAreaElement>,
		name?: string,
		value?: string | number | boolean
	) => void;
	placeholder?: string;
	value: string;
} & React.ComponentProps<'textarea'>;

// Select
type GeneralType = {
	required?: boolean;
	name: string;
	label?: string;
	customLabel?: React.ReactNode;
	icon?: React.ReactNode;
	options?: {
		icon?: React.ReactNode;
		name: string | number;
		value: string | number;
	}[];
	suggestWhileTyping?: boolean;
	dropdownPosition?: 'top' | 'bottom';
	dropdownAlign?: 'left' | 'center';
	value: string;
	onChange: (
		event: React.ChangeEvent<HTMLInputElement> | null,
		name?: string,
		value?: string | number
	) => void;
	placeholder?: string;
	allowNewSuggestions?: boolean;
} & React.ComponentProps<'input'>;

type BasicType = GeneralType & {
	type?: 'basic';
	suggestionTitle?: never;
	initialSuggestions?: never;

	otherValue?: string;
	otherName?: string;
	shouldHaveOtherOption?: boolean;
	otherOptionText?: string;
	otherOptionPlaceholder?: string;
};

type AdvancedType = GeneralType & {
	type?: 'advanced';
	suggestionTitle?: string;
	initialSuggestions?: string[];

	otherValue?: never;
	otherName?: never;
	shouldHaveOtherOption?: never;
	otherOptionText?: never;
	otherOptionPlaceholder?: never;
};

export type SelectPropType = BasicType | AdvancedType;

// CodeGroup
export type CodeGroupPropType = {
	required?: boolean;
	name: string;
	label?: string;
	customLabel?: React.ReactNode;
	onChange: (event: null, name: string, value: string[]) => void;
	value: string[];
	numberOfInputBox?: number;
} & React.ComponentProps<'input'>;

// DateTime
export type DateTimePropType = {
	required?: boolean;
	name: string;
	label?: string;
	customLabel?: React.ReactNode;
	onChange: (value: Date | null) => void; // Now accepts Date | null directly
	placeholder?: string;
	showDateOnly?: boolean;
	value: Date | null;
};
