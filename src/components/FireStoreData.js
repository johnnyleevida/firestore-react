import React from 'react'
import { useGetData } from '../hooks/useGetData'

const FireStoreData = () => {
  const [documents] = useGetData()
  return (
    <div>
      <strong>Engineers:</strong>
      {documents.map(
        (eng) => {
          const value = eng.value
          return (
            <ul key={eng.id}>
              <li>
                <a href={`mailto:${value.email}`}>{value.firstName} {value.lastName}</a> ({value.title})
              </li>
            </ul>
          )
        }
      )}
    </div>
  )
}

export default FireStoreData