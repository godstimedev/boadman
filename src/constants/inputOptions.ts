import { getData } from 'country-list';

export const COUNTRIES = getData().map((country) => country.name);
