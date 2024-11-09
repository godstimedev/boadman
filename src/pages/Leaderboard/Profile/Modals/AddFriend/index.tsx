import { RequestSuccess } from '@/assets/images';
import { Container, SuccessCon } from './styles';
import { Button, Modal } from '@/ui';
import { APP_ROUTES } from '@/constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type PropsType = {
	isAddFriend: boolean;
	setIsAddFriend: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddFriend = (props: PropsType) => {
	const { isAddFriend, setIsAddFriend } = props;
	const navigate = useNavigate();

	const [stage, setStage] = useState(1);
	return (
		<Modal isModalOpen={isAddFriend} setIsModalOpen={setIsAddFriend}>
			{stage !== 2 ? (
				<Container>
					<div>
						<h6>Add friend</h6>
						<span>Add flunk god as a new friend</span>
					</div>
					<p>
						By inviting flunk god to be your friend, You can sent instant SMS, Play games together and
						discover amazing opportunities. Flunk god can refuse your invitation. Do you wish to proceed
						with the invite?
					</p>

					<div>
						<Button onClick={() => setStage(2)} variant="primary">
							Send friend invite
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
						You have successfully sent a friend request to flunk god. A notification will be sent should
						he/she accept or reject your request.
					</p>

					<div>
						<Button
							onClick={() => {
								navigate(APP_ROUTES.leaderboard.initial);
							}}
							variant="primary"
						>
							Back to leaderboard
						</Button>
					</div>
				</SuccessCon>
			)}
		</Modal>
	);
};

export default AddFriend;
