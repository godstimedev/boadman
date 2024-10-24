import { Button, Modal, Select } from '@/ui';
import { Container, SuccessCon } from './styles';
import { GeneralChangeEventType } from '@/types';
import { useState } from 'react';
import { RequestSuccess } from '@/assets/images';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

type PropsType = {
	addFriend: boolean;
	setAddFriend: React.Dispatch<React.SetStateAction<boolean>>;
};

type AddFriend = {
	friends: string;
};

const AddFriend = (props: PropsType) => {
	const { addFriend, setAddFriend } = props;

	const [stage, setStage] = useState(1);

	const [formData, setFormData] = useState<AddFriend>({
		friends: '',
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
		<Modal isModalOpen={addFriend} setIsModalOpen={setAddFriend}>
			{stage !== 2 ? (
				<Container>
					<div>
						<h6>Add new friends</h6>
						<span>Add new people to your friend list</span>
					</div>

					<form autoComplete="off">
						<Select
							type="advanced"
							name="friends"
							placeholder="Search players"
							options={['Boris Wick', 'Boris Wick', 'Boris Wick', 'Boris Wick'].map((player) => ({
								name: player,
								value: player,
							}))}
							value={formData.friends}
							onChange={handleChange}
							allowNewSuggestions={true}
							suggestWhileTyping={true}
							dropdownPosition="bottom"
							dropdownAlign="left"
						/>
					</form>
					<div>
						<Button type="submit" onClick={handleSubmit} variant="primary">
							Add friend
						</Button>
					</div>
				</Container>
			) : (
				<SuccessCon>
					<div className="img-con">
						<img src={RequestSuccess} alt="/" />
					</div>
					<div>
						<h6>Friend Request sent</h6>
						<span>Add flunk god as a new friend</span>
					</div>
					<p>
						You have successfully sent a friend request to multiple players. A notification will be sent
						should they accept or reject your request.
					</p>

					<div>
						<Link to={APP_ROUTES.leaderboard.initial}>
							{' '}
							<Button variant="primary">Back to leaderboard</Button>
						</Link>
					</div>
				</SuccessCon>
			)}
		</Modal>
	);
};

export default AddFriend;
