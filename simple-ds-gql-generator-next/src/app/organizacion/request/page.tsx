'use client';

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

function formatDateForGraphQL(dateStr: string): string {
  const [day, month, year] = dateStr.split('.');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00Z`;
}

interface FormData {
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    organization: '',
    startDate: '',
    endDate: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Сначала ищем организацию
      const searchResponse = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query searchOrganization {
              searchOrganization {
                elems {
                  id
                  name
                }
              }
            }
          `
        }),
      });

      if (!searchResponse.ok) {
        const errorData = await searchResponse.json();
        throw new Error(errorData.error || 'Ошибка при поиске организации');
      }

      const searchData = await searchResponse.json();
      if (searchData.errors) {
        throw new Error('Ошибка при поиске организации: ' + searchData.errors[0].message);
      }

      // Ищем организацию по имени в результатах
      const existingOrg = searchData.data.searchOrganization.elems.find(
        (org: { name: string }) => org.name === formData.organization
      );

      let organizationId;
      if (existingOrg) {
        // Используем существующую организацию
        organizationId = existingOrg.id;
        console.log('Найдена организация:', existingOrg);
      } else {
        // Создаем новую организацию
        const createResponse = await fetch('/api/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              mutation createOrganization($input: _CreateOrganizationInput!) {
                createOrganization(input: $input) {
                  id
                  name
                }
              }
            `,
            variables: {
              input: {
                name: formData.organization
              }
            }
          }),
        });

        if (!createResponse.ok) {
          const errorData = await createResponse.json();
          throw new Error(errorData.error || 'Ошибка при создании организации');
        }

        const createData = await createResponse.json();
        if (createData.errors) {
          throw new Error('Ошибка при создании организации: ' + createData.errors[0].message);
        }

        organizationId = createData.data.createOrganization.id;
        console.log('Создана новая организация:', createData.data.createOrganization);
      }

      // Создаем событие
      const eventResponse = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation createEvent($input: _CreateEventInput!) {
              packet {
                createEvent(input: $input) {
                  id
                  description
                  startDateTime
                  endDateTime
                  organization {
                    id
                    name
                  }
                }
              }
            }
          `,
          variables: {
            input: {
              description: formData.description,
              startDateTime: formatDateForGraphQL(formData.startDate),
              endDateTime: formatDateForGraphQL(formData.endDate),
              organization: organizationId,
              statusForX: {
                code: "DRAFT",
                reason: "New event created"
              }
            }
          }
        }),
      });

      if (!eventResponse.ok) {
        const errorData = await eventResponse.json();
        throw new Error(errorData.error || 'Ошибка при создании события');
      }

      const eventData = await eventResponse.json();
      if (eventData.errors) {
        throw new Error('Ошибка при создании события: ' + eventData.errors[0].message);
      }

      console.log('Событие создано:', eventData.data.packet.createEvent);
      setSuccess(true);
      setFormData({
        organization: '',
        startDate: '',
        endDate: '',
        description: ''
      });
    } catch (err) {
      console.error('Ошибка при отправке формы:', err);
      setError(err instanceof Error ? err.message : 'Произошла ошибка при отправке формы');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F5F7] font-montserrat">
      
      <div className="pt-[81px] px-4 relative">
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
          mb-[80px]
        ">
          организация
        </div>
  
        <div className="
          mx-auto
          w-[1000px]
          min-h-[320px]
          bg-[#EEF8FF]
          rounded-[20px]
          flex
          flex-col
          items-center
          pt-6 px-6 pb-0
          border border-[#CCE3F3]
          shadow-[0_4px_10px_rgba(0,0,0,0.1)]
          relative
        ">
          <div className="w-full flex flex-col items-center">
            <div className="text-[37px] font-medium text-[#333] mb-[30px] p-[20px]">Создать событие</div>
            
            {error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-4 pt-4 text-green-700 rounded-lg">
                Заявка успешно отправлена!
              </div>
            )}
            
            <div className="w-full flex flex-row justify-center mb-[44px] " style={{ gap: '20px' }}>
              <div className="w-[195px]">
                <input
                  type="text"
                  name="organization"
                  placeholder="организация"
                  value={formData.organization}
                  onChange={handleChange}
                  className="
                    w-full
                    h-[55px]
                    bg-[#F7FCFF]
                    border border-[#D6E9F7]
                    rounded-[10px]
                    px-4
                    placeholder-[#88AFCB]
                    text-[#333]
                    focus:outline-none
                    focus:border-[#88AFCB]
                    text-[20px]
                    text-center
                  "
                />
              </div>
              
              <div className="w-[195px]">
                <input
                  type="text"
                  name="startDate"
                  placeholder="Дата начала"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="
                    w-full
                    h-[55px]
                    bg-[#F7FCFF]
                    border border-[#D6E9F7]
                    rounded-[10px]
                    px-4
                    placeholder-[#88AFCB]
                    text-[20px]
                    text-[#333]
                    focus:outline-none
                    focus:border-[#88AFCB]
                    text-center
                  "
                />
              </div>
              
              <div className="w-[195px]">
                <input
                  type="text"
                  name="endDate"
                  placeholder="Дата окончания"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="
                    w-full
                    h-[55px]
                    bg-[#F7FCFF]
                    border border-[#D6E9F7]
                    rounded-[10px]
                    px-4
                    placeholder-[#88AFCB]
                    text-[20px]
                    text-[#333]
                    focus:outline-none
                    focus:border-[#88AFCB]
                    text-center
                  "
                />
              </div>
              
              <div className="w-[195px]">
                <input
                  type="text"
                  name="description"
                  placeholder="описание"
                  value={formData.description}
                  onChange={handleChange}
                  className="
                    w-full
                    h-[55px]
                    bg-[#F7FCFF]
                    border border-[#D6E9F7]
                    rounded-[10px]
                    px-4
                    placeholder-[#88AFCB]
                    text-[20px]
                    text-[#333]
                    focus:outline-none
                    focus:border-[#88AFCB]
                    text-center
                  "
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`
                bg-[#2CB860]
                text-[#FFFFFF]
                font-bold
                text-[20px]
                rounded-[10px]
                w-[210px]
                h-[49px]
                hover:bg-[#25a055]
                transition-colors
                duration-200
                z-10
                border-none
                focus:outline-none
                mb-6
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isLoading ? 'Отправка...' : 'Отправить'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}