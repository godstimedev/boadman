import { Button, Modal } from '@/ui';
import { Container } from './styles';
import { RequestSuccess } from '@/assets/images';

type PropsType = {
	isInviteFriend: boolean;
	setIsInviteFriend: React.Dispatch<React.SetStateAction<boolean>>;
};

const InviteFriend = (props: PropsType) => {
	const { isInviteFriend, setIsInviteFriend } = props;
	return (
		<Modal isModalOpen={isInviteFriend} setIsModalOpen={setIsInviteFriend}>
			<Container>
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
					<Button onClick={() => setIsInviteFriend(false)} variant="primary">
						Back to leaderboard
					</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default InviteFriend;
