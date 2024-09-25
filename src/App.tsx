import { ThemeProvider } from 'styled-components';
import './tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Playground,
	Home,
	PageNotFound,
	SignIn,
	SignUp,
	Dashboard,
	Leaderboard,
	Gaming,
	Tournaments,
	Teams,
	Friends,
	Stream,
	Wallet,
	Profile,
	Settings,
	Faqs,
} from './pages';
import { ApplyLayout } from './layout';
import { RestrictPages } from './components';
import { APP_ROUTES, PAGE_RESTRICTION_CONDITIONS } from './constants';
import { GlobalStyles, theme } from './base';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DashboardLayout from './layout/DashboardLayout';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			<BrowserRouter>
				<Routes>
					{/* Playground page for developers */}
					{/* Not visible in production */}
					{process.env.NODE_ENV === 'development' && (
						<Route path={APP_ROUTES.playground} element={<Playground />} />
					)}

					{/* Pages that have their own default layout */}
					<Route element={<DashboardLayout />}>
						<Route path={APP_ROUTES.dashboard} element={<Dashboard />} />
						<Route path={APP_ROUTES.leaderboard} element={<Leaderboard />} />
						<Route path={APP_ROUTES.gaming} element={<Gaming />} />
						<Route path={APP_ROUTES.tournaments} element={<Tournaments />} />
						<Route path={APP_ROUTES.teams} element={<Teams />} />
						<Route path={APP_ROUTES.friends} element={<Friends />} />
						<Route path={APP_ROUTES.stream} element={<Stream />} />
						<Route path={APP_ROUTES.wallet} element={<Wallet />} />
						<Route path={APP_ROUTES.profile} element={<Profile />} />
						<Route path={APP_ROUTES.settings} element={<Settings />} />
						<Route path={APP_ROUTES.faqs} element={<Faqs />} />
					</Route>

					{/* Pages that require you to be logged out */}
					<Route
						element={<RestrictPages conditions={[PAGE_RESTRICTION_CONDITIONS.by_auth.be_logged_out]} />}
					>
						<Route path={APP_ROUTES.login} element={<SignIn />} />
						<Route path={APP_ROUTES.register} element={<SignUp />} />
					</Route>

					{/* Use default layout on theses pages */}
					<Route element={<ApplyLayout />}>
						<Route path={APP_ROUTES.home} element={<Home />} />
					</Route>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>

			<ToastContainer
				limit={2}
				autoClose={3000}
				closeButton={false}
				position="top-center"
				hideProgressBar={true}
			/>
			<ReactQueryDevtools initialIsOpen={false} position="bottom" />
		</ThemeProvider>
	);
}

export default App;
