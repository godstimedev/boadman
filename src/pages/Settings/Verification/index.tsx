import { Button, FileGroup, InputGroup, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { Camera, NotVerified, SampleId1, SampleId2, SampleId3 } from '@/assets/svgs';

type FormType = {
	verification_number: string;
	verification_type: string;
	front_image: {
		name: string;
		file: File | null;
	};
	back_image: {
		name: string;
		file: File | null;
	};
};

const SettingsVerification = () => {
	const [deleteFile, setDeleteFile] = useState(false);
	const [formData, setFormData] = useState<FormType>({
		verification_number: '',
		verification_type: '',
		front_image: {
			name: '',
			file: null,
		},
		back_image: {
			name: '',
			file: null,
		},
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
					<div>
						<div>
							<h5> Identity Verification</h5>
							<span>Submit your passport details to verify your identity on Boardman</span>
						</div>

						<div>
							<NotVerified />
							<span>NOT VERIFIED</span>
						</div>
					</div>

					<div className="input-con">
						<InputGroup
							type="number"
							name="verification_number"
							label="ID or Passport number"
							value={formData.verification_number}
							onChange={handleChange}
						/>

						<Select
							type="basic"
							name="verification_type"
							label="Select verification type"
							value={formData.verification_type}
							onChange={handleChange}
							options={['ID', 'Passport'].map((item) => ({
								name: item,
								value: item,
							}))}
						/>
					</div>

					<div className="verification-upload-con">
						<h6>Upload Image of ID</h6>

						<div className="samples">
							<div>
								<SampleId1 />
								<p>Great</p>
							</div>
							<div>
								<SampleId2 />
								<p>Not Cut</p>
							</div>
							<div>
								<SampleId3 />
								<p>Not Blurry</p>
							</div>
						</div>

						<ul>
							<li>Readable well-lit coloured page</li>
							<li>Original file, Unedited documents</li>
							<li>Place against a single coloured background</li>
							<li>No black and white documents</li>
							<li>No expired documents</li>
						</ul>

						<div className="verification-upload">
							<h6>Recommended size up to 10MB in Jpg, Jpeg and Png</h6>

							<div>
								<div className="img-con">
									{formData.front_image.file ? (
										<>
											<img
												src={URL.createObjectURL(formData.front_image.file)}
												alt={formData.front_image.name}
											/>
											{/* <button onClick={() => setDeleteFile(!deleteFile)}>X</button> */}
										</>
									) : (
										<FileGroup
											name="front_image"
											value={formData.front_image}
											onChange={handleChange}
											deleteFile={deleteFile}
											children={
												<button className={formData.front_image.file ? 'no-img' : 'no-img'}>
													<Camera />
													<p>upload front image</p>
												</button>
											}
										/>
									)}
								</div>
								<div className="img-con">
									{formData.back_image.file ? (
										<>
											<img
												src={URL.createObjectURL(formData.back_image.file)}
												alt={formData.back_image.name}
											/>
											<button onClick={() => setDeleteFile(!deleteFile)}>X</button>
										</>
									) : (
										<FileGroup
											name="back_image"
											value={formData.back_image}
											onChange={handleChange}
											deleteFile={deleteFile}
											children={
												<button className={formData.back_image.file ? 'no-img' : 'no-img'}>
													<Camera />
													<p>upload back image</p>
												</button>
											}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<Button type="submit" variant="primary" size="large">
						Upload
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default SettingsVerification;
