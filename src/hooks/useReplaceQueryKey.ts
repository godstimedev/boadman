import { useLocation, useSearchParams } from 'react-router-dom';

type ReplaceQueryKeyTypes = {
	newValue: string | number;
	queryKey: string;
	searchQuery?: string;
};

const useReplaceQueryKey = () => {
	const { search } = useLocation();
	const [searchParams] = useSearchParams();

	const replaceQueryKey = ({ newValue, queryKey, searchQuery }: ReplaceQueryKeyTypes) => {
		let newSearchQuery = searchQuery || search;
		const oldQuery = `${queryKey}=${searchParams.get(queryKey)}`;
		const newQuery = `${queryKey}=${newValue}`;

		if (newSearchQuery.indexOf(oldQuery) !== -1) {
			newSearchQuery = newSearchQuery.replace(oldQuery, newQuery);
		} else {
			newSearchQuery = newSearchQuery ? newSearchQuery + `&${newQuery}` : newSearchQuery + `?${newQuery}`;
		}

		return newSearchQuery;
	};

	return replaceQueryKey;
};

export default useReplaceQueryKey;
