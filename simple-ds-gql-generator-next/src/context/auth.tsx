'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Keycloak, { KeycloakInstance } from 'keycloak-js';

// Интерфейс пользователя
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Интерфейс контекста
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  login: () => void;
  logout: () => void;
  register: (login: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [keycloak, setKeycloak] = useState<KeycloakInstance | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Initializing Keycloak...');
      const keycloakConfig = {
        url: 'http://localhost:8180',
        realm: 'todos',
        clientId: 'todos'
      };

      console.log('Keycloak config:', keycloakConfig);

      const keycloakInstance = new Keycloak(keycloakConfig);
      setKeycloak(keycloakInstance);
      
      const initKeycloak = async () => {
        try {
          console.log('Starting Keycloak initialization...');
          const auth = await keycloakInstance.init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256',
            enableLogging: true,
            checkLoginIframe: false
          });
          
          console.log('Keycloak initialized successfully:', auth);
          setIsAuthenticated(auth);

          if (auth && keycloakInstance.tokenParsed) {
            const user: User = {
              id: keycloakInstance.subject || '',
              name: keycloakInstance.tokenParsed.preferred_username || '',
              email: keycloakInstance.tokenParsed.email || '',
              role: keycloakInstance.tokenParsed.realm_access?.roles?.[0] || 'user'
            };
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          keycloakInstance.onAuthSuccess = () => {
            console.log('Auth success');
            setIsAuthenticated(true);
            if (keycloakInstance.tokenParsed) {
              const user: User = {
                id: keycloakInstance.subject || '',
                name: keycloakInstance.tokenParsed.preferred_username || '',
                email: keycloakInstance.tokenParsed.email || '',
                role: keycloakInstance.tokenParsed.realm_access?.roles?.[0] || 'user'
              };
              setCurrentUser(user);
              localStorage.setItem('currentUser', JSON.stringify(user));

              // После успешной аутентификации создаем Person и Volonteer
              createPersonAndVolonteer(user.name);
            }
          };

          keycloakInstance.onAuthError = () => {
            console.log('Auth error');
            setIsAuthenticated(false);
            setCurrentUser(null);
            localStorage.removeItem('currentUser');
            setError('Ошибка аутентификации');
          };

          keycloakInstance.onTokenExpired = () => {
            console.log('Token expired');
            keycloakInstance.updateToken(30);
          };

        } catch (err) {
          console.error('Detailed Keycloak initialization error:', err);
          setError('Ошибка инициализации системы аутентификации');
        } finally {
          setLoading(false);
        }
      };

      initKeycloak();

      return () => {
        if (keycloakInstance) {
          keycloakInstance.onAuthSuccess = undefined;
          keycloakInstance.onAuthError = undefined;
          keycloakInstance.onTokenExpired = undefined;
        }
      };
    }
  }, []);

  // Функция для создания Person и Volonteer через GraphQL
  const createPersonAndVolonteer = async (login: string) => {
    try {
      // Создаем Person
      const createPersonResponse = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreatePerson($input: _CreatePersonInput!) {
              packet {
                createPerson(input: $input) {
                  id
                }
              }
            }
          `,
          variables: {
            input: {
              firstName: login,
              lastName: login,
              birthDate: new Date().toISOString().split('T')[0]
            }
          }
        })
      });

      const personData = await createPersonResponse.json();
      const personId = personData.data.packet.createPerson.id;

      // Создаем Volonteer
      const createVolonteerResponse = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreateVolonteer($input: _CreateVolonteerInput!) {
              packet {
                createVolonteer(input: $input) {
                  id
                  nickName
                }
              }
            }
          `,
          variables: {
            input: {
              nickName: login,
              person: {
                entityId: personId
              }
            }
          }
        })
      });

      const volonteerData = await createVolonteerResponse.json();
      console.log('Volonteer created:', volonteerData);

    } catch (err) {
      console.error('Error creating Person and Volonteer:', err);
      setError('Ошибка при создании профиля пользователя');
    }
  };

  const register = (login: string) => {
    if (keycloak) {
      try {
        console.log('Starting registration process...');
        const currentUrl = window.location.origin;
        console.log('Redirect URI:', currentUrl);
        
        keycloak.register({
          redirectUri: currentUrl
        }).then(() => {
          console.log('Registration redirect initiated successfully');
        }).catch(err => {
          console.error('Registration redirect error:', err);
          setError('Ошибка при попытке регистрации');
        });
      } catch (err) {
        console.error('Registration error:', err);
        setError('Ошибка при попытке регистрации');
      }
    } else {
      console.error('Keycloak not initialized');
      setError('Система авторизации не инициализирована');
    }
  };

  const login = () => {
    if (keycloak) {
      try {
        console.log('Starting login process...');
        keycloak.login({
          redirectUri: window.location.origin
        });
      } catch (err) {
        console.error('Login error:', err);
        setError('Ошибка при попытке входа');
      }
    }
  };

  const logout = () => {
    if (keycloak) {
      try {
        console.log('Starting logout process...');
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        setIsAuthenticated(false);
        keycloak.logout({
          redirectUri: window.location.origin + '/login'
        }).then(() => {
          // Очищаем все данные сессии
          keycloak.clearToken();
          localStorage.clear();
          sessionStorage.clear();
        });
      } catch (err) {
        console.error('Logout error:', err);
        setError('Ошибка при попытке выхода');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Загрузка...</div>
          {error && <div className="text-red-600">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: 'fixed', bottom: 0, right: 0, padding: '1rem', background: '#f0f0f0', zIndex: 1000 }}>
        <p>Debug info:</p>
        <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
        <p>Loading: {loading ? 'Yes' : 'No'}</p>
        <p>Error: {error || 'None'}</p>
        <p>Keycloak initialized: {keycloak ? 'Yes' : 'No'}</p>
        <p>Current user: {currentUser ? JSON.stringify(currentUser) : 'None'}</p>
      </div>
      <AuthContext.Provider 
        value={{ 
          currentUser, 
          loading, 
          error, 
          login, 
          logout, 
          register,
          isAuthenticated 
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 