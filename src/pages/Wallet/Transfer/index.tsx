import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { FormEvent, useState } from 'react';
import TransferSuccess from '../Modals/Transfer';

const Transfer = () => {
	const [formData, setFormData] = useState({
		amount: '',
		account: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// console.log(formData);
	};
	const [blur, setBlur] = useState(false);
	const [transferSuccess, setTransferSuccess] = useState(false);

	return (
		<Container>
			<TransferSuccess setTransferSuccess={setTransferSuccess} transferSuccess={transferSuccess} />

			<form autoComplete="off" onSubmit={handleSubmit}>
				<InputGroup
					type="number"
					name="amount"
					placeholder="Amount"
					icon={<span className="span">Coins</span>}
					value={formData.amount}
					onChange={handleChange}
					iconPosition="right"
					moreInfo={<span className="info">( 1 Coin = 1USD)</span>}
					infoIcon={false}
					onBlur={() => setBlur(false)}
					onFocus={() => setBlur(true)}
				/>
				<InputGroup
					type="number"
					name="account"
					placeholder="Account"
					value={formData.account}
					onChange={handleChange}
					iconPosition="right"
				/>

				<div>
					<div>
						<span>Total cost</span>
						<p>= {!blur ? formData.amount || 0 : 0} coins</p>
						<span>You’ll transfer {!blur ? formData.amount || 0 : 0} USD</span>
					</div>

					<Button onClick={() => setTransferSuccess(true)} type="submit" variant="primary">
						Transfer
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default Transfer;
