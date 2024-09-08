import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth, useDecodedUser } from '../../hooks';
import { APP_ROUTES, PAGE_RESTRICTION_CONDITIONS, QUERY_STRINGS } from '../../constants';
import { PageNotFound } from '../../pages';

type RestricPagesPropType = {
	conditions: string[];
	shouldRedirect?: boolean;
	shouldRedirectToPreviousPage?: boolean;
	urlToRedirectTo?: string;
};

const RestrictPages = (props: RestricPagesPropType) => {
	const { conditions = [], shouldRedirect = true, shouldRedirectToPreviousPage = false, urlToRedirectTo = '' } = props;

	const { auth } = useAuth();
	const { pathname } = useLocation();
	const { isAdmin } = useDecodedUser();
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const [jsxToReturn, setJSXToReturn] = useState(<Outlet />);

	useEffect(() => {
		for (let i = 0; i < conditions.length; i++) {
			const condition = conditions[i];

			// Must be logged in
			if (condition === PAGE_RESTRICTION_CONDITIONS.by_auth.be_logged_in && !auth.access()) {
				navigate(`${APP_ROUTES.login}?${QUERY_STRINGS.next_page}=${pathname}`);
			}

			// Must be logged out
			if (condition === PAGE_RESTRICTION_CONDITIONS.by_auth.be_logged_out && auth.access()) {
				if (shouldRedirectToPreviousPage) {
					navigate(-1);
				} else if (shouldRedirect) {
					navigate(urlToRedirectTo || searchParams.get(QUERY_STRINGS.next_page) || APP_ROUTES.home, { replace: true });
				} else {
					setJSXToReturn(<PageNotFound />);
				}
			}

			// Must be an admin
			if (condition === PAGE_RESTRICTION_CONDITIONS.by_role.be_admin && !isAdmin) {
				if (shouldRedirectToPreviousPage) {
					navigate(-1);
				} else if (shouldRedirect) {
					navigate(urlToRedirectTo || APP_ROUTES.home, { replace: true });
				} else {
					setJSXToReturn(<PageNotFound />);
				}
			}
		}
	}, [conditions, auth, isAdmin, navigate, pathname, shouldRedirect, shouldRedirectToPreviousPage, urlToRedirectTo, searchParams]);

	return jsxToReturn;
};

export default RestrictPages;
