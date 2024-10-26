import { RequestSuccess } from '@/assets/images';
import { Button, Modal } from '@/ui';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

type PropsType = {
	transferSuccess: boolean;
	setTransferSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const TransferSuccess = (props: PropsType) => {
	const { transferSuccess, setTransferSuccess } = props;

	const navigate = useNavigate();
	return (
		<Modal isModalOpen={transferSuccess} setIsModalOpen={setTransferSuccess}>
			<Container>
				<div className="img-con">
					<img src={RequestSuccess} alt="/" />
				</div>
				<div>
					<h6>Congratulations</h6>
					<span>Transfer is successful</span>
				</div>
				<p>
					You have successfully transferred 2300 coins to the team Rabbit rush. This is deducted from
					your main account and deposited into the team’s wallet.
				</p>

				<div>
					<Button
						onClick={() => {
							setTransferSuccess(false);
							navigate(APP_ROUTES.matches.initial);
						}}
						variant="primary"
						type="button"
					>
						Back to match page
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default TransferSuccess;
