import { Button, InputGroup, Modal, TextArea } from '@/ui';
import { Container } from './styles';
import { UploadIcon } from '@/assets/svgs';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';

type PropsType = {
	report: boolean;
	setReport: React.Dispatch<React.SetStateAction<boolean>>;
};

type ReportResult = {
	player_one: string;
	player_two: string;
	comments: string;
	stream_link: string;
};

const ReportResult = (props: PropsType) => {
	const { report, setReport } = props;

	const [formData, setFormData] = useState<ReportResult>({
		player_one: '',
		player_two: '',

		comments: '',
		stream_link: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	return (
		<Modal isModalOpen={report} setIsModalOpen={setReport}>
			<Container>
				<div>
					<h6>Report match result</h6>
					<span>Please report the result of this match and upload evidence</span>
				</div>
				<div className="buttons">
					<button>I won</button>
					<button>I lost</button>
					<button>
						<UploadIcon /> Upload Evidence
					</button>
				</div>

				<hr />

				<form>
					<div>
						<InputGroup
							type="text"
							name="player_one"
							placeholder="Me"
							value={formData.player_one}
							onChange={handleChange}
						/>
						<p>:</p>
						<InputGroup
							type="text"
							name="player_two"
							placeholder="Basmin"
							value={formData.player_two}
							onChange={handleChange}
						/>
					</div>

					<div>
						<TextArea
							name="comments"
							placeholder="Comments"
							value={formData.comments}
							onChange={handleChange}
						/>
					</div>

					<div>
						<InputGroup
							type="url"
							name="stream_link"
							placeholder="Stream link"
							value={formData.stream_link}
							onChange={handleChange}
							moreInfo={'Add in link from twitch, youtube, steam, etc.'}
						/>
					</div>
				</form>
				<div>
					<Button type="submit" onClick={handleSubmit} variant="primary">
						Report Result
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default ReportResult;
