import { DashboardHeader, FriendCard } from '@/components';
import { Container } from './styles';
import { Button } from '@/ui';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';
import { useState } from 'react';
import AddFriend from './Modals/AddFriend';

const Friends = () => {
	const [addFriend, setAddFriend] = useState(false);
	return (
		<Container>
			<DashboardHeader />

			<AddFriend addFriend={addFriend} setAddFriend={setAddFriend} />

			<div className="head">
				<h6>Friends</h6>

				<Button onClick={() => setAddFriend(true)} variant="primary" size="small">
					Add new
				</Button>
			</div>
			<div className="friends">
				{Array.from({ length: 12 }).map((_, i) => (
					<Link key={i} to={APP_ROUTES.friends.use_overview(i.toString())}>
						{' '}
						<FriendCard />
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Friends;
