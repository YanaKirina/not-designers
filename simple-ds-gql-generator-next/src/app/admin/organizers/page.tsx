// src/app/admin/organizers/page.tsx
'use client'

import { useState } from 'react'

export default function OrganizersPage() {
  const [orgName, setOrgName] = useState('')

  const handleSubmit = () => {
    console.log({ orgName })
    // Тут можешь добавить свою логику отправки
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Кнопка Администратор */}
        <div className="mb-6">
          <button className="bg-gradient-to-r from-pink-400 to-purple-600 text-white px-4 py-1 rounded-full font-semibold text-sm">
            Администратор
          </button>
        </div>

        {/* Вкладки */}
        <div className="flex space-x-2 mb-8">
          <button className="bg-gray-200 text-black px-6 py-2 rounded-full font-medium">
            Регистрация(Волонтёры)
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium">
            Регистрация(Организаторы)
          </button>
          <button className="bg-gray-200 text-black px-6 py-2 rounded-full font-medium">
            События
          </button>
        </div>

        {/* Карточка формы */}
        <div className="bg-white shadow-md rounded-xl p-6 relative">
          <h2 className="text-lg font-semibold mb-6">Организаторы</h2>

          {/* Сердечко */}
          <img
            src="/heart.png"
            alt="heart"
            className="w-8 h-8 absolute top-4 right-4"
          />

          {/* Поле ввода */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Название</label>
            <input
              type="text"
              placeholder="Название организации"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            />
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
  )
}
