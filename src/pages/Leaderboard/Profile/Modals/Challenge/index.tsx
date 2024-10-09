import { Modal } from '@/ui';
import { useState } from 'react';
import FormOne from './Forms/FormOne';
import FormTwo from './Forms/FormTwo';
import { CreateChallenge, GeneralChangeEventType } from '@/types';

export type FormType = {
	formData: CreateChallenge;
	handleChange: GeneralChangeEventType;
	setStage: React.Dispatch<React.SetStateAction<number>>;
};

type PropsType = {
	createChallenge: boolean;
	setCreateChallenge: React.Dispatch<React.SetStateAction<boolean>>;
};

const Challenge = (props: PropsType) => {
	const { createChallenge, setCreateChallenge } = props;

	const [stage, setStage] = useState(1);
	const [formData, setFormData] = useState<CreateChallenge>({
		game: '',
		game_type: '',
		game_name: '',
		date_time: '',
		wager_amount: '',
		player: '',
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
		<Modal isModalOpen={createChallenge} setIsModalOpen={setCreateChallenge}>
			{stage === 1 ? (
				<FormOne formData={formData} handleChange={handleChange} setStage={setStage} />
			) : stage === 2 ? (
				<FormTwo formData={formData} handleChange={handleChange} setStage={setStage} />
			) : null}
		</Modal>
	);
};

export default Challenge;
