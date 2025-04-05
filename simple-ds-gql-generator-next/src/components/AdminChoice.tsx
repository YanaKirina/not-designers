'use client';

import React from "react";
import Link from "next/link";

export const AdminChoice = () => {
  return (
    <div className="flex justify-center bg-[#E3EBEF] m-auto rounded-full">
      <Link href="/admin/volunteers" passHref>
        <button className="bg-black text-white px-16 py-3 rounded-full font-medium cursor-pointer">
          Регистрация(Волонтёры)
        </button>
      </Link>
      <Link href="/admin/organizers" passHref>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-full font-medium cursor-pointer">
          Регистрация(Организаторы)
        </button>
      </Link>
      <Link href="/admin/events" passHref>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-full font-medium cursor-pointer">
          События
        </button>
      </Link>
    </div>
  );
};

