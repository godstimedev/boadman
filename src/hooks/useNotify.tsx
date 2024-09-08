import { toast, ToastOptions } from 'react-toastify';
import { Notification } from '../ui';
import { NotificationPropType } from '../types';

type NotifyType = NotificationPropType & {
	toastOptions?: ToastOptions;
};

const useNotify = () => {
	const notify = (args: NotifyType) => {
		const { message = '', status = 'info', variant = 'major', toastOptions = {} } = args;

		toast(<Notification message={message} variant={variant} status={status} />, toastOptions);
	};

	return notify;
};

export default useNotify;
