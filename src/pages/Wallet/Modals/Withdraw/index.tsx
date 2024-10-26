import { RequestSuccess } from '@/assets/images';
import { Button, Modal } from '@/ui';
import { Container, SuccessCon } from './styles';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { APP_ROUTES } from '@/constants';

type PropsType = {
	withdrawSuccess: boolean;
	setWithdrawSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const WithdrawSuccess = (props: PropsType) => {
	const { withdrawSuccess, setWithdrawSuccess } = props;

	const [stage, setStage] = useState(1);

	// const navigate = useNavigate();
	return (
		<Modal isModalOpen={withdrawSuccess} setIsModalOpen={setWithdrawSuccess}>
			{stage !== 2 ? (
				<Container>
					<div>
						<h6>Confirm Withdrawal</h6>
						<span>Confirm amount to withdraw from your wallet</span>
					</div>
					<div>
						<div>
							<span>Amount</span>
							<p>
								60 coins <span>~ $60</span>
							</p>
							<span>You will receive 60 USD</span>
						</div>

						<div>
							<div>
								<span>To</span>
								<p>Midwestern Bank</p>
							</div>
							<p>Joel Henderson</p>
							<p>2344522492</p>
						</div>
					</div>

					<div>
						<Button onClick={() => setStage(2)} variant="primary">
							Make withdrawal
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
						<span>Withdrawal Successful</span>
					</div>
					<p>
						You have successfully withdrawn 2300 coins which results to $500. The money will be deposited
						into your account within 2 business days.
					</p>

					<div>
						<Button
							onClick={() => {
								setWithdrawSuccess(false);
								// navigate(APP_ROUTES.wallet.initial);
							}}
							variant="primary"
							type="button"
						>
							Back to Wallet
						</Button>
					</div>
				</SuccessCon>
			)}
		</Modal>
	);
};

export default WithdrawSuccess;
