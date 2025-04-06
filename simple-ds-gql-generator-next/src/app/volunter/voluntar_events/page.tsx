'use client';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export default function VolunteersEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full min-h-[600px] md:h-[740px] bg-gradient-to-b from-[#B4ECCF] via-[#AFDDE1] to-[#D7EEEA]">
        <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 md:pl-[50px] lg:pl-[100px] md:pr-[50px] lg:pr-[100px] py-10 md:py-0">
          <div className="max-w-[800px] order-2 md:order-1 mt-10 md:mt-0">
            <h1 className={`${montserrat.className} text-3xl sm:text-4xl md:text-[48px] font-bold text-[#385A64] mb-4 md:mb-6 leading-tight`}>
              Стань частью событий — помогай и вдохновляй!
            </h1>
            <p className={`${montserrat.className} text-lg sm:text-xl md:text-[24px] text-[#555555]`}>
              Участвуйте в волонтерских мероприятиях, получайте опыт и официальные часы для вашего портфолио
            </p>
          </div>
          <div className="order-1 md:order-2 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] relative mx-auto md:mx-0">
            <Image
              src="/volunteers/2cats.svg"
              alt="Волонтеры"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </div>
      </section>

      <div className="h-[30px] md:h-[50px]"></div>

      <section className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 bg-white">
        <h2 className={`${montserrat.className} text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center`}>
          События
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[50px]">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="w-full max-w-[400px] mx-auto sm:max-w-none h-auto min-h-[450px] md:h-[505px] rounded-2xl md:rounded-[30px] border border-black border-opacity-44 p-3 md:p-[10px] flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-full h-[150px] sm:h-[180px] md:h-[204px] rounded-lg md:rounded-[20px] overflow-hidden mb-4 md:mb-6 bg-gray-50 flex items-center justify-center p-2">
                <Image
                  src="/volunteers/event.svg"
                  alt={`Событие ${item}`}
                  width={300}
                  height={180}
                  className="object-contain w-auto h-full p-1"
                />
              </div>

              <div className="flex-grow px-2 md:px-[10px]">
                <h3 className={`${montserrat.className} text-lg md:text-xl font-bold mb-2 md:mb-3 text-center`}>
                  Волонтерство на группе Центра Лечебной Педагогики
                </h3>
                <p className={`${montserrat.className} text-base md:text-lg text-[#686868] mb-3 md:mb-4 text-center`}>
                  26.06.2025 - 30.06.2025
                </p>
                <p className={`${montserrat.className} text-sm md:text-base mb-4 md:mb-6 text-center`}>
                  Данное мероприятие направленно на помощь лицам старше 65-ти лет в период самоизоляции
                </p>
              </div>

              <div className="pt-4 md:pt-6 px-2 md:px-4 pb-4">
                <button className="
                  w-full max-w-[180px] md:w-[211px]
                  h-[32px] md:h-[36px]
                  flex
                  items-center
                  justify-center
                  rounded-lg md:rounded-[10px]
                  bg-gradient-to-r from-[#E372FF] to-[#781092]
                  text-white
                  font-semibold md:font-bold
                  text-base md:text-xl
                  mx-auto
                  hover:opacity-90
                  transition-opacity
                ">
                  Подать заявку
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-16">
          <span className="text-[#E372FF] font-bold text-lg md:text-xl">1</span>
        </div>
      </section>
    </div>
  );
}