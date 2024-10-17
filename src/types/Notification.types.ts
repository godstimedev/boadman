export type NotificationPropType = {
	message: string;
	variant?: 'major' | 'minor' | 'text';
	status?: 'info' | 'success' | 'error';
};
