import { ThemeProvider } from 'styled-components';
import './tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
	LeaderboardValorant,
	ProfileOverview,
	ProfileAgents,
	ProfileWeapons,
	ProfileMaps,
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
						<Route element={<Leaderboard />}>
							<Route
								path={APP_ROUTES.leaderboard.initial}
								element={<Navigate to={APP_ROUTES.leaderboard.valorant} replace />}
							/>
							<Route path={APP_ROUTES.leaderboard.valorant} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.cod} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.pubg} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.apexLegend} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.destiny2} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.leagueOfLegend} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.fortnite} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.counterStrike} element={<LeaderboardValorant />} />
							<Route path={APP_ROUTES.leaderboard.overwatch} element={<LeaderboardValorant />} />
						</Route>
						<Route path={APP_ROUTES.gaming} element={<Gaming />} />
						<Route path={APP_ROUTES.tournaments} element={<Tournaments />} />
						<Route path={APP_ROUTES.teams} element={<Teams />} />
						<Route path={APP_ROUTES.friends} element={<Friends />} />
						<Route path={APP_ROUTES.stream} element={<Stream />} />
						<Route path={APP_ROUTES.wallet} element={<Wallet />} />
						<Route element={<Profile />}>
							<Route
								path={APP_ROUTES.profile.initial}
								element={<Navigate to={APP_ROUTES.profile.overview} replace />}
							/>
							<Route path={APP_ROUTES.profile.overview} element={<ProfileOverview />} />
							<Route path={APP_ROUTES.profile.agents} element={<ProfileAgents />} />
							<Route path={APP_ROUTES.profile.weapons} element={<ProfileWeapons />} />
							<Route path={APP_ROUTES.profile.maps} element={<ProfileMaps />} />
						</Route>
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
