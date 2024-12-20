export const APP_ROUTES = {
	dashboard: '/dashboard',
	search: '/search',
	faqs: {
		initial: '/faqs',
		teams: '/faqs/teams',
		generalQuestions: '/faqs/general-questions',
		matches: '/faqs/matches',
		tournaments: '/faqs/tournaments',
		payment: '/faqs/payment',
		games: '/faqs/games',
		leaderboard: '/faqs/leaderboard',
		challenges: '/faqs/challenges',
		disputes: '/faqs/disputes',
		results: '/faqs/results',
	},
	friends: {
		initial: '/friends',
		view: `/friends/:friendId/`,
		use_view: (friendId: string | undefined) => `/friends/${friendId}/`,
		overview: `/friends/:friendId/overview`,
		use_overview: (friendId: string | undefined) => `/friends/${friendId}/overview`,
		playHistory: `/friends/:friendId/play-history`,
		use_playHistory: (friendId: string | undefined) => `/friends/${friendId}/play-history`,
	},
	gaming: {
		initial: '/games',
		view: '/games/:gameId',
		use_view: (gameId: string | undefined) => `/games/${gameId}`,
		overview: '/games/:gameId/overview',
		use_overview: (gameId: string | undefined) => `/games/${gameId}/overview`,
		matches: '/games/:gameId/matches',
		use_matches: (gameId: string | undefined) => `/games/${gameId}/matches`,
		tournaments: '/games/:gameId/tournaments',
		use_tournaments: (gameId: string | undefined) => `/games/${gameId}/tournaments`,
		leaderboard: '/games/:gameId/leaderboard',
		use_leaderboard: (gameId: string | undefined) => `/games/${gameId}/leaderboard`,
		myMatches: '/games/my-matches',
		myTournaments: '/games/my-tournaments',
		myChallenges: '/games/my-challenges',
		myChallengesView: `/games/my-challenges/:challengeId/`,
		use_challenge_view: (challengeId: string | undefined) => `/games/my-challenges/${challengeId}/`,
		myChallengeOverview: `/games/my-challenges/:challengeId/overview`,
		use_challenge_overview: (challengeId: string | undefined) =>
			`/games/my-challenges/${challengeId}/overview`,
		myChallengeSummary: `/games/my-challenges/:challengeId/summary`,
		use_challenge_summary: (challengeId: string | undefined) =>
			`/games/my-challenges/${challengeId}/summary`,
	},
	leaderboard: {
		initial: '/leaderboard',
		game: '/leaderboard/:gameId',
		use_game: (gameId: string | undefined) => `/leaderboard/${gameId}`,
		use_player: (gameId: string | undefined, playerId: string | undefined) =>
			`/leaderboard/${gameId}/${playerId}`,
		player: {
			initial: '/leaderboard/:gameId/:playerId',
			overview: '/leaderboard/:gameId/:playerId/overview',
			use_overview: (gameId: string | undefined, playerId: string | undefined) =>
				`/leaderboard/${gameId}/${playerId}/overview`,
			agents: '/leaderboard/:gameId/:playerId/agents',
			use_agents: (gameId: string | undefined, playerId: string | undefined) =>
				`/leaderboard/${gameId}/${playerId}/agents`,
			weapons: '/leaderboard/:gameId/:playerId/weapons',
			use_weapons: (gameId: string | undefined, playerId: string | undefined) =>
				`/leaderboard/${gameId}/${playerId}/weapons`,
			maps: '/leaderboard/:gameId/:playerId/maps',
			use_maps: (gameId: string | undefined, playerId: string | undefined) =>
				`/leaderboard/${gameId}/${playerId}/maps`,
		},
	},
	playerProfile: {
		initial: '/player-profile/',
		overview: '/player-profile/overview',
		agents: '/player-profile/agents',
		weapons: '/player-profile/weapons',
		maps: '/player-profile/maps',
	},
	home: '/',
	login: '/login',
	matches: {
		initial: '/matches',
		view: `/matches/:matchId/`,
		use_view: (matchId: string) => `/matches/${matchId}/`,
		overview: `/matches/:matchId/overview`,
		use_overview: (matchId: string) => `/matches/${matchId}/overview`,
		summary: `/matches/:matchId/summary`,
		use_summary: (matchId: string) => `/matches/${matchId}/summary`,
	},
	playground: '/playground',

	profile: {
		initial: '/profile',
		overview: `/profile/overview`,
		stream: `/profile/stream`,
		playHistory: `/profile/play-history`,
	},
	register: '/register',
	settings: {
		initial: '/settings',
		general: '/settings/general-information',
		about: '/settings/about-me',
		changePassword: '/settings/change-password',
		integrations: '/settings/integrations',
		privacy: '/settings/privacy',
		notifications: '/settings/notifications',
		verification: '/settings/verification',
	},
	teams: {
		initial: '/teams',
		view: '/teams/:teamId',
		use_view: (teamId: string) => `/teams/${teamId}`,
		overview: '/teams/:teamId/overview',
		use_overview: (teamId: string) => `/teams/${teamId}/overview`,
		matches: '/teams/:teamId/matches',
		use_matches: (teamId: string) => `/teams/${teamId}/matches`,
		match: '/teams/:teamId/matches/:matchId',
		use_match: (teamId: string, matchId: string) => `/teams/${teamId}/matches/${matchId}`,
		tournaments: '/teams/:teamId/tournaments',
		use_tournaments: (teamId: string) => `/teams/${teamId}/tournaments`,
		wallet: '/teams/:teamId/wallet',
		use_wallet: (teamId: string) => `/teams/${teamId}/wallet`,
		playHistory: '/teams/:teamId/play-history',
		use_playHistory: (teamId: string) => `/teams/${teamId}/play-history`,
	},
	tournaments: {
		initial: '/tournaments',
		view: `/tournaments/:tournamentId`,
		use_view: (tournamentId: string) => `/tournaments/${tournamentId}`,
		overview: `/tournaments/:tournamentId/overview`,
		use_overview: (tournamentId: string) => `/tournaments/${tournamentId}/overview`,
		matches: `/tournaments/:tournamentId/matches`,
		use_matches: (tournamentId: string) => `/tournaments/${tournamentId}/matches`,
		match: `/tournaments/:tournamentId/matches/:matchId`,
		use_match: (tournamentId: string, matchId: string) =>
			`/tournaments/${tournamentId}/matches/${matchId}`,
		bracket: `/tournaments/:tournamentId/bracket`,
		use_bracket: (tournamentId: string) => `/tournaments/${tournamentId}/bracket`,
		teams: `/tournaments/:tournamentId/teams`,
		use_teams: (tournamentId: string) => `/tournaments/${tournamentId}/teams`,
		results: `/tournaments/:tournamentId/results`,
		use_results: (tournamentId: string) => `/tournaments/${tournamentId}/results`,
		result: `/tournaments/:tournamentId/results/:resultId`,
		use_result: (tournamentId: string, resultId: string) =>
			`/tournaments/${tournamentId}/results/${resultId}`,
	},
	wallet: {
		initial: '/wallet',
		withdraw: '/wallet/withdraw',
		transfer: '/wallet/transfer',
	},
};
