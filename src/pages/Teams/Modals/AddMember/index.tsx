import { Button, Modal, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';

type PropsType = {
	addMembers: boolean;
	setAddMembers: React.Dispatch<React.SetStateAction<boolean>>;
};

type AddMembers = {
	members: string;
};

const AddMembers = (props: PropsType) => {
	const { addMembers, setAddMembers } = props;

	const [formData, setFormData] = useState<AddMembers>({
		members: '',
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
		<Modal isModalOpen={addMembers} setIsModalOpen={setAddMembers}>
			<Container>
				<div>
					<h6>Add new member</h6>
					<span>Add new member to team Rabbit Rush</span>
				</div>

				<form autoComplete="off">
					<Select
						type="advanced"
						name="members"
						placeholder="Search players"
						options={['Emma', 'Alldot', 'Godstime', 'Boris Wick'].map((player) => ({
							name: player,
							value: player,
						}))}
						value={formData.members}
						onChange={handleChange}
						allowNewSuggestions={false}
						suggestWhileTyping={true}
						dropdownPosition="bottom"
						dropdownAlign="left"
					/>
				</form>
				<div>
					<Button type="submit" onClick={handleSubmit} variant="primary">
						Invite member
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default AddMembers;
