"use client";

import { useState } from "react";
import { AdminChoice } from '@/components/AdminChoice';

export default function VolunteersPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = () => {
    console.log({ lastName, firstName, birthDate });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-11">
      <div className="w-full h-full flex flex-col justify-between item-center">
        <div className="py-10">
          <button className="bg-gradient-to-r from-pink-400 to-purple-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
            Администратор
          </button>
        </div>
        <AdminChoice/>
        <div className="bg-white shadow-md rounded-xl p-6 py-12 m-20 relative">
          <h2 className="text-lg font-semibold mb-4">Волонтёры</h2>

          <img
            src="/heart.svg"
            alt="heart"
            className="w-15 h-15 absolute top-4 right-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1">Фамилия</label>
              <input
                type="text"
                placeholder="Введите фамилию"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Имя</label>
              <input
                type="text"
                placeholder="Введите Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">День рождения</label>
              <input
                type="text"
                placeholder="ДД.ММ.ГГ"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          {/* Кнопка */}
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Зарегистрировать
          </button>
        </div>
      </div>
    </main>
  );
}
