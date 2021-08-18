import React from 'react'
import { useGetData } from '../hooks/useGetData'

const FireStoreData = () => {
  const [documents] = useGetData()
  return (
    <div>
      <strong>Values:</strong>
      {documents.map((document) => (
        <div key={document.id}>
          <div>
            Document: {document.id} / Value: {document.value.value}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FireStoreData