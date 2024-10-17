import { useRef, useState } from 'react';
import { Container } from './styles';
import { CaretRight } from '@/assets/svgs';

// Define the type for a single accordion item
interface AccordionItem {
	title: string | React.ReactNode;
	content: React.ReactNode; // Allows string or JSX
}

// Define the props for the Accordion component
interface AccordionProps {
	items: AccordionItem[]; // An array of AccordionItem
}

const Accordion = (props: AccordionProps) => {
	const { items } = props;
	const contentRef = useRef<HTMLDivElement>(null);

	const [openIndex, setOpenIndex] = useState<number | null>(null); // openIndex is a number or null

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle openIndex
	};

	return (
		<Container className="accordion">
			{items?.map((item, index) => (
				<div key={index} className="accordion-item">
					<button className="accordion-header" onClick={() => toggleAccordion(index)}>
						<div>{item.title}</div>
						<span className={openIndex === index ? 'active' : ''}>
							<CaretRight />
						</span>
					</button>
					<div
						ref={contentRef}
						className={`accordion-content ${openIndex === index ? 'open' : ''}`}
						style={{
							maxHeight: openIndex === index ? contentRef.current?.scrollHeight : 0,
						}}
					>
						<p>{item.content}</p>
					</div>
				</div>
			))}
		</Container>
	);
};

export default Accordion;
