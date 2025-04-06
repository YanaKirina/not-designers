"use client";

import { useState } from "react";
import { AdminChoice } from '@/components/AdminChoice';
import { useMutation } from '@apollo/client';
import { CreateVolonteerMutation, CreateVolonteerMutationVariables, CreatePersonMutation, CreatePersonMutationVariables } from '@/__generate/types';
import { gql } from '@apollo/client';

const PERSON_ATTRIBUTES = gql`
  fragment PersonAttributes on _E_Person {
    id
    __typename
    firstName
    lastName
    birthDate
  }
`;

const CREATE_PERSON = gql`
  mutation createPerson($input: _CreatePersonInput!) {
    packet {
      createPerson(input: $input) {
        ...PersonAttributes
      }
    }
  }
  ${PERSON_ATTRIBUTES}
`;

const VOLUNTEER_ATTRIBUTES = gql`
  fragment VolonteerAttributes on _E_Volonteer {
    id
    __typename
    nickName
    person {
      entityId
    }
  }
`;

const CREATE_VOLUNTEER = gql`
  mutation createVolonteer($input: _CreateVolonteerInput!) {
    packet {
      createVolonteer(input: $input) {
        ...VolonteerAttributes
      }
    }
  }
  ${VOLUNTEER_ATTRIBUTES}
`;

export default function VolunteersPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nickName, setNickName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [createPerson] = useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CREATE_PERSON);
  const [createVolunteer] = useMutation<CreateVolonteerMutation, CreateVolonteerMutationVariables>(CREATE_VOLUNTEER);

  const handleSubmit = async () => {
    try {
      setError(null);
      
      // Сначала создаем человека
      const personResult = await createPerson({
        variables: {
          input: {
            firstName,
            lastName,
            birthDate: birthDate ? new Date(birthDate).toISOString().split('T')[0] : null
          }
        }
      });

      const personId = personResult.data?.packet?.createPerson?.id;
      if (!personId) {
        throw new Error('Не удалось создать запись о человеке');
      }

      // Затем создаем волонтера, используя ID созданного человека
      await createVolunteer({
        variables: {
          input: {
            nickName: nickName || null,
            person: {
              entityId: personId
            }
          }
        }
      });

      setSuccess(true);
      // Очищаем форму
      setLastName("");
      setFirstName("");
      setBirthDate("");
      setNickName("");
      
      // Скрываем сообщение об успехе через 3 секунды
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при регистрации');
      console.error('Ошибка регистрации:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-11">
      <div className="w-full h-full flex flex-col justify-between item-center">
        <div className="py-10">
          <button className="bg-gradient-to-r from-pink-400 to-purple-600 text-white px-3 py-1 rounded-full font-semibold text-sm mt-4">
            Администратор
          </button>
        </div>
        <AdminChoice/>
        <div className="bg-white shadow-md rounded-xl p-6 py-12 m-20 relative flex flex-col">
          <h2 className="text-lg font-semibold mb-6 text-center text-black">Волонтёры</h2>

          <img
            src="/heart.svg"
            alt="heart"
            className="w-15 h-15 absolute top-4 right-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1 text-black">Фамилия</label>
              <input
                type="text"
                placeholder="Введите фамилию"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-black">Имя</label>
              <input
                type="text"
                placeholder="Введите Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-black">День рождения</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-black">Псевдоним</label>
              <input
                type="text"
                placeholder="Введите псевдоним"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none text-black"
              />
            </div>
          </div>

          {error && (
            <div className="mb-4 text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 text-green-600">
              Волонтёр успешно зарегистрирован!
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition mx-auto my-6 w-[240px]"
          >
            Зарегистрировать
          </button>
        </div>
      </div>
    </main>
  );
}
