import { Button, InputGroup, Modal, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { GAMES } from '@/constants';

type PropsType = {
	connectAccount: boolean;
	setConnectAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

type ConnectAccount = {
	region: string;
	username: string;
	platform: string;
};

const ConnectAccount = (props: PropsType) => {
	const { connectAccount, setConnectAccount } = props;

	const [formData, setFormData] = useState<ConnectAccount>({
		region: '',
		username: '',
		platform: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		// console.log(formData);
	};

	return (
		<Modal isModalOpen={connectAccount} setIsModalOpen={setConnectAccount}>
			<Container>
				<div>
					<h6>Apex Legends Connection</h6>
					<span>Please enter your apex Legend username</span>
				</div>

				<form>
					<Select
						type="basic"
						name="region"
						placeholder="Region"
						options={GAMES.map((game) => ({ name: game, value: game }))}
						value={formData.region}
						onChange={handleChange}
					/>
					<InputGroup
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
					/>
					<Select
						type="basic"
						name="platform"
						placeholder="Platform"
						options={GAMES.map((game) => ({ name: game, value: game }))}
						value={formData.platform}
						onChange={handleChange}
					/>
				</form>
				<div>
					<Button type="submit" onClick={handleSubmit} variant="primary">
						Connect account
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default ConnectAccount;
