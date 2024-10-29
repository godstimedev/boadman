import { GeneralChangeEventType } from '@/types';
import { Container } from './styles';
import { useState } from 'react';
import { Button, InputGroup } from '@/ui';

type FormType = {
	old_password: string;
	new_password: string;
	confirm_password: string;
};
const SettingsChangePassword = () => {
	const [formData, setFormData] = useState<FormType>({
		old_password: '',
		new_password: '',
		confirm_password: '',
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
					<h5>Password Change</h5>

					<div>
						<div className="input-con">
							<InputGroup
								type="password"
								name="old_password"
								label="Old Password"
								value={formData.old_password}
								onChange={handleChange}
							/>

							<InputGroup
								type="password"
								name="new_password"
								label="New Password"
								value={formData.new_password}
								onChange={handleChange}
							/>
							<InputGroup
								type="password"
								name="confirm_password"
								label="Password Confirmation"
								value={formData.confirm_password}
								onChange={handleChange}
							/>
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

export default SettingsChangePassword;
