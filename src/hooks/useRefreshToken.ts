import { useAuth } from '.';
import { APP_URLS } from '../constants';
import { axios } from '../library';

const useRefreshToken = () => {
	const { auth } = useAuth();

	const refresh = () =>
		axios.post(APP_URLS.auth.refresh_token, {
			refresh: auth?.refresh || localStorage.getItem('refresh'),
		});

	return refresh;
};

export default useRefreshToken;
