import { StreamType } from './StreamType';
import { Container } from './styles';

const GameStream = (props: StreamType) => {
	const { image, avatar, username, game, views } = props;
	return (
		<Container>
			<div>
				<img src={image} alt="/" />
			</div>

			<div>
				<img src={avatar} alt="/" />

				<div>
					<p>{username}</p>
					<div>
						<span>{game} .</span>
						<span>{views} views</span>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default GameStream;

{
	/* <iframe
	src="https://player.twitch.tv/?channel=monstercat"
	height="100%"
	width="100%"
	frameBorder="0"
	scrolling="no"
	allowFullScreen={true}
></iframe> */
}
