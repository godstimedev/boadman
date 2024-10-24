import { Button, Modal, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';

type PropsType = {
	createRoster: boolean;
	setCreateRoster: React.Dispatch<React.SetStateAction<boolean>>;
};

type CreateRoster = {
	players: string;
};

const CreateRoster = (props: PropsType) => {
	const { createRoster, setCreateRoster } = props;

	const [formData, setFormData] = useState<CreateRoster>({
		players: '',
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
		<Modal isModalOpen={createRoster} setIsModalOpen={setCreateRoster}>
			<Container>
				<div>
					<h6>Set 5 v 5 Loner epic Roster</h6>
					<span>Select team member to participate in Loner Epic game</span>
				</div>

				<form autoComplete="off">
					<Select
						type="advanced"
						name="players"
						placeholder="Add players"
						options={[].map((player) => ({ name: player, value: player }))}
						value={formData.players}
						onChange={handleChange}
						allowNewSuggestions={true}
						suggestWhileTyping={true}
						dropdownPosition="top"
						dropdownAlign="left"
					/>
				</form>
				<div>
					<Button type="submit" onClick={handleSubmit} variant="primary">
						Create roster
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default CreateRoster;
