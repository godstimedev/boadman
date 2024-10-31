import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { ConnectAccount, GameConnect } from '@/components';
import { CyberPunk } from '@/assets/images';

type FormType = {
	game_name: string;
};

const SettingsIntegrations = () => {
	const [addGame, setAddGame] = useState(false);
	const [formData, setFormData] = useState<FormType>({
		game_name: '',
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
			<ConnectAccount connectAccount={addGame} setConnectAccount={setAddGame} />

			<form onSubmit={handleSubmit} autoComplete="off">
				<div>
					<h5>Integrations</h5>

					<div className="input-con">
						<h6>Connect new game</h6>

						<div>
							<InputGroup
								type="text"
								name="game_name"
								label="Game name"
								value={formData.game_name}
								onChange={handleChange}
							/>

							<Button type="button" size="large" onClick={() => setAddGame(true)}>
								Add game
							</Button>
						</div>
					</div>

					<div>
						<h6>Games connected</h6>

						<div>
							<GameConnect title="League of legends" image={CyberPunk} />
							<GameConnect title="Call of duty" image={CyberPunk} />
							<GameConnect title="Apex Legends" image={CyberPunk} />
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

export default SettingsIntegrations;
