// src/app/admin/organizers/page.tsx
'use client'

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CreateOrganizationMutation, CreateOrganizationMutationVariables } from '@/__generate/types'
import { AdminChoice } from '@/components/AdminChoice'
import { gql } from '@apollo/client'

const ORGANIZATION_ATTRIBUTES = gql`
  fragment OrganizationAttributes on _E_Organization {
    id
    __typename
    name
  }
`

const CREATE_ORGANIZATION = gql`
  mutation createOrganization($input: _CreateOrganizationInput!) {
    packet {
      createOrganization(input: $input) {
        ...OrganizationAttributes
      }
    }
  }
  ${ORGANIZATION_ATTRIBUTES}
`

export default function OrganizersPage() {
  const [orgName, setOrgName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [createOrganization] = useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CREATE_ORGANIZATION)

  const handleSubmit = async () => {
    try {
      setError(null)

      if (!orgName.trim()) {
        throw new Error('Название организации не может быть пустым')
      }

      await createOrganization({
        variables: {
          input: {
            name: orgName
          }
        }
      })

      setSuccess(true)
      setOrgName('')
      
      // Скрываем сообщение об успехе через 3 секунды
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при регистрации организации')
      console.error('Ошибка регистрации:', err)
    }
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

          {error && (
            <div className="mb-4 text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 text-green-600">
              Организация успешно зарегистрирована!
            </div>
          )}

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
