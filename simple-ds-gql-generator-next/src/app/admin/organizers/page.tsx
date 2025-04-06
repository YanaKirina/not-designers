// src/app/admin/organizers/page.tsx
'use client'

import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CreateOrganizationMutation, CreateOrganizationMutationVariables } from '../../../__generate/types'
import { AdminChoice } from '../../../components/AdminChoice'
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
    <main className="min-h-screen bg-gray-50 p-11">
      <div className="w-full h-full flex flex-col justify-between item-center">
        <div className="py-10">
          <button className="bg-gradient-to-r from-pink-400 to-purple-600 text-white px-3 py-1 rounded-full font-semibold text-sm">
            Администратор
          </button>
        </div>

        <AdminChoice />

        {/* Карточка формы */}
        <div className="bg-white shadow-md rounded-xl p-6 py-12 m-20 relative flex flex-col ">
          <h2 className="text-lg font-semibold mb-6 text-center text-black">Организаторы</h2>

          {/* Сердечко */}
          <img
            src="/heart.svg"
            alt="heart"
            className="w-15 h-15 absolute top-4 right-4"
          />

          {/* Поле ввода */}
          <div className="mb-6">
            <label className="block font-medium mb-1 text-black">Название</label>
            <input
              type="text"
              placeholder="Название организации"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-black"
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
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition mx-auto my-6 w-[240px]"
          >
            Зарегистрировать
          </button>
        </div>
      </div>
    </main>
  )
}
