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
	Wallet,
	Settings,
	Faqs,
	LeaderboardValorant,
	LeaderboardProfile,
	LeaderboardProfileOverview,
	LeaderboardProfileAgents,
	LeaderboardProfileWeapons,
	LeaderboardProfileMaps,
	Profile,
	GamingGames,
	GamingChallenges,
	GamingTournaments,
	GamingMatches,
	Matches,
	MatchView,
	MatchOverview,
	MatchSummary,
	TournamentView,
	TournamentBracket,
	TournamentMatches,
	TournamentOverview,
	TournamentTeams,
	TournamentResults,
	TournamentMatchView,
	GameView,
	GameOverview,
	GameLeaderboard,
	GameMatches,
	GameTournaments,
	TeamView,
	TeamMatches,
	TeamOverview,
	TeamTournament,
	TeamPlayHistory,
	TeamWallet,
	TeamMatchView,
	ChallengeView,
	ChallengeOverview,
	ChallengeSummary,
	FriendsView,
	FriendsOverview,
	FriendsPlayHistory,
} from './pages';
import { ApplyLayout, DashboardLayout } from './layout';
import { RestrictPages } from './components';
import { APP_ROUTES, PAGE_RESTRICTION_CONDITIONS } from './constants';
import { GlobalStyles, theme } from './base';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
						<Route element={<LeaderboardProfile />}>
							<Route
								path={APP_ROUTES.playerProfile.initial}
								element={<Navigate to={APP_ROUTES.playerProfile.overview} replace />}
							/>
							<Route path={APP_ROUTES.playerProfile.overview} element={<LeaderboardProfileOverview />} />
							<Route path={APP_ROUTES.playerProfile.agents} element={<LeaderboardProfileAgents />} />
							<Route path={APP_ROUTES.playerProfile.weapons} element={<LeaderboardProfileWeapons />} />
							<Route path={APP_ROUTES.playerProfile.maps} element={<LeaderboardProfileMaps />} />
						</Route>
						<Route element={<Gaming />}>
							<Route path={APP_ROUTES.gaming.initial} element={<GamingGames />} />
							<Route path={APP_ROUTES.gaming.myMatches} element={<GamingMatches />} />
							<Route path={APP_ROUTES.gaming.myTournaments} element={<GamingTournaments />} />
							<Route path={APP_ROUTES.gaming.myChallenges} element={<GamingChallenges />} />
						</Route>
						<Route element={<ChallengeView />}>
							<Route path={APP_ROUTES.gaming.myChallengeOverview} element={<ChallengeOverview />} />
							<Route path={APP_ROUTES.gaming.myChallengeSummary} element={<ChallengeSummary />} />
						</Route>
						<Route path={APP_ROUTES.gaming.view} element={<GameView />}>
							<Route path={APP_ROUTES.gaming.overview} element={<GameOverview />} />
							<Route path={APP_ROUTES.gaming.leaderboard} element={<GameLeaderboard />} />
							<Route path={APP_ROUTES.gaming.matches} element={<GameMatches />} />
							<Route path={APP_ROUTES.gaming.tournaments} element={<GameTournaments />} />
						</Route>
						<Route path={APP_ROUTES.tournaments.initial} element={<Tournaments />} />
						<Route path={APP_ROUTES.tournaments.view} element={<TournamentView />}>
							<Route path={APP_ROUTES.tournaments.overview} element={<TournamentOverview />} />
							<Route path={APP_ROUTES.tournaments.bracket} element={<TournamentBracket />} />
							<Route path={APP_ROUTES.tournaments.matches} element={<TournamentMatches />} />
							<Route path={APP_ROUTES.tournaments.match} element={<TournamentMatchView />} />
							<Route path={APP_ROUTES.tournaments.teams} element={<TournamentTeams />} />
							<Route path={APP_ROUTES.tournaments.results} element={<TournamentResults />} />
						</Route>
						<Route path={APP_ROUTES.teams.initial} element={<Teams />} />
						<Route path={APP_ROUTES.teams.view} element={<TeamView />}>
							<Route path={APP_ROUTES.teams.overview} element={<TeamOverview />} />
							<Route path={APP_ROUTES.teams.matches} element={<TeamMatches />} />
							<Route path={APP_ROUTES.teams.match} element={<TeamMatchView />} />
							<Route path={APP_ROUTES.teams.tournaments} element={<TeamTournament />} />
							<Route path={APP_ROUTES.teams.playHistory} element={<TeamPlayHistory />} />
							<Route path={APP_ROUTES.teams.wallet} element={<TeamWallet />} />
						</Route>
						<Route path={APP_ROUTES.friends.initial} element={<Friends />} />
						<Route element={<FriendsView />}>
							<Route path={APP_ROUTES.friends.overview} element={<FriendsOverview />} />
							<Route path={APP_ROUTES.friends.playHistory} element={<FriendsPlayHistory />} />
						</Route>
						<Route path={APP_ROUTES.matches.initial} element={<Matches />} />
						<Route path={APP_ROUTES.matches.view} element={<MatchView />}>
							<Route path={APP_ROUTES.matches.overview} element={<MatchOverview />} />
							<Route path={APP_ROUTES.matches.summary} element={<MatchSummary />} />
						</Route>
						<Route path={APP_ROUTES.wallet} element={<Wallet />} />
						<Route path={APP_ROUTES.profile} element={<Profile />} />
						<Route path={APP_ROUTES.settings} element={<Settings />} />
						<Route path={APP_ROUTES.faqs} element={<Faqs />} />
					</Route>

					{/* Pages that require you to be logged out */}
					<Route
						element={<RestrictPages conditions={[PAGE_RESTRICTION_CONDITIONS.by_auth.be_logged_out]} />}
					></Route>
					<Route path={APP_ROUTES.login} element={<SignIn />} />
					<Route path={APP_ROUTES.register} element={<SignUp />} />

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
