import { ArrowBack, SearchIcon } from '@/assets/svgs';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { InputGroup } from '@/ui';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { APP_ROUTES, QUERY_STRINGS } from '@/constants';

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleChange: GeneralChangeEventType = useDebouncedCallback((event, value) => {
		// name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		if (value) {
			setSearchParams({
				q: value || '',
			});
			if (pathname !== APP_ROUTES.search) {
				navigate(`${APP_ROUTES.search}?${QUERY_STRINGS.search}=${value}`);
			}
		} else {
			// delete the query from the params
			setSearchParams({
				q: '',
			});
		}
	}, 500);

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<Container>
			<header className="search-header">
				<button onClick={handleBack}>
					<ArrowBack />
				</button>

				<div className="search-bar">
					<InputGroup
						type="search"
						name="search"
						placeholder="Search Game"
						autoComplete="off"
						defaultValue={searchParams.get(QUERY_STRINGS.search) || ''}
						onChange={handleChange}
						icon={<SearchIcon />}
						iconPosition="right"
					/>
				</div>
			</header>

			<div></div>
		</Container>
	);
};

export default Search;
