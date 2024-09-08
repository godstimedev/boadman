import { createContext, useState } from 'react';
import { LOCAL_STORAGE_KEYS, AUTH_DEFAULT_STATE } from '../constants';

type AuthType = {
	access: () => string | null;
	refresh: () => string | null;
};
type AuthContextType = {
	auth: AuthType;
	setAuth: React.Dispatch<React.SetStateAction<typeof AUTH_DEFAULT_STATE>>;
};
type AuthProviderProps = {
	children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authValue, setAuthValue] = useState(AUTH_DEFAULT_STATE);

	const authContextState = {
		access: () => authValue.access || localStorage.getItem(LOCAL_STORAGE_KEYS.access_token),
		refresh: () => authValue.refresh || localStorage.getItem(LOCAL_STORAGE_KEYS.refresh_token),
	};

	return <AuthContext.Provider value={{ auth: authContextState, setAuth: setAuthValue }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
