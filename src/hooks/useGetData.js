import { useState, useEffect } from 'react'
import firebase from 'firebase'

export const useGetData = () => {
  const [documents, setDocuments] = useState([])
  const db = firebase.firestore()

  useEffect(() => {
    db.collection('engineers')
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        )
        setDocuments(arr);
      })
  }, [db])
  return [documents]
}