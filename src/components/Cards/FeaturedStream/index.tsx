import { StreamType } from './StreamType';
import { Container } from './styles';

const FeaturedStream = (props: StreamType) => {
	const { image, avatar, username, game, views, key } = props;
	return (
		<Container key={key}>
			<img src={image} alt="/" />

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

export default FeaturedStream;

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
