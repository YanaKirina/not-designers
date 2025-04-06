'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F5F7]">
      {/* Header would go here */}
      
      {/* Main content container with 81px top padding */}
      <div className="pt-[81px] px-4">
        {/* Organization rectangle */}
        <div className="
          w-[211px]
          h-[36px]
          flex
          items-center
          justify-center
          rounded-[10px]
          bg-gradient-to-r from-[#E372FF] to-[#781092]
          text-[#FFFFFF] 
          font-sans
          font-bold
          text-xl
          ml-4
          mt-6
        ">
          Организация
        </div>
  
        {/* Page title with 81px margin top */}
        <div className="
          text-[35px]        
          text-foreground   
          text-center       
          font-sans        
          font-normal      
          mt-[81px]             
          mb-[81px]             
          px-4             
        ">
          Выберите действие
        </div>

        {/* Three containers with responsive layout */}
        <div className="
          flex flex-col items-center min-[989px]:flex-row min-[989px]:justify-center 
          gap-[50px] 
          mt-[81px] mb-[70px]
        ">
          {/* Container 1 */}
          <Link href="/organizacion/request" passHref>
            <div className="
                w-[365px]
                h-[333px]
                bg-[#FFFFFF]
                rounded-[20px]
                shadow-[0_4px_4px_rgba(0,0,0,0.08)]
                relative
                p-6
                flex flex-col
            ">
                <div className="flex flex-col items-center">
                <div className="text-[30px] font-sans font-normal text-center mt-[18px]">Создать событие</div>
                <div className="text-[20px] text-[#A3A0A0] text-center mt-[36px]">
                    Подать заявку на событие - Закрыть событие
                </div>
                </div>
                <div className="flex-grow"></div>
                <Image
                src="/organizacion/menu1.svg"
                alt="Картинка 1"
                width={126}
                height={126}
                className="absolute bottom-[18px] right-[18px]"
                />
                <Image
                src="/organizacion/Arrow 4.svg"
                alt="Иконка"
                width={32}
                height={32}
                className="absolute bottom-[18px] left-[18px]"
                />
            </div>
          </Link>
          {/* Container 2 */}
          
          <Link href="/organizacion/volunteer" passHref>
          <div className="
            w-[365px]
            h-[333px]
            bg-[#FFFFFF]
            rounded-[20px]
            shadow-[0_4px_4px_rgba(0,0,0,0.08)]
            relative
            p-6
            flex flex-col
            min-[989px]:mt-0 
          ">
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-sans font-normal text-center mt-[18px]">Заявки волонтеров</div>
              <div className="text-[20px] text-[#A3A0A0] text-center mt-[36px]">
                Согласовывать или отменить заявки волонтеров
              </div>
            </div>
            <div className="flex-grow"></div>
            <Image
              src="/organizacion/menu2.svg"
              alt="Картинка 2"
              width={130}
              height={110}
              className="absolute bottom-[18px] right-[15px]"
            />
            <Image
              src="/organizacion/Arrow 4.svg"
              alt="Иконка"
              width={32}
              height={32}
              className="absolute bottom-[18px] left-[18px]"
            />
          </div>
          </Link>
          {/* Container 3 */}
          <Link href="/organizacion/work" passHref>
          <div className="
            w-[365px]
            h-[333px]
            bg-[#FFFFFF]
            rounded-[20px]
            shadow-[0_4px_4px_rgba(0,0,0,0.08)]
            relative
            p-6
            flex flex-col
            min-[989px]:mt-0 
          ">
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-sans font-normal text-center mt-[18px]">Работа волонтеров</div>
              <div className="text-[20px] text-[#A3A0A0] text-center mt-[36px]">
                Подтвердить факт работы волонтера по итогам события
              </div>
            </div>
            <div className="flex-grow"></div>
            <Image
              src="/organizacion/menu3.svg"
              alt="Картинка 3"
              width={130}
              height={130}
              className="absolute bottom-[18px] right-[18px]"
            />
            <Image
              src="/organizacion/Arrow 4.svg"
              alt="Иконка"
              width={32}
              height={32}
              className="absolute bottom-[18px] left-[18px]"
            />
          </div>
          </Link>
        </div>
      </div>
    </main>
  );
}