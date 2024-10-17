import { NotificationInfo } from '../../assets/svgs';
import { NotificationPropType } from '../../types';
import { MajorContainer, MinorContainer, TextContainer } from './styles';

const Notification = ({ status = 'info', variant = 'major', message }: NotificationPropType) => {
	return variant === 'major' ? (
		<MajorContainer $status={status}>
			<NotificationInfo />
			<p>{message}</p>
		</MajorContainer>
	) : variant === 'minor' ? (
		<MinorContainer>{message}</MinorContainer>
	) : (
		<TextContainer>
			<NotificationInfo />
			<p>{message}</p>
		</TextContainer>
	);
};

export default Notification;
