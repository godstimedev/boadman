import { Modal } from '@/ui';
import { useState } from 'react';
import FormOne from './Forms/FormOne';
import FormTwo from './Forms/FormTwo';
import { CreateGameType, GeneralChangeEventType } from '@/types';
import { Container } from './styles';

export type FormType = {
	formData: CreateGameType;
	handleChange: GeneralChangeEventType;
	setStage: React.Dispatch<React.SetStateAction<number>>;
	setFormData: React.Dispatch<React.SetStateAction<CreateGameType>>;
};

type PropsType = {
	gameModal: boolean;
	setGameModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateGame = (props: PropsType) => {
	const { gameModal, setGameModal } = props;

	const [stage, setStage] = useState(1);
	const [formData, setFormData] = useState<CreateGameType>({
		game: '',
		game_type: '',
		game_name: '',
		date_time: null,
		wager_amount: '',
		time_limit: '',
		platform: '',
		format: '',
		mode: '',
		rounds: '',
		map: '',
		banned_weapons: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Modal isModalOpen={gameModal} setIsModalOpen={setGameModal}>
			<Container>
				{stage === 1 ? (
					<FormOne
						formData={formData}
						setFormData={setFormData}
						handleChange={handleChange}
						setStage={setStage}
					/>
				) : stage === 2 ? (
					<FormTwo
						formData={formData}
						handleChange={handleChange}
						setFormData={setFormData}
						setStage={setStage}
					/>
				) : null}
			</Container>
		</Modal>
	);
};

export default CreateGame;
