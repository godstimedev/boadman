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
	Withdraw,
	Transfer,
	ProfileOverview,
	ProfilePlayHistory,
	ProfileStream,
	SettingsGeneral,
	SettingsAbout,
	SettingsChangePassword,
	SettingsIntegrations,
	SettingsPrivacy,
	SettingsNotifications,
	SettingsVerification,
	FaqTeams,
	FaqGeneraQuestions,
	FaqMatches,
	FaqTournaments,
	FaqPayment,
	FaqGames,
	FaqLeaderboard,
	FaqChallenges,
	FaqDispute,
	FaqResults,
	TournamentResultView,
	LeaderboardGames,
	LeaderboardProfile,
	LeaderboardProfileOverview,
	LeaderboardProfileAgents,
	LeaderboardProfileWeapons,
	LeaderboardProfileMaps,
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
								element={<Navigate to={APP_ROUTES.leaderboard.use_game('0')} replace />}
							/>
							<Route path={APP_ROUTES.leaderboard.game} element={<LeaderboardGames />} />
						</Route>
						<Route path={APP_ROUTES.leaderboard.player.initial} element={<LeaderboardProfile />}>
							<Route
								path={APP_ROUTES.leaderboard.player.initial}
								element={<Navigate to={APP_ROUTES.leaderboard.player.overview} replace />}
							/>
							<Route
								path={APP_ROUTES.leaderboard.player.overview}
								element={<LeaderboardProfileOverview />}
							/>
							<Route path={APP_ROUTES.leaderboard.player.agents} element={<LeaderboardProfileAgents />} />
							<Route
								path={APP_ROUTES.leaderboard.player.weapons}
								element={<LeaderboardProfileWeapons />}
							/>
							<Route path={APP_ROUTES.leaderboard.player.maps} element={<LeaderboardProfileMaps />} />
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
							<Route path={APP_ROUTES.tournaments.result} element={<TournamentResultView />} />
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
						<Route element={<Wallet />}>
							<Route
								path={APP_ROUTES.wallet.initial}
								element={<Navigate to={APP_ROUTES.wallet.withdraw} replace />}
							/>
							<Route path={APP_ROUTES.wallet.withdraw} element={<Withdraw />} />
							<Route path={APP_ROUTES.wallet.transfer} element={<Transfer />} />
						</Route>
						<Route element={<Profile />}>
							<Route
								path={APP_ROUTES.profile.initial}
								element={<Navigate to={APP_ROUTES.profile.overview} replace />}
							/>
							<Route path={APP_ROUTES.profile.overview} element={<ProfileOverview />} />
							<Route path={APP_ROUTES.profile.playHistory} element={<ProfilePlayHistory />} />
							<Route path={APP_ROUTES.profile.stream} element={<ProfileStream />} />
						</Route>
						<Route element={<Settings />}>
							<Route
								path={APP_ROUTES.settings.initial}
								element={<Navigate to={APP_ROUTES.settings.general} replace />}
							/>
							<Route path={APP_ROUTES.settings.general} element={<SettingsGeneral />} />
							<Route path={APP_ROUTES.settings.about} element={<SettingsAbout />} />
							<Route path={APP_ROUTES.settings.changePassword} element={<SettingsChangePassword />} />
							<Route path={APP_ROUTES.settings.integrations} element={<SettingsIntegrations />} />
							<Route path={APP_ROUTES.settings.privacy} element={<SettingsPrivacy />} />
							<Route path={APP_ROUTES.settings.notifications} element={<SettingsNotifications />} />
							<Route path={APP_ROUTES.settings.verification} element={<SettingsVerification />} />
						</Route>
						<Route element={<Faqs />}>
							<Route
								path={APP_ROUTES.faqs.initial}
								element={<Navigate to={APP_ROUTES.faqs.teams} replace />}
							/>
							<Route path={APP_ROUTES.faqs.teams} element={<FaqTeams />} />
							<Route path={APP_ROUTES.faqs.generalQuestions} element={<FaqGeneraQuestions />} />
							<Route path={APP_ROUTES.faqs.matches} element={<FaqMatches />} />
							<Route path={APP_ROUTES.faqs.tournaments} element={<FaqTournaments />} />
							<Route path={APP_ROUTES.faqs.payment} element={<FaqPayment />} />
							<Route path={APP_ROUTES.faqs.games} element={<FaqGames />} />
							<Route path={APP_ROUTES.faqs.leaderboard} element={<FaqLeaderboard />} />
							<Route path={APP_ROUTES.faqs.challenges} element={<FaqChallenges />} />
							<Route path={APP_ROUTES.faqs.disputes} element={<FaqDispute />} />
							<Route path={APP_ROUTES.faqs.results} element={<FaqResults />} />
						</Route>
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
