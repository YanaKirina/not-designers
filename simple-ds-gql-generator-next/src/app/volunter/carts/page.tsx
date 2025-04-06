'use client';

import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-white pb-10 md:pb-20">
      <div className="h-[120px] md:h-[200px] bg-gradient-to-b from-[#B4ECCF] via-[#AFDDE1] to-[#D7EEEA] via-50% to-80%"></div>
      <div className="relative max-w-[1440px] mx-auto -mt-[60px] md:-mt-[100px] px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="relative -top-[10px] md:-top-[20px] z-10">
            <Image
              src="/volunteers/profile.svg"
              alt="Profile"
              width={120}
              height={120}
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover shadow-lg rounded-full"
              priority
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg w-full max-w-full md:mx-[30px] md:w-[calc(100%-60px)] pt-5 md:pt-[30px] pb-6 md:pb-8 mb-8 md:mb-12">
            <div className="text-center px-2">
              <h1 className="text-lg md:text-[24px] font-medium">
                Иванов Иван Иванович
              </h1>
              <p className="text-xs md:text-[14px] mt-1 md:mt-2">
                15.03.1985
              </p>
            </div>

            <h2 className={`${montserrat.className} text-xl md:text-[30px] font-semibold text-center mt-8 md:mt-[50px] mb-6 md:mb-[50px]`}>
              Отправленные заявки
            </h2>

            <div className="flex justify-center items-center w-full">

              <div className="hidden md:block mr-4 lg:mr-[50px]">
                <Image
                  src="/volunteers/arrow2.svg"
                  alt="Arrow left"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-[50px] md:h-[50px] object-contain"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[30px] lg:gap-[95px] w-full px-2 sm:px-4">
                {[1, 2].map((item) => (
                  <div 
                    key={`sent-${item}`} 
                    className="w-full max-w-[350px] md:w-[320px] lg:w-[386px] h-auto min-h-[380px] md:h-[420px] lg:h-[452px] rounded-xl md:rounded-[25px] border border-black/20 p-3 md:p-[5px] flex flex-col"
                  >
                    <div className="w-full h-[120px] md:h-[150px] lg:h-[180px] rounded-lg md:rounded-[15px] overflow-hidden mb-3 md:mb-5 flex items-center justify-center bg-gray-50">
                      <Image
                        src="/volunteers/event.svg"
                        alt={`Событие ${item}`}
                        width={120}
                        height={80}
                        className="w-[100px] h-[80px] md:w-[150px] md:h-[100px] object-contain mx-auto"
                      />
                    </div>
                    <div className="flex-grow px-1 md:px-[5px]">
                      <h3 className={`${montserrat.className} text-base md:text-lg font-bold mb-1 md:mb-2 text-center`}>
                        Волонтерство на группе Центра Лечебной Педагогики
                      </h3>
                      <p className={`${montserrat.className} text-sm md:text-base text-[#686868] mb-2 md:mb-3 text-center`}>
                        26.06.2025 - 30.06.2025
                      </p>
                      <p className={`${montserrat.className} text-xs md:text-sm mb-3 md:mb-5 text-center`}>
                        Данное мероприятие направленно на помощь лицам старше 65-ти лет в период самоизоляции
                      </p>
                    </div>
                    <div className="pt-3 md:pt-5 px-2 md:px-3 pb-2 md:pb-0">
                      <button className="
                        w-full max-w-[180px] md:w-[206px]
                        h-[28px] md:h-[31px]
                        flex
                        items-center
                        justify-center
                        rounded-md md:rounded-[8px]
                        bg-gradient-to-r from-[#A3A0A0] to-[#D9D9D9]
                        text-white
                        font-bold
                        text-sm md:text-lg
                        mx-auto
                        transition-opacity
                      ">
                        Отозвать заявку
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block ml-4 lg:ml-[50px]">
                <Image
                  src="/volunteers/arrow1.svg"
                  alt="Arrow right"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-[50px] md:h-[50px] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg w-full max-w-full md:mx-[30px] md:w-[calc(100%-60px)] pt-5 md:pt-[30px] pb-6 md:pb-8">
            <h2 className={`${montserrat.className} text-xl md:text-[30px] font-semibold text-center mt-6 md:mt-[20px] mb-6 md:mb-[50px]`}>
              Посещённые события
            </h2>

            <div className="flex justify-center items-center w-full">

              <div className="hidden md:block mr-4 lg:mr-[50px]">
                <Image
                  src="/volunteers/arrow2.svg"
                  alt="Arrow left"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-[50px] md:h-[50px] object-contain"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[30px] lg:gap-[95px] w-full px-2 sm:px-4">
                {[1, 2].map((item) => (
                  <div 
                    key={`visited-${item}`} 
                    className="w-full max-w-[350px] md:w-[320px] lg:w-[386px] h-auto min-h-[380px] md:h-[420px] lg:h-[452px] rounded-xl md:rounded-[25px] border border-black/20 p-3 md:p-[5px] flex flex-col"
                  >
                    <div className="w-full h-[120px] md:h-[150px] lg:h-[180px] rounded-lg md:rounded-[15px] overflow-hidden mb-3 md:mb-5 flex items-center justify-center bg-gray-50">
                      <Image
                        src="/volunteers/event.svg"
                        alt={`Событие ${item}`}
                        width={120}
                        height={80}
                        className="w-[100px] h-[80px] md:w-[150px] md:h-[100px] object-contain mx-auto"
                      />
                    </div>
                    <div className="flex-grow px-1 md:px-[5px]">
                      <h3 className={`${montserrat.className} text-base md:text-lg font-bold mb-1 md:mb-2 text-center`}>
                        Благотворительный концерт для детей
                      </h3>
                      <p className={`${montserrat.className} text-sm md:text-base text-[#686868] mb-2 md:mb-3 text-center`}>
                        15.05.2025 - 17.05.2025
                      </p>
                      <p className={`${montserrat.className} text-xs md:text-sm mb-3 md:mb-5 text-center`}>
                        Ежегодный благотворительный концерт в поддержку детей с ограниченными возможностями
                      </p>
                    </div>
                    <div className="pt-3 md:pt-5 px-2 md:px-3 pb-2 md:pb-0">
                      <button className="
                        w-full max-w-[180px] md:w-[206px]
                        h-[28px] md:h-[31px]
                        flex
                        items-center
                        justify-center
                        rounded-md md:rounded-[8px]
                        bg-gradient-to-r from-[#B2ECD0] to-[#93F0C3]
                        text-white
                        font-bold
                        text-sm md:text-lg
                        mx-auto
                        transition-opacity
                      ">
                        Получить выписку
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block ml-4 lg:ml-[50px]">
                <Image
                  src="/volunteers/arrow1.svg"
                  alt="Arrow right"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-[50px] md:h-[50px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}