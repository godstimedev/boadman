import { DefaultTheme, css } from 'styled-components';

// /*
const colors = {
	// Primary
	primary50: '#FEE9E4',
	primary100: '#FEC9B5',
	primary200: '#FDA68D',
	primary300: '#FD8465',
	primary400: '#FC6D45',
	primary500: '#FF5733', // Base color
	primary600: '#E43F1D',
	primary700: '#C7301A',
	primary800: '#A82116',
	primary900: '#8C1A13',

	// Secondary
	secondary50: '#BCC0D0',
	secondary100: '#9F9FC2',
	secondary200: '#7A7D9B',
	secondary300: '#585B74',
	secondary400: '#3B3F53',
	secondary500: '#171A23', // Base color
	secondary600: '#14161F',
	secondary700: '#10121B',
	secondary800: '#0D0F17',
	secondary900: '#090A12',

	// Accent
	accent50: '#E3E5E9',
	accent100: '#313337', //lines
	accent200: '#979797', // unfocused texts
	accent300: '#474C57', //in use
	accent400: '#2C2E33', // in use
	accent500: '#22252C', // Base color
	accent600: '#1D1F25',
	accent700: '#181A1D',
	accent800: '#121416',
	accent900: '#0D0F11',
	// background: ;

	// Neutral
	neutral50: '#2C2E33',
	neutral100: '#E5E5E5B2',
	// neutral100: '#E7EAEE',
	neutral200: '#E5E5E5B2',
	neutral300: '#E5E5E5B2',
	neutral400: '#E5E5E5B2',
	neutral500: '#E5E5E5B2',
	neutral600: '#4B5768',
	neutral700: '#323A46',
	neutral800: '#191D23',
	neutral900: '#0D0F11',

	// Success
	success50: '#ECFDF5',
	success500: '#10B981',

	// Warning
	warning50: '#FFFBEB',
	warning500: '#CE6C47',

	// Error
	error50: '#FEE1E5',
	error500: '#F71735',

	// Shades
	black: '#000000',
	white: '#ffffff',
	grey: '#C7C7C7',
};
// */
/*
const colors = {
	// Primary
	primary50: '#F0ECFE',
	primary100: '#E4DFFD',
	primary200: '#C7BDFA',
	primary300: '#A595F3',
	primary400: '#826BEA',
	primary500: '#5E40DF',
	primary600: '#3E1BDA',
	primary700: '#2B08C7',
	primary800: '#2406A6',
	primary900: '#1C0585',

	// Secondary
	secondary50: '#FFFCF6',
	secondary100: '#FEF2D9',
	secondary200: '#FCE6B3',
	secondary300: '#FBD98E',
	secondary400: '#F9C95E',
	secondary500: '#F8C042',
	secondary600: '#F7B31C',
	secondary700: '#BD8507',
	secondary800: '#725004',
	secondary900: '#261B01',

	// Neutral
	neutral50: '#F9FAFB',
	neutral100: '#F2F4F7',
	neutral200: '#E4E7EC',
	neutral300: '#D0D5DD',
	neutral400: '#98A2B3',
	neutral500: '#667085',
	neutral600: '#475467',
	neutral700: '#344054',
	neutral800: '#1D2939',
	neutral900: '#101828',

	// Success
	success50: '#ECFDF3',
	success500: '#12B76A',

	// Warning
	warning50: '#FFFAEB',
	warning500: '#F79009',

	// Error
	error50: '#FEF3F2',
	error500: '#F04438',

	// Shades
	black: '#000000',
	white: '#ffffff',
};
*/
const fonts = {
	primaryFont: css`
		font-family: 'Manrope', sans-serif !important;
	`,
	secondaryFont: css`
		font-family: 'McLaren', serif;
	`,
};
const breakpoints = {
	xs: 450,
	sm: 600,
	md: 800,
	lg: 1000,
	xl: 1200,
};
const theme: DefaultTheme = {
	colors,
	fonts,
	breakpoints,
};
export default theme;
