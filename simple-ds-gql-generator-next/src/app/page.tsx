'use client';
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#B4ECCF] via-[#AFDDE1] to-[#D7EEEA] via-50% to-80%"/>
      {/* <Header /> */}
      <div className="relative container px-6 flex flex-col">
        <div className="flex justify-between items-start pt-20">
          <div className="flex flex-col items-start pt-9 ml-14 w-1/2">
            <h1 className="text-7xl leading-[1.3] mt-10 mb-10 md:text-7xl lg:text-8xl font-light text-[#2E2E2E]">
              Делай мир лучше вместе со
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#282727]"> Сбером</span>
            </h1>
            
            <Link href="/" passHref>
              <button className="bg-gradient-to-r from-[#E372FF] to-[#781092] text-white text-2xl mt-2 mb-6 px-16 py-4 rounded-[20px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50">
                Начать сейчас
              </button>
            </Link>
          </div>

          <div className="w-[50%] pt-10 mt-10 flex justify-end">
            <img 
              src="/main_page/love_cat.svg" 
              alt="Love Cat" 
              className="max-h-[600px] h-auto object-contain"
            />
          </div>
        </div>

        <div className="relative mt-0 z-10">
            <div className="relative bg-[#ffffff5b] rounded-[30px] p-12 shadow-xl w-full h-[550px]">
              <div className="h-full p-12 flex flex-col">
                <div className="flex-grow">
                  <h2 className="w-[80%] leading-[1.6] text-5xl font-normal text-gray-800 mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#284122] text-7xl">Сбер</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E372FF] to-[#781092] text-7xl">Волонтёры</span> — платформа, где добрые дела становятся реальностью!
                  </h2>
                  <p className=" w-[60%] leading-[1.4] mt-10 text-[30px] text-[#484848]">
                  Хотите помогать и менять мир к лучшему? Или ищете волонтёров для своего проекта? Здесь встречаются те, кто готов действовать, и те, кому нужна поддержка. 
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[50%] mr-1 pb-0">
                <img 
                  src="/main_page/smart_man.svg" 
                  alt="Smart Man" 
                  className="max-h-[400px] h-auto object-contain translate-x-[80%]"
                />
              </div>
            </div>
        </div>

        <div className="mt-10 w-full">
          <div className="w-[60%] bg-[#393939a2] text-white leading-[1.6] text-4xl p-10 rounded-[30px] mt-10 mb-4 hover:scale-105 shadow-lg shadow-[484848]/50">
            <p>Для волонтёров — сотни мероприятий, где ваша помощь важна. Выбирайте то, что близко вам, и присоединяйтесь! </p>
          </div>
          
          <div className="w-[60%] bg-[#393939a2] text-white leading-[1.6] text-4xl p-10 rounded-[30px] mt-5 ml-auto hover:scale-105 shadow-lg shadow-[484848]/50">
            <p>Для организаций — простой способ найти отзывчивых людей. Создавайте события, привлекайте участников и воплощайте добрые идеи вместе.</p>
          </div>
          <div className="w-full flex justify-end pr-10">
            <img 
              src="/main_page/smart_cat.svg" 
              alt="Smart Cat" 
              className="max-h-[400px] h-auto object-contain -mt-1 translate-x-[-80%]"
            />
          </div>
        </div>


        <div className="relative mt-0 z-10">
            <div className="relative bg-[#ffffff5b] rounded-[30px] p-12 shadow-xl w-full h-[550px] mb-8">
              <div className="h-full p-12 flex flex-col">
                <div className="flex-grow">
                  <h2 className="w-[80%] leading-[1.6] text-5xl font-normal text-gray-800 mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C582] to-[#284122] text-7xl">Давай делать добро вместе!</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E372FF] to-[#781092] text-7xl">Скорее смотри ближайшие события!</span>
                  </h2>
                </div>
                  <Link href="/volunter/voluntar_events" passHref>
                    <button className="bg-gradient-to-r from-[#E372FF] to-[#781092] text-white text-2xl mt-2 px-16 py-4 rounded-[20px] font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[484848]/50">
                      Ближайшие события
                    </button>
                  </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
