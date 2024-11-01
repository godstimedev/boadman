import { useRef, useState } from 'react';
import { Container } from './styles';
import { AccordionToggle } from '@/assets/svgs';
import { AccordionProps } from '../Accordion.types';

const FaqAccordion = (props: AccordionProps) => {
	const { items } = props;
	const contentRef = useRef<HTMLDivElement>(null);

	const [openIndex, setOpenIndex] = useState<number | null>(null); // openIndex is a number or null

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle openIndex
	};

	return (
		<Container>
			{items?.map((item, index) => (
				<div key={index} className="accordion-item">
					<button className="accordion-header" onClick={() => toggleAccordion(index)}>
						{item.title}
						<span className={openIndex === index ? 'active' : ''}>
							<AccordionToggle />
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

export default FaqAccordion;
