import { GameStream } from '@/components';
import { Container } from './styles';
import { StreamAvatar, GameStream as GameStreamImage } from '@/assets/images';
import { Pagination } from '@/ui';

const ProfileStream = () => {
	return (
		<Container>
			<div className="streams">
				{featuredStreamsList.map((stream, index) => (
					<GameStream
						avatar={stream.avatar}
						game={stream.game}
						image={stream.image}
						key={index}
						username={stream.username}
						views={stream.views}
					/>
				))}
			</div>

			<div className="ml-auto">
				<Pagination maxPage={3} loading={false} itemsPerPageOptions={[10, 14, 16]} />
			</div>
		</Container>
	);
};

export default ProfileStream;

const featuredStreamsList = [
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
	{
		image: GameStreamImage,
		avatar: StreamAvatar,
		username: 'Flunk_god',
		game: 'Fortnite',
		views: '11.2k',
	},
];
