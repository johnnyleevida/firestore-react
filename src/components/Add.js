import React from 'react'
import firebase from 'firebase'

const Add = () => {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [title, setTitle] = React.useState('')
    const db = firebase.firestore()

  const getFirstName = (e) => setFirstName(e.target.value)
  const getLastName = (e) => setLastName(e.target.value)
  const getTitle = (e) => setTitle(e.target.value)

  const addValue = () => {
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@vida.com`
    db.collection('engineers')
      .doc(email)
      .set({ firstName, lastName, title })
      .then(function() { console.log('Value successfully written!') })
      .catch(function(err) { console.error("Error writing Value: ", err) })
  }

  return (
    <div className='add'>
      <input onBlur={getFirstName} type='text' placeholder='First Name' />
      <input onBlur={getLastName} type='text' placeholder='Last Name' />
      <input onBlur={getTitle} type='text' placeholder='Job Title' />
      <button type='button' onClick={addValue}>Add</button>
    </div>
  )
}

export default Add;