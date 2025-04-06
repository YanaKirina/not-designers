'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ login, password });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">

      <div className="absolute inset-0  bg-gradient-to-b from-[#B4ECCF] via-[#AFDDE1] to-[#D7EEEA] via-50% to-80% flex flex-col justify-end items-center">

        <div className="absolute top-10  lg:transform-none lg:inset-0 lg:flex lg:items-center lg:pl-48 z-10">
          <h1 className="text-7xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#284122] text-7xl">Сбер</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E372FF] to-[#781092] text-7xl">Волонтёры</span></h1>
        </div>
      </div>

      <div className="absolute lg:right-20 bg-[#0d2d1096] p-8 rounded-[24px] shadow-md z-10 w-[360px] h-[490px] md:w-[464px] flex flex-col">
        <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow">
          <h1 className="text-white text-2xl font-medium text-center mt-1">Вход</h1>
          <div className="space-y-5">
            <div>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full px-4 py-3 bg-[#ffffff1a] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-[#ffffff32] mt-7"
                placeholder="Почта"
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
            <Link
              href="/admin"
              className="bg-gradient-to-r from-[#74C582] to-[#2d522f] text-white rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              Войти в роли администратора
            </Link>

            <Link
              href="/organizacion"
              className="bg-gradient-to-r from-[#74C582] to-[#2d522f] text-white rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              Войти в роли организатора
            </Link>

            <Link
              href="/volunter/carts"
              className="bg-gradient-to-r from-[#74C582] to-[#2d522f] text-white rounded-[12px] h-[54px] w-full px-4 py-3 text-lg font-normal leading-none text-center flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              Войти в роли волонтёра
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}