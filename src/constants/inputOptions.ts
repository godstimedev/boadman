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
