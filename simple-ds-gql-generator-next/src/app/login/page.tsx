'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const router = useRouter();
  const { register, isAuthenticated, currentUser, loading, error: authError, logout } = useAuth();

  useEffect(() => {
    // Если пользователь авторизован, но мы на странице регистрации,
    // выполняем выход для возможности новой регистрации
    if (isAuthenticated && currentUser) {
      logout();
    }
  }, [isAuthenticated, currentUser, logout]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) {
      console.log('Подождите, система инициализируется...');
      return;
    }
    if (!login) {
      console.error('Login is required');
      return;
    }
    register(login);
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Регистрация
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="login" className="sr-only">
                Email
              </label>
              <input
                id="login"
                name="login"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
          </div>

          {authError && (
            <div className="text-red-500 text-sm text-center">{authError}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? 'Загрузка...' : 'Зарегистрироваться'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}