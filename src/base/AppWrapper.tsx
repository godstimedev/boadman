import { AuthProvider } from '../context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>{children}</AuthProvider>
		</QueryClientProvider>
	);
};

export default AppWrapper;
