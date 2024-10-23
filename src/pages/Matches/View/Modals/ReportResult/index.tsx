import { Button, InputGroup, Modal, TextArea } from '@/ui';
import { Container, SuccessCon } from './styles';
import { UploadIcon } from '@/assets/svgs';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { RequestSuccess } from '@/assets/images';
import { APP_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

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

	const [stage, setStage] = useState(1);

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
		// console.log(formData);
		setStage(2);
	};

	return (
		<Modal isModalOpen={report} setIsModalOpen={setReport}>
			{stage !== 2 ? (
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
			) : (
				<SuccessCon>
					<div className="img-con">
						<img src={RequestSuccess} alt="/" />
					</div>
					<div>
						<h6>Congratulations</h6>
						<span>Match result has been submitted</span>
					</div>
					<p>
						You have successfully submitted the result of valorant match with Basmin. If result is
						falsified, you lose all winning and get a warning which can result in a ban.
					</p>

					<div>
						<Link to={APP_ROUTES.matches.initial}>
							<Button variant="primary">Back to match page</Button>
						</Link>
					</div>
				</SuccessCon>
			)}
		</Modal>
	);
};

export default ReportResult;
