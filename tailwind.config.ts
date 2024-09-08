/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // Scan for classes in your React project
		'./src/base/**/*.{js,ts,jsx,tsx}', // If you use Tailwind classes in your base folder
		'./node_modules/@shadcn/**/*.{js,ts,jsx,tsx}', // Include Shadcn UI components
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

// require('@tailwindcss/forms'), require('@tailwindcss/typography')
