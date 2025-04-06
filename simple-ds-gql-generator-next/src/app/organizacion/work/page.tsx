'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const event = {
    id: 1,
    name: "Фестиваль добрых дел 2023",
    volunteers: [
      {
        id: 1,
        name: "Иванова Анна Петровна",
        occupation: "Студентка МГУ",
        age: 22,
      },
      {
        id: 2,
        name: "Петров Сергей Иванович",
        occupation: "Работает в ООО 'Технологии'",
        age: 30,
      },
      {
        id: 3,
        name: "Сидорова Мария Владимировна",
        occupation: "Школьница, Лицей №153",
        age: 17,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F3F5F7]">
        <Link 
        href="/organizacion/menu_organizacion" 
        className="absolute top-8 right-8 z-50"
        aria-label="Меню организации"
      >
        <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#781092" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </Link>
      

      
      
      <div className="pt-[81px] px-4">
        <div className="
          w-[211px]
          h-[36px]
          flex
          items-center
          justify-center
          rounded-[10px]
          bg-gradient-to-r from-[#E372FF] to-[#781092]
          text-[#FFFFFF] 
          font-bold
          text-xl
          ml-4
        ">
          организация
        </div>

        <div className="flex flex-col items-center mt-6">
          <h1 className="
            text-[35px]
            font-medium
            text-center
          ">
            
            Подвердить работу волонтеров  
          </h1>
          
          <div className="mt-4">
            <Image 
              src="/organizacion/cat_circle.svg" 
              alt="Cat circle" 
              width={163}
              height={163}
            />
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-4xl">
          <div className="
            bg-white
            rounded-[20px]
            border
            border-[#D9D9D9]
            shadow-md
            p-6
            mb-8
          ">
            {/* Event title */}
            <h2 className="
              text-2xl
              font-regular 
              mb-6
              text-[000000]
            ">
              Заявки на мероприятие: {event.name}
            </h2>
            
            {/* Volunteers list */}
            <div className="space-y-4">
              {event.volunteers.map((volunteer) => (
                <div 
                  key={volunteer.id}
                  className="
                    bg-white
                    rounded-lg
                    border
                    border-[#D9D9D9]
                    p-4
                    w-full
                    flex
                    items-center
                    justify-between
                  "
                >
                  {/* Volunteer info */}
                  <div className="flex-1">
                    <div className="font-medium text-[#333333]">{volunteer.name}</div>
                    <div className="text-sm text-[#666666]">
                      {volunteer.occupation}, {volunteer.age} лет
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex space-x-2">
                    <button className="
                      bg-[#781092]
                      text-white
                      px-4
                      py-1
                      rounded-lg
                      hover:bg-[#5a0c6d]
                      transition
                      text-sm
                    ">
                      Подвердить
                    </button>
                    <button className="
                      border
                      border-[#781092]
                      text-[#781092]
                      px-4
                      py-1
                      rounded-lg
                      hover:bg-[#f3e5f5]
                      transition
                      text-sm
                    ">
                      Отменить 
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}