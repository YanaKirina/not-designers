'use client'

import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { AdminChoice } from '@/components/AdminChoice'
import { SearchEventQuery } from '@/__generate/types'

const EVENT_ATTRIBUTES = gql`
  fragment EventAttributes on _E_Event {
    id
    __typename
    organization {
      id
      name
    }
    description
    startDateTime
    endDateTime
  }
`


const SEARCH_EVENT = gql`
  query searchEvent($cond: String) {
    searchEvent(cond: $cond) {
      elems {
        ...EventAttributes
      }
    }
  }
  ${EVENT_ATTRIBUTES}
`

export default function EventsPage() {      
  const { data, loading, error } = useQuery<SearchEventQuery>(SEARCH_EVENT)

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleString('ru-RU')
  }

  return (
    <main className="min-h-screen bg-gray-50 p-11">
      <div className="w-full h-full flex flex-col justify-between item-center">
        <div className="py-10">
          <button className="bg-gradient-to-r from-pink-400 to-purple-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
            Администратор
          </button>
        </div>

        <AdminChoice />

        <div className="flex justify-center my-20 p-6">
          <div className="bg-white shadow-md rounded-xl p-6 relative w-full bg-white shadow-md rounded-xl  relative flex flex-col">
            <h2 className="text-lg font-semibold mb-6 text-black text-center">События</h2>

            <img
              src="/heart.svg"
              alt="heart"
              className="w-10 h-10 absolute top-4 right-4"
            />

            {loading && (
              <div className="text-center py-4 text-black">Загрузка...</div>
            )}

            {error && (
              <div className="text-red-600 text-center py-4">
                Ошибка при загрузке событий: {error.message}
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 font-semibold text-black">Организация</th>
                    <th className="text-left py-2 px-4 font-semibold text-black">Дата начала</th>
                    <th className="text-left py-2 px-4 font-semibold text-black">Дата окончания</th>
                    <th className="text-left py-2 px-4 font-semibold text-black">Описание</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.searchEvent.elems.map((event) => (
                    <tr key={event.id} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4 text-black">{event.organization.name}</td>
                      <td className="py-2 px-4 text-black">{formatDate(event.startDateTime)}</td>
                      <td className="py-2 px-4 text-black">{formatDate(event.endDateTime)}</td>
                      <td className="py-2 px-4 text-black">{event.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {data?.searchEvent.elems.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                Нет доступных событий
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
