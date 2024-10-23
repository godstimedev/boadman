import { Button, InputGroup, Modal, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';

type PropsType = {
	createTeam: boolean;
	setCreateTeam: React.Dispatch<React.SetStateAction<boolean>>;
};

type CreateTeam = {
	name: string;
	tag: string;
	players: string;
};

const CreateTeam = (props: PropsType) => {
	const { createTeam, setCreateTeam } = props;

	const [formData, setFormData] = useState<CreateTeam>({
		name: '',
		tag: '',
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
		<Modal isModalOpen={createTeam} setIsModalOpen={setCreateTeam}>
			<Container>
				<div>
					<h6>Create team</h6>
					<span>Start a journey with your friends today</span>
				</div>

				<form autoComplete="off">
					<InputGroup
						type="text"
						name="name"
						placeholder="Team Name"
						value={formData.name}
						onChange={handleChange}
					/>
					<InputGroup
						type="text"
						name="tag"
						placeholder="Team Tag"
						value={formData.tag}
						onChange={handleChange}
					/>
					<Select
						suggestWhileTyping={true}
						name="players"
						value={formData.players}
						onChange={handleChange}
						options={[].map((player) => ({ name: player, value: player }))}
						placeholder="Add Players"
						dropdownPosition="top"
						dropdownAlign="left"
						type="advanced"
						// suggestionTitle="Click player to add:"
						// initialSuggestions={['Flunk_God', 'Boris Winks', 'Alldot', 'Emma']}
						allowNewSuggestions={true}
					/>
				</form>
				<div>
					<Button type="submit" onClick={handleSubmit} variant="primary">
						Create team
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default CreateTeam;
