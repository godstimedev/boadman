import { Container } from './styles';
import { Button } from '@/ui';

type PropsType = {
	title: string;
	image: string;
};

const GameConnect = (props: PropsType) => {
	const { title, image } = props;
	return (
		<Container>
			<div>
				<img src={image} alt="/" />
				<div>
					<h6>{title}</h6>
					<p>One-click sign in, not shown on your profile</p>
				</div>
			</div>

			<Button variant="outline">Connect</Button>
		</Container>
	);
};

export default GameConnect;
