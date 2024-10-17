import { Button, Modal } from '@/ui';
import { Container } from './styles';
import { UploadIcon } from '@/assets/svgs';

type PropsType = {
	report: boolean;
	setReport: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReportResult = (props: PropsType) => {
	const { report, setReport } = props;
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
					<div></div>
				</form>

				<div>
					<Button variant="primary">Report Result</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default ReportResult;
