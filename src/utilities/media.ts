import { theme } from '../base';

type BreakPoint = string | number;

const toPixels = (value = 0) => {
	return typeof value === 'number' || value !== 0 ? `${value}px` : 0;
};

const BREAKPOINTS = theme.breakpoints;

const breakpoints = Object.keys(BREAKPOINTS).reduce((acc, curr) => {
	const currentValue = BREAKPOINTS[curr as keyof typeof theme.breakpoints];

	return Object.assign(acc, {
		[curr]: currentValue,
		[`>${curr}`]: currentValue + 1,
		[`<${curr}`]: currentValue - 1,
	});
}, {});

const getBreakpointsInPx = (breakpoint: BreakPoint) => {
	return typeof breakpoint === 'number'
		? toPixels(breakpoint)
		: breakpoint in breakpoints
		? toPixels(breakpoints[breakpoint as keyof typeof breakpoints])
		: breakpoint;
};

export const minQuery = (breakpoint: BreakPoint) => {
	return `@media(min-width: ${getBreakpointsInPx(breakpoint)})`;
};

export const maxQuery = (breakpoint: BreakPoint) => {
	return `@media(max-width: ${getBreakpointsInPx(breakpoint)})`;
};

export const minMaxQuery = (min: BreakPoint, max: BreakPoint) => {
	return `@media(max-width: ${getBreakpointsInPx(max)}) and (min-width: ${getBreakpointsInPx(min)})`;
};
