'use client';

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-[#ffffff5b] shadow-md z-50 h-[90px]">
      <div className="container mx-auto px-1 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/main_page/sber_logo.svg" 
            width={70} 
            height={70} 
            alt="Логотип Сбер"
            className="object-contain"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#284122] text-4xl">Сбер</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E372FF] to-[#781092] text-4xl">Волонтёры</span>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="text-2xl font-light text-gray-800 hover:text-[#2c9c3b] transition-colors">
            Главная
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/login" passHref>
            <button className="bg-gradient-to-r from-[#74C582] to-[#284122] text-white text-xl px-12 py-3 rounded-[20px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50">
              Войти
            </button>
          </Link>
          
          <Link href="/volunter/carts" className="flex items-center">
            <img 
              src="/main_page/lk_cat.svg" 
              width={120}
              height={1200} 
              alt="Личный кабинет"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

