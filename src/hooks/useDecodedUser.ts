import { jwtDecode } from 'jwt-decode';
import useAuth from './useAuth';

type JwtPayloadType = {
	user_id: string;
	email: string;
	roles: string[];
};

const useDecodedUser = () => {
	const { auth } = useAuth();
	const token = auth?.access() || '';

	const user = token ? jwtDecode<JwtPayloadType>(token) : undefined;
	const isAdmin = user ? user?.roles?.includes('ADMIN') : false;

	return { user, isAdmin };
};

export default useDecodedUser;
