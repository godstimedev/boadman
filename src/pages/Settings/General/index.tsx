import { Button, FileGroup, InputGroup, Select } from '@/ui';
import { Container } from './styles';
import { useState } from 'react';
import { GeneralChangeEventType } from '@/types';
import {
	Avatar1,
	Avatar10,
	Avatar11,
	Avatar12,
	Avatar2,
	Avatar3,
	Avatar4,
	Avatar5,
	Avatar6,
	Avatar7,
	Avatar8,
	Avatar9,
} from '@/assets/images';
import { DAYS, MONTHS, YEARS } from '@/constants';

type FormType = {
	username: string;
	avatar: {
		name: string;
		file: File | null;
	};
	day: string;
	month: string;
	year: string;
	name: string;
	email: string;
	phone: string;
};

const SettingsGeneral = () => {
	const [formData, setFormData] = useState<FormType>({
		username: '',
		avatar: {
			name: '',
			file: null,
		},
		day: '',
		month: '',
		year: '',
		name: '',
		email: '',
		phone: '',
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
					<h5>General Information</h5>

					<div>
						<div className="input-con">
							<InputGroup
								type="text"
								name="username"
								label="Username"
								value={formData.username}
								onChange={handleChange}
							/>

							<div className="dob">
								<Select
									type="basic"
									name="month"
									label="Date of Birth"
									placeholder="Month"
									options={MONTHS.map((month) => ({
										name: month,
										value: month,
									}))}
									value={formData.month}
									onChange={handleChange}
								/>
								<Select
									type="basic"
									name="day"
									placeholder="Day"
									options={DAYS.map((day) => ({
										name: day,
										value: day,
									}))}
									value={formData.day}
									onChange={handleChange}
								/>
								<Select
									type="basic"
									name="year"
									placeholder="Year"
									options={YEARS.map((year) => ({
										name: year,
										value: year,
									}))}
									value={formData.year}
									onChange={handleChange}
								/>
							</div>

							<InputGroup
								type="text"
								name="name"
								label="Name"
								value={formData.name}
								onChange={handleChange}
							/>
							<InputGroup
								type="text"
								name="email"
								label="Email"
								value={formData.email}
								onChange={handleChange}
							/>
							<InputGroup
								type="text"
								name="phone"
								label="Phone"
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>

						<div className="avatar-con">
							<div>
								<h6>Profile avatar</h6>

								<div>
									<div className="img-con">
										{formData.avatar.file ? (
											<img src={URL.createObjectURL(formData.avatar.file)} alt={formData.avatar.name} />
										) : (
											<div className="no-img" />
										)}
									</div>

									<div>
										<FileGroup
											name="avatar"
											value={formData.avatar}
											onChange={handleChange}
											accept="image/png, image/gif, image/jpeg"
											children={
												<button className="avatar-upload">
													{formData.avatar.name ? formData.avatar.name : 'Upload Avatar'}
												</button>
											}
										/>
										<div className="upload-info">
											<p>Upload your own avatar</p>
											<p>100 x 100 pixels minimun</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div>
									<h6>Browse Avatar</h6>
									<span>Collections from your favourite games</span>
								</div>
								<div className="avatar-collection">
									<button type="button">
										<img src={Avatar1} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar2} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar3} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar4} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar5} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar6} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar7} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar8} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar9} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar10} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar11} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar12} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar1} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar2} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar3} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar4} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar5} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar6} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar7} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar8} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar9} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar10} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar11} alt="/" />
									</button>
									<button type="button">
										<img src={Avatar12} alt="/" />
									</button>
								</div>
							</div>
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

export default SettingsGeneral;
