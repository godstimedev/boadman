import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FaqAccordion = () => {
	return (
		<div>
			<Accordion type="single" collapsible>
				{faqData.map((faq) => {
					return (
						<AccordionItem key={faq.id} value={`item-${faq.id}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
};

export default FaqAccordion;

const faqData = [
	{
		id: 1,
		question: 'How much does it cost to join Boadman?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Gravida amet vivamus pulvinar vestibulum. Volutpat varius risus tincidunt dui blandit sapien. Nunc tortor mattis convallis quis in cursus. Auctor tincidunt orci amet eu feugiat. Pulvinar urna sit viverra id sagittis',
	},
	{
		id: 2,
		question: 'How can i win on Boadman?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Gravida amet vivamus pulvinar vestibulum. Volutpat varius risus tincidunt dui blandit sapien. Nunc tortor mattis convallis quis in cursus. Auctor tincidunt orci amet eu feugiat. Pulvinar urna sit viverra id sagittis',
	},
	{
		id: 3,
		question: 'How can i get my reward on Boadman?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Gravida amet vivamus pulvinar vestibulum. Volutpat varius risus tincidunt dui blandit sapien. Nunc tortor mattis convallis quis in cursus. Auctor tincidunt orci amet eu feugiat. Pulvinar urna sit viverra id sagittis',
	},
	{
		id: 4,
		question: 'What are the benefits of using Boadman?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Gravida amet vivamus pulvinar vestibulum. Volutpat varius risus tincidunt dui blandit sapien. Nunc tortor mattis convallis quis in cursus. Auctor tincidunt orci amet eu feugiat. Pulvinar urna sit viverra id sagittis',
	},
	{
		id: 5,
		question: 'How does challenges work?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Gravida amet vivamus pulvinar vestibulum. Volutpat varius risus tincidunt dui blandit sapien. Nunc tortor mattis convallis quis in cursus. Auctor tincidunt orci amet eu feugiat. Pulvinar urna sit viverra id sagittis',
	},
	{
		id: 6,
		question: 'Is the leaderboard global?',
		answer:
			'Lorem ipsum dolor sit amet consectetur. Gravida amet vivamus pulvinar vestibulum. Volutpat varius risus tincidunt dui blandit sapien. Nunc tortor mattis convallis quis in cursus. Auctor tincidunt orci amet eu feugiat. Pulvinar urna sit viverra id sagittis',
	},
];
