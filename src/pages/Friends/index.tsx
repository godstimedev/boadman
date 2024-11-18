import { FriendCard } from '@/components';
import { Container } from './styles';
import { Button, Pagination } from '@/ui';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { useState } from 'react';
import AddFriend from './Modals/AddFriend';

const Friends = () => {
	const [addFriend, setAddFriend] = useState(false);
	return (
		<Container>
			{/*      */}

			<AddFriend addFriend={addFriend} setAddFriend={setAddFriend} />

			<div className="head">
				<h6>Friends</h6>

				<Button onClick={() => setAddFriend(true)} variant="primary" size="small">
					Add new
				</Button>
			</div>

			<div className="friends-con">
				{Array.from({ length: 12 }).map((_, i) => (
					<Link key={i} to={APP_ROUTES.friends.use_overview(i.toString())}>
						{' '}
						<FriendCard />
					</Link>
				))}
			</div>

			<div className="ml-auto">
				<Pagination maxPage={3} loading={false} itemsPerPageOptions={[10, 14, 16]} />
			</div>
		</Container>
	);
};

export default Friends;
