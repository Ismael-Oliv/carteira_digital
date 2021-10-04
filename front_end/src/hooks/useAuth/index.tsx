import {
  createContext,
  useCallback,
  useState,
  useContext,
  HTMLAttributes,
} from 'react';

import { api } from '../../services/api';

interface User {
  id: string;
  login: string;
  nome: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

type IAuthProviderType = HTMLAttributes<Element>;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: IAuthProviderType) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CarteiraDigital:token');
    const user = localStorage.getItem('@CarteiraDigital:user');

    if (token && user) {
      api.defaults.headers!.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('@CarteiraDigital:token');
    localStorage.removeItem('@CarteiraDigital:user');

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post<any>('/user/login', {
      login,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@CarteiraDigital:token', token);
    localStorage.setItem('@CarteiraDigital:user', JSON.stringify(user));

    api.defaults.headers!.authorization = `${token}`;

    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@CarteiraDigital:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be whithin a AuthProvider');
  }

  const { signIn, signOut, updateUser, user } = context;

  return { signIn, signOut, updateUser, user };
}
