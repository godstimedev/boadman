// Define the type for a single accordion item
export type AccordionItem = {
	title: string | React.ReactNode;
	content: React.ReactNode; // Allows string or JSX
};

// Define the props for the Accordion component
export type AccordionProps = {
	items: AccordionItem[]; // An array of AccordionItem
};
