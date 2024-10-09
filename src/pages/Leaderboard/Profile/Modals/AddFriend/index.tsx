import { Container } from './styles';
import { Button, Modal } from '@/ui';

type PropsType = {
	isAddFriend: boolean;
	setIsAddFriend: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddFriend = (props: PropsType) => {
	const { isAddFriend, setIsAddFriend } = props;
	return (
		<Modal isModalOpen={isAddFriend} setIsModalOpen={setIsAddFriend}>
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
					<Button variant="primary">Send friend invite</Button>
				</div>
			</Container>
		</Modal>
	);
};

export default AddFriend;
