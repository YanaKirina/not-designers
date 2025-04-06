'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Сначала создаем Person
      const personResponse = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation createPerson($input: _CreatePersonInput!) {
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
          },
        }),
      });

      const personData = await personResponse.json();

      if (personData.errors) {
        setError(personData.errors[0].message);
        return;
      }

      const personId = personData.data?.packet?.createPerson?.id;
      if (!personId) {
        setError('Не удалось создать пользователя');
        return;
      }

      // Затем создаем Volonteer с ID созданного Person
      const volonteerResponse = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation createVolonteer($input: _CreateVolonteerInput!) {
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
          },
        }),
      });

      const volonteerData = await volonteerResponse.json();

      if (volonteerData.errors) {
        setError(volonteerData.errors[0].message);
        return;
      }

      if (volonteerData.data?.packet?.createVolonteer) {
        setSuccess('Регистрация успешна! Перенаправляем на главную страницу...');
        // Ждем 2 секунды перед редиректом, чтобы пользователь увидел сообщение
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    } catch (err) {
      setError('Произошла ошибка при регистрации');
      console.error('Ошибка регистрации:', err);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#B4ECCF] via-[#AFDDE1] to-[#D7EEEA] via-50% to-80% flex flex-col justify-end items-center">
        <div className="absolute top-10 lg:transform-none lg:inset-0 lg:flex lg:items-center lg:pl-48 z-10">
          <h1 className="text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#284122] text-7xl">
              Сбер
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E372FF] to-[#781092] text-7xl">
              Волонтёры
            </span>
          </h1>
        </div>
      </div>

      <div className="absolute lg:right-20 bg-[#0d2d1096] p-8 rounded-[24px] shadow-md z-10 w-[360px] h-[490px] md:w-[464px] flex flex-col">
        <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow">
          <h1 className="text-white text-2xl font-medium text-center mt-1">Регистрация</h1>
          {error && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-500 text-sm mt-2 text-center">
              {success}
            </div>
          )}
          <div className="space-y-5">
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-[#ffffff32] mt-7"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full px-4 py-3 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-[#ffffff32]"
                placeholder="Логин"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-[#ffffff32]"
                placeholder="Пароль"
                required
              />
            </div>
          </div>

          <div className="mt-auto mb-1 space-y-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#74C582] to-[#2d522f] text-white rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              Зарегистрироваться
            </button>

            <Link
              href="/login"
              className="bg-gradient-to-r from-[#74C582] to-[#2d522f] text-white rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}