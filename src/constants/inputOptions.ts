import { getData } from 'country-list';

export const COUNTRIES = getData().map((country) => country.name);

export const GAMES = [
	'Valorant',
	'COD',
	'PUBG',
	'Apex Legend',
	'Destiny 2',
	'League of Legend',
	'Fortnite',
	'Counter strike',
	'Overwatch',
];

export const YEARS = Array.from(
	new Array(new Date().getFullYear() - 1980 + 1),
	(_, index) => 1980 + index
);
export const DAYS = Array.from({ length: 31 }, (_, index) => 1 + index);

export const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
