import React from 'react'
import { useGetData } from '../hooks/useGetData'

const FireStoreData = () => {
  const [documents] = useGetData()
  return (
    <div>
      <strong>Engineers:</strong>
      {documents.map((eng) => (
        <ul key={eng.id}>
          <li>
            {eng.value.firstName} {eng.value.lastName} ({eng.value.title})
          </li>
        </ul>
      ))}
    </div>
  )
}

export default FireStoreData