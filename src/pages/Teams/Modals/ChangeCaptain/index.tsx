import { Button, Modal, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';

type PropsType = {
	changeCaptain: boolean;
	setChangeCaptain: React.Dispatch<React.SetStateAction<boolean>>;
};

type ChangeCaptain = {
	current: string;
	new: string;
};

const ChangeCaptain = (props: PropsType) => {
	const { changeCaptain, setChangeCaptain } = props;

	const [formData, setFormData] = useState<ChangeCaptain>({
		current: '',
		new: '',
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
		<Modal isModalOpen={changeCaptain} setIsModalOpen={setChangeCaptain}>
			<Container>
				<div>
					<h6>Change captain</h6>
					<span>Change the captain for Rabbit Rush</span>
				</div>

				<form autoComplete="off">
					<Select
						type="basic"
						name="current"
						placeholder="Current Captain"
						options={['Alldot', 'Emma', 'Boris Wick'].map((player) => ({ name: player, value: player }))}
						value={formData.current}
						onChange={handleChange}
					/>
					<Select
						type="basic"
						name="new"
						placeholder="New Captain"
						options={['Alldot', 'Emma', 'Boris Wick'].map((player) => ({ name: player, value: player }))}
						value={formData.new}
						onChange={handleChange}
					/>
				</form>
				<div>
					<Button type="submit" onClick={handleSubmit} variant="primary">
						Change captain
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default ChangeCaptain;
