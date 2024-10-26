import { Button, InputGroup, Select } from '@/ui';
import { Container } from './styles';
import { GeneralChangeEventType } from '@/types';
import { FormEvent, useState } from 'react';
import { MasterCard } from '@/assets/svgs';
import { maskAccountNumber } from '@/utilities';
import WithdrawSuccess from '../Modals/Withdraw';

const Withdraw = () => {
	const [formData, setFormData] = useState({
		amount: '',
		account: '5656556554343456',
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
	const [withdrawSuccess, setWithdrawSuccess] = useState(false);

	return (
		<Container>
			<WithdrawSuccess setWithdrawSuccess={setWithdrawSuccess} withdrawSuccess={withdrawSuccess} />
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
				<Select
					name="account"
					type="basic"
					value={maskAccountNumber(formData.account && formData.account)}
					onChange={handleChange}
					options={[
						{
							value: '5656556554343456',
							icon: <MasterCard />,
						},
						{
							value: '5656556554347765',
							icon: <MasterCard />,
						},
						{
							value: '5656556554344456',
							icon: <MasterCard />,
						},
					].map((account) => ({
						icon: account.icon,
						name: maskAccountNumber(account.value),
						value: account.value,
					}))}
					icon={<MasterCard />}
					dropdownAlign="left"
				/>

				<div>
					<div>
						<span>Total cost</span>
						<p>= {!blur ? formData.amount || 0 : 0} coins</p>
						<span>You’ll receive {!blur ? formData.amount || 0 : 0} USD</span>
					</div>

					<Button onClick={() => setWithdrawSuccess(true)} type="submit" variant="primary">
						Withdraw
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default Withdraw;
