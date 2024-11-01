import { useState } from 'react';
import { Container } from './styles';
import { Button, Switch } from '@/ui';

type FormType = {
	friend_request: boolean;
	friend_acceptance: boolean;
	team_invite: boolean;
	challenge_request: boolean;
	reactions: boolean;

	game_request: boolean;
	accepted_game: boolean;
	finshed_game: boolean;
	match_reviewed: boolean;
	match_result: boolean;
	tournament_result: boolean;
	game_starting: boolean;

	deposit: boolean;
	withdrawal: boolean;
};

const SettingsNotifications = () => {
	const [formData, setFormData] = useState<FormType>({
		friend_request: false,
		friend_acceptance: false,
		team_invite: false,
		challenge_request: false,
		reactions: false,
		game_request: false,
		accepted_game: false,
		finshed_game: false,
		match_reviewed: false,
		match_result: false,
		tournament_result: false,
		game_starting: false,
		deposit: false,
		withdrawal: false,
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(formData);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit} autoComplete="off">
				<div>
					<h5>Notification</h5>

					<div className="switch-wrapper">
						<div className="switch-con">
							<h6>Friends and team notification</h6>

							<div>
								<span>Friend Request</span>

								<Switch
									$active={formData.friend_request}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											friend_request: !prev.friend_request,
										}))
									}
								/>
							</div>
							<div>
								<span>Friend acceptance</span>

								<Switch
									$active={formData.friend_acceptance}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											friend_acceptance: !prev.friend_acceptance,
										}))
									}
								/>
							</div>
							<div>
								<span>Team invite</span>

								<Switch
									$active={formData.team_invite}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											team_invite: !prev.team_invite,
										}))
									}
								/>
							</div>
							<div>
								<span>Challenge request</span>

								<Switch
									$active={formData.challenge_request}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											challenge_request: !prev.challenge_request,
										}))
									}
								/>
							</div>
							<div>
								<span>Reactions</span>

								<Switch
									$active={formData.reactions}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											reactions: !prev.reactions,
										}))
									}
								/>
							</div>
						</div>

						<div className="switch-con">
							<h6>Games</h6>

							<div>
								<span>Game Request</span>

								<Switch
									$active={formData.game_request}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											game_request: !prev.game_request,
										}))
									}
								/>
							</div>
							<div>
								<span>Accepted game</span>

								<Switch
									$active={formData.accepted_game}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											accepted_game: !prev.accepted_game,
										}))
									}
								/>
							</div>
							<div>
								<span>Finished game</span>

								<Switch
									$active={formData.finshed_game}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											finshed_game: !prev.finshed_game,
										}))
									}
								/>
							</div>
							<div>
								<span>Match reviewed</span>

								<Switch
									$active={formData.match_reviewed}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											match_reviewed: !prev.match_reviewed,
										}))
									}
								/>
							</div>
							<div>
								<span>Match result</span>

								<Switch
									$active={formData.match_result}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											match_result: !prev.match_result,
										}))
									}
								/>
							</div>
							<div>
								<span>Tournament result</span>

								<Switch
									$active={formData.tournament_result}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											tournament_result: !prev.tournament_result,
										}))
									}
								/>
							</div>
							<div>
								<span>Game starting</span>

								<Switch
									$active={formData.game_starting}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											game_starting: !prev.game_starting,
										}))
									}
								/>
							</div>
						</div>
						<div className="switch-con">
							<h6>Payments</h6>

							<div>
								<span>Deposit</span>

								<Switch
									$active={formData.deposit}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											deposit: !prev.deposit,
										}))
									}
								/>
							</div>
							<div>
								<span>Withdrawal</span>

								<Switch
									$active={formData.withdrawal}
									onClick={() =>
										setFormData((prev) => ({
											...prev,
											withdrawal: !prev.withdrawal,
										}))
									}
								/>
							</div>
						</div>
					</div>
				</div>

				<div>
					<Button type="submit" variant="primary" size="large">
						Save Changes
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default SettingsNotifications;
