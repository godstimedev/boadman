import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { GameConnect } from '@/components';
import { CyberPunk } from '@/assets/images';

type FormType = {
	game_name: string[];
};

const SettingsIntegrations = () => {
	const [formData, setFormData] = useState<FormType>({
		game_name: ['League of legends', 'Call of duty', 'Apex Legends'],
	});
	const [inputValue, setInputValue] = useState('');

	const handleChange: GeneralChangeEventType = (event) => {
		// name = event?.target.name || name || '';
		// value = event?.target.value || value || '';

		setInputValue(event?.target.value || '');
	};

	const handleAddGame = () => {
		if (inputValue.trim() !== '') {
			setFormData((prev) => ({
				...prev,
				game_name: [...prev.game_name, inputValue.trim()],
			}));
			setInputValue('');
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(formData);
	};

	return (
		<Container>
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
								value={inputValue}
								onChange={handleChange}
							/>

							<Button type="button" size="large" onClick={handleAddGame}>
								Add game
							</Button>
						</div>
					</div>

					<div>
						<h6>Games connected</h6>

						<div>
							{formData.game_name.map((game, index) => (
								<GameConnect key={index} title={game} image={CyberPunk} />
							))}
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
