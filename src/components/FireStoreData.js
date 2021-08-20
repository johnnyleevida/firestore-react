import React from 'react'
import { useGetData } from '../hooks/useGetData'

const FireStoreData = () => {
  const [documents] = useGetData()
  return (
    <div>
      <strong>Engineers:</strong>
      {documents.map(
        (eng) => {
          const val = eng.value
          return (
            <ul key={eng.id}>
              <li>
                <a href={`mailto:${eng.id}`}>{val.firstName} {val.lastName}</a> ({val.title})
              </li>
            </ul>
          )
        }
      )}
    </div>
  )
}

export default FireStoreData