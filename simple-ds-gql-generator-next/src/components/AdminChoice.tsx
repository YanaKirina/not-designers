'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export const AdminChoice = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex justify-center bg-[#E3EBEF] m-auto rounded-full">
      <Link href="/admin/volunteers" passHref>
        <button className={`${isActive('/admin/volunteers') ? 'bg-black text-white' : 'bg-gray-200 text-black'} px-16 py-3 rounded-full font-medium cursor-pointer`}>
          Регистрация(Волонтёры)
        </button>
      </Link>
      <Link href="/admin/organizers" passHref>
        <button className={`${isActive('/admin/organizers') ? 'bg-black text-white' : 'bg-gray-200 text-black'} px-6 py-3 rounded-full font-medium cursor-pointer`}>
          Регистрация(Организаторы)
        </button>
      </Link>
      <Link href="/admin/events" passHref>
        <button className={`${isActive('/admin/events') ? 'bg-black text-white' : 'bg-gray-200 text-black'} px-6 py-3 rounded-full font-medium cursor-pointer`}>
          События
        </button>
      </Link>
    </div>
  );
};
