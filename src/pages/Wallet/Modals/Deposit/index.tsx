import { Button, DateTime, InputGroup, Modal } from '@/ui';
import { Container, SuccessCon } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { CreditCard, PayPal } from '@/assets/svgs';
import { RequestSuccess } from '@/assets/images';
import { APP_ROUTES } from '@/constants';
import { useNavigate } from 'react-router-dom';

type PropsType = {
	deposit: boolean;
	setDeposit: React.Dispatch<React.SetStateAction<boolean>>;
};

type Deposit = {
	amount: string;
	card_number: string;
	expiry_date: Date | null;
	cvv: string;
};

const Deposit = (props: PropsType) => {
	const { deposit, setDeposit } = props;

	const [stage, setStage] = useState(1);

	const [formData, setFormData] = useState<Deposit>({
		amount: '',
		card_number: '',
		expiry_date: null,
		cvv: '',
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

	const navigate = useNavigate();

	return (
		<Modal isModalOpen={deposit} setIsModalOpen={setDeposit}>
			{stage !== 2 ? (
				<Container>
					<div>
						<h6>Deposit funds</h6>
						<span>Deposit funds into your wallet </span>
					</div>

					<form autoComplete="off">
						<div>
							<button type="button">
								<CreditCard />
								<span>With Card</span>
							</button>
							<button type="button">
								<PayPal />
								<span>With Paypal</span>
							</button>
						</div>
						<InputGroup
							type="number"
							name="amount"
							placeholder="Amount"
							value={formData.amount}
							onChange={handleChange}
						/>
						<InputGroup
							type="number"
							name="card_number"
							placeholder="Card number"
							value={formData.card_number}
							onChange={handleChange}
						/>

						<div>
							<DateTime
								name="expiry_date"
								placeholder="Expiration Date"
								value={formData.expiry_date}
								onChange={(date: Date | null) => setFormData((prev) => ({ ...prev, expiry_date: date }))}
								showDateOnly
							/>
							<InputGroup
								type="number"
								name="ccv"
								placeholder="CVV"
								value={formData.cvv}
								onChange={handleChange}
							/>
						</div>
					</form>
					<div>
						<Button type="submit" onClick={handleSubmit} variant="primary">
							Deposit
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
						<span>Deposit successful</span>
					</div>
					<p>
						You have successfully deposited $500 which can be converted in 2300 coins. This can be used
						for individual, teams and challenges.
					</p>

					<div>
						<Button
							onClick={() => {
								setDeposit(false);
								navigate(APP_ROUTES.wallet.initial);
								setStage(1);
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

export default Deposit;
