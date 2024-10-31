import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
type FormType = {
	can_add_as_friend: string;
	can_view_profile: string;
	can_comment: string;
	can_challenge_me: string;
	can_message_me: string;
};

const SettingsPrivacy = () => {
	const [formData, setFormData] = useState<FormType>({
		can_add_as_friend: '',
		can_view_profile: '',
		can_comment: '',
		can_challenge_me: '',
		can_message_me: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(formData);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit} autoComplete="off">
				<div>
					<h5>Privacy</h5>

					<div className="input-con">
						<div>
							<InputGroup
								type="radio"
								name="can_add_as_friend"
								label="Who can add me as a friend?"
								options={[
									{
										name: 'Anyone',
										value: 'anyone',
									},
									{
										name: 'Friend of a friend',
										value: 'friend of a friend',
									},
									{
										name: 'None',
										value: 'none',
									},
								]}
								value={formData.can_add_as_friend}
								onChange={handleChange}
							/>
						</div>
						<div>
							<InputGroup
								type="radio"
								name="can_view_profile"
								label="Who can view my profile?"
								options={[
									{
										name: 'Anyone',
										value: 'anyone',
									},
									{
										name: 'Friend of a friend',
										value: 'friend of a friend',
									},
									{
										name: 'None',
										value: 'none',
									},
								]}
								value={formData.can_view_profile}
								onChange={handleChange}
							/>
						</div>
						<div>
							<InputGroup
								type="radio"
								name="can_comment"
								label="Who can comment on my profile feed activity?"
								options={[
									{
										name: 'Anyone',
										value: 'anyone',
									},
									{
										name: 'Friend of a friend',
										value: 'friend of a friend',
									},
									{
										name: 'None',
										value: 'none',
									},
								]}
								value={formData.can_comment}
								onChange={handleChange}
							/>
						</div>
						<div>
							<InputGroup
								type="radio"
								name="can_challenge_me"
								label="Who can challenge me to a game?"
								options={[
									{
										name: 'Anyone',
										value: 'anyone',
									},
									{
										name: 'Friend of a friend',
										value: 'friend of a friend',
									},
									{
										name: 'None',
										value: 'none',
									},
								]}
								value={formData.can_challenge_me}
								onChange={handleChange}
							/>
						</div>
						<div>
							<InputGroup
								type="radio"
								name="can_message_me"
								label="Who can message me without adding me as a friend?"
								options={[
									{
										name: 'Anyone',
										value: 'anyone',
									},
									{
										name: 'Friend of a friend',
										value: 'friend of a friend',
									},
									{
										name: 'None',
										value: 'none',
									},
								]}
								value={formData.can_message_me}
								onChange={handleChange}
							/>
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

export default SettingsPrivacy;
