import { v4 as uuidv4 } from 'uuid';

// This was made a component because the mask id of one kept inteferring with other svgs of the same type on the page
const InputInfo = () => {
	const uniqueId = uuidv4();

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask
				id={uniqueId}
				style={{ maskType: 'alpha' }}
				maskUnits="userSpaceOnUse"
				x="1"
				y="1"
				width="14"
				height="14"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 1.33334C4.31999 1.33334 1.33333 4.32 1.33333 8C1.33333 11.68 4.31999 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33334 8 1.33334ZM8 8.66667C7.63333 8.66667 7.33333 8.36667 7.33333 8V5.33334C7.33333 4.96667 7.63333 4.66667 8 4.66667C8.36666 4.66667 8.66666 4.96667 8.66666 5.33334V8C8.66666 8.36667 8.36666 8.66667 8 8.66667ZM7.33333 10V11.3333H8.66666V10H7.33333Z"
					fill="black"
				/>
			</mask>
			<g mask={`url(#${uniqueId}`}>
				<rect width="16" height="16" fill="#fff" />
			</g>
		</svg>
	);
};

export default InputInfo;
