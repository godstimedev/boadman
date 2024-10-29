import { Button, InputGroup, TextArea } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import {
	DiscordIcon,
	FacebookTeams,
	InstagramTeams,
	TwitchIcon,
	YoutubeTeams,
} from '@/assets/svgs';

type FormType = {
	country: string;
	about_me: string;
	interest: string;
	socials: {
		facebook: string;
		discord: string;
		youtube: string;
		instagram: string;
		twitch: string;
	};
};
const SettingsAbout = () => {
	const [formData, setFormData] = useState<FormType>({
		country: '',
		about_me: '',
		interest: '',
		socials: {
			facebook: '',
			discord: '',
			youtube: '',
			instagram: '',
			twitch: '',
		},
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
					<h5>About me</h5>

					<div>
						<div className="input-con">
							<InputGroup
								type="text"
								name="country"
								label="Country"
								value={formData.country}
								onChange={handleChange}
							/>

							<TextArea
								name="about_me"
								label="Few words about me"
								value={formData.about_me}
								onChange={handleChange}
							/>
							<InputGroup
								type="text"
								name="interest"
								label="Interest"
								value={formData.interest}
								onChange={handleChange}
							/>

							<div className="socials">
								<InputGroup
									type="url"
									name="facebook"
									label="Socials"
									placeholder="Facebook"
									icon={<FacebookTeams />}
									value={formData.socials.facebook}
									onChange={handleChange}
								/>
								<InputGroup
									type="url"
									name="discord"
									placeholder="Discord"
									icon={<DiscordIcon />}
									value={formData.socials.discord}
									onChange={handleChange}
								/>
								<InputGroup
									type="url"
									name="youtube"
									placeholder="Youtube"
									icon={<YoutubeTeams />}
									value={formData.socials.youtube}
									onChange={handleChange}
								/>
								<InputGroup
									type="url"
									name="instagram"
									placeholder="Instagram"
									icon={<InstagramTeams />}
									value={formData.socials.instagram}
									onChange={handleChange}
								/>
								<InputGroup
									type="url"
									name="twitch"
									placeholder="Twitch"
									icon={<TwitchIcon />}
									value={formData.socials.twitch}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div></div>
					</div>
				</div>
				<div>
					<Button type="submit" variant="primary">
						Save Changes
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default SettingsAbout;
