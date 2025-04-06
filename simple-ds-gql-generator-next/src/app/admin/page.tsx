'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          mt-8
          ml-4
        ">
          Администратор
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
          <Link href="/admin/organizers" passHref>
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
                <div className="text-[30px] font-sans font-normal text-center mt-[18px]">Регистрировать организатора</div>
                </div>
                <div className="flex-grow"></div>
                <Image
                src="/administration/AMenu1.svg"
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
          <Link href="/admin/volunteers" passHref>
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
              <div className="text-[30px] font-sans font-normal text-center mt-[18px]">Регестрировать Волонтера</div>

            </div>
            <div className="flex-grow"></div>
            <Image
              src="/administration/AMenu2.svg"
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
          
          <Link href="/admin/events" passHref>
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
              <div className="text-[30px] font-sans font-normal text-center mt-[18px]">Согласовать события</div>
            </div>
            <div className="flex-grow"></div>
            <Image
              src="/administration/AMenu3.svg"
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

