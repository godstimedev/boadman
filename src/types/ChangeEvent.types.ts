export type GeneralChangeEventType = (
	event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement> | null,
	name?: string,
	value?: string | number | boolean | string[]
) => void;
