import { useState } from 'react';
import { Container } from './styles';
import { Button } from '@/ui';
import ConnectAccount from '@/components/Modals/ConnectAccount';

type PropsType = {
	title: string;
	image: string;
};

const GameConnect = (props: PropsType) => {
	const { title, image } = props;

	const [addGame, setAddGame] = useState(false);
	return (
		<Container>
			<ConnectAccount game={title} connectAccount={addGame} setConnectAccount={setAddGame} />

			<div>
				<div>
					<img src={image} alt="/" />
					<div>
						<h6>{title}</h6>
						<p>One-click sign in, not shown on your profile</p>
					</div>
				</div>

				<Button type="button" variant="outline" onClick={() => setAddGame(true)}>
					Connect
				</Button>
			</div>
		</Container>
	);
};

export default GameConnect;
